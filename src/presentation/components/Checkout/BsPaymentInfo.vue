<template>
  <div class="Checkout__payment">
    <h2 class="Checkout__title Checkout__title--payment">
      Método de Pago
    </h2>
    <div class="Checkout__payment__form">
      <label for="card-number">Tarjeta de Crédito</label>
      <div class="Checkout__payment__card">
        <input
          id="card-number"
          v-model="cardNumber"
          v-maska="currentMask"
          type="text"
          placeholder="Ingrese su número de tarjeta"
          aria-label="Número de Tarjeta"
          @input="currentMask = generateCardNumberMask()"
        >

        <div v-if="CardIcon">
          <component
            :is="CardIcon"
          />
        </div>
      </div>

      <label for="name_card">Nombre del Titular</label>
      <input
        id="name_card"
        v-model="paymentInfo.cardholderName"
        type="text"
      >

      <div class="Checkout__payment__card__info">
        <div class="Checkout__payment__card__info-date">
          <label for="card-month">Fecha de Expiración</label>
          <div>
            <select
              v-model="paymentInfo.cardMonth"
              name="card-month"
            >
              <option
                value=""
                disabled
                selected
              >
                Mes
              </option>
              <option
                v-for="n in 12"
                :key="n"
                :value="n < 10 ? '0' + n : n"
                :disabled="n < minCardMonth"
              >
                {{ n < 10 ? '0' + n : n }}
              </option>
            </select>
            <select
              v-model="paymentInfo.cardYear"
              name="year-month"
            >
              <option
                value=""
                disabled
                selected
              >
                Año
              </option>

              <option
                v-for="year in rangeYears"
                :key="year"
                :value="year"
              >
                {{ year }}
              </option>
            </select>
          </div>
        </div>

        <div>
          <label for="cvv">CVV</label>
          <input
            id="cvv"
            v-model="paymentInfo.cvv"
            v-maska="'####'"
            type="text"
            placeholder="CVV"
            maxlength="4"
          >
        </div>

        <div>
          <label for="installments">Cuotas</label>
          <select
            id="installments"
            v-model="paymentInfo.installments"
            name="installments"
          >
            <option
              value=""
              disabled
              selected
            >
              Seleccione
            </option>
            <option
              v-for="n in 36"
              :key="n"
              :value="n"
            >
              {{ n }}
            </option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getCardIcon } from '~/utils/getCardIcon';
import { getCardType } from '~/utils/getCardType';

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});

const paymentInfo = ref({ ...props.data });

const emit = defineEmits(['update-payment-info']);

const cardNumber = ref('');
const cardType = ref('');
const CardIcon = computed(() => getCardIcon(cardType.value));
const currentMask = ref('');
const minCardYear = new Date().getFullYear();
const lastTwoDigits = Number(minCardYear.toString().slice(-2));
const rangeYears = Array.from({ length: 12 }, (_, i) => {
  let year = i + lastTwoDigits;
  if (year < 10) {
    year = `0${year}`;
  }
  return '' + year;
});

const minCardMonth = computed(() => {
  if (paymentInfo.value.cardYear === minCardYear) {
    return new Date().getMonth() + 1;
  }

  return 1;
});

const generateCardNumberMask = () => {
  const cardTypeObj = getCardType(cardNumber.value);
  let maskFormat = '#### #### #### ####';

  if (!cardTypeObj) {
    cardType.value = '';
    return maskFormat;
  }
  paymentInfo.value.cardNumber = cardNumber.value.replace(/\s/g, '');
  cardType.value = cardTypeObj.type;
  maskFormat = '';

  cardTypeObj?.format.forEach((format, index) => {
    maskFormat += '#'.repeat(format);
    if (index < cardTypeObj.format.length - 1) {
      maskFormat += ' ';
    }
  });

  return maskFormat;
};

onMounted(() => {
  currentMask.value = generateCardNumberMask();
});

watch(() => paymentInfo, (newData) => {
  emit('update-payment-info', { ...newData.value });
}, { deep: true });
</script>
