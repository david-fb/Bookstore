<template>
  <section class="Container__checkout">
    <div class="Checkout__controls">
      <Transition
        name="height-animation"
        @before-enter="setInitialHeight"
        @enter="setAutoHeight"
        @after-enter="resetHeight"
        @before-leave="setAutoHeight"
        @leave="collapseHeight"
      >
        <div
          v-if="!showSteps"
          key="checkout-buttons"
          class="Checkout__controls__buttons"
        >
          <button
            aria-label="Mostrar Pasos"
            @click="toggleSteps"
          >
            <BurgerMenuIcon />
          </button>
          <span>
            Paso {{ currentStep.id }} de {{ steps.length }}
          </span>
          <button
            aria-label="Volver"
            @click="toggleBackdrop"
          >
            <ReturnIcon />
          </button>
        </div>
        <div
          v-else
          key="checkout-steps"
          class="Checkout__controls__steps"
        >
          <ol class="Checkout__controls__steps__list">
            <li
              v-for="step in steps"
              :key="step.id"
              :class="{ completed_step: currentStep.id >= step.id }"
            >
              <button
                :disabled="step.disabled"
                @click="currentStep = step"
              >
                <span>{{ step.id }}</span> {{ step.title }}
              </button>
            </li>
          </ol>
          <button
            aria-label="Ocultar Pasos"
            class="Checkout__controls__steps__toggle"
            @click="toggleSteps"
          >
            <UpArrowIcon />
          </button>
        </div>
      </Transition>
    </div>
    <form
      class="Checkout"
      @submit="handleSubmit"
    >
      <div
        v-show="currentStep.id === 1"
        id="summary"
        class="Checkout__section Checkout__summary"
      >
        <BsCheckoutProductList :products="checkoutData.items" />
        <button
          type="button"
          class="Checkout__submit"
          :disabled="checkoutData.items.length === 0"
          :class="{ 'btn-disabled': checkoutData.items.length === 0 }"
          @click="nextStep"
        >
          Continuar <RightArrowIcon
            width="18px"
            height="18px"
          />
        </button>
      </div>

      <div
        v-show="currentStep.id === 2"
        id="delivery"
        class="Checkout__section"
      >
        <BsDeliveyInfo
          :data="checkoutData.deliveryInfo"
          @update-delivery-info="handleUpdateDeliveryInfo"
        />
        <div class="Checkout__flow">
          <button
            type="button"
            class="Checkout__flow__button"
            @click="prevStep"
          >
            <LeftArrowIcon
              width="18px"
              height="18px"
            /> Atrás
          </button>
          <button
            type="button"
            class="Checkout__flow__button"
            :disabled="!checkoutData.deliveryInfo.completed"
            :class="{ 'btn-disabled': !checkoutData.deliveryInfo.completed }"
            @click="nextStep"
          >
            Siguiente
            <RightArrowIcon
              width="18px"
              height="18px"
            />
          </button>
        </div>
      </div>

      <div
        v-show="currentStep.id === 3"
        id="payment"
        class="Checkout__section"
      >
        <BsPaymentInfo
          :data="checkoutData.paymentInfo"
          @update-payment-info="handleUpdatePaymentInfo"
        />
        <div class="Checkout__flow">
          <button
            type="button"
            class="Checkout__flow__button"
            @click="prevStep"
          >
            <LeftArrowIcon
              width="18px"
              height="18px"
            /> Atrás
          </button>
          <button
            type="submit"
            class="Checkout__submit"
            :disabled="!checkoutData.paymentInfo.completed"
            :class="{ 'btn-disabled': !checkoutData.paymentInfo.completed }"
          >
            Pagar {{ formatCurrency(checkoutData.total) }}
          </button>
        </div>
      </div>
    </form>
  </section>
</template>

<script setup>
import { useStore } from 'vuex';

const store = useStore();
const checkoutData = computed(() => store.state.checkout.checkout);
const steps = computed(() => [
  { id: 1, title: 'Resumen', disabled: false },
  { id: 2, title: 'Envío', disabled: !checkoutData.value.deliveryInfo.completed || !checkoutData.value.items.length > 0 },
  { id: 3, title: 'Pago', disabled: !checkoutData.value.paymentInfo.completed || !checkoutData.value.items.length > 0 },
]);

const currentStep = ref(steps.value[0]);
const showSteps = ref(false);

const nextStep = () => {
  const currentIndex = steps.value.findIndex(step => step.id === currentStep.value.id);
  currentStep.value = steps.value[currentIndex + 1];
};

const prevStep = () => {
  const currentIndex = steps.value.findIndex(step => step.id === currentStep.value.id);
  currentStep.value = steps.value[currentIndex - 1];
};

const toggleSteps = () => {
  showSteps.value = !showSteps.value;
};

const toggleBackdrop = () => {
  currentStep.value = steps.value[0];
  store.dispatch('backdrop/toggleBackdrop', false);
};

const handleUpdateDeliveryInfo = (data) => {
  store.dispatch('checkout/setDeliveryInfo', data);
};

const handleUpdatePaymentInfo = (data) => {
  store.dispatch('checkout/setPaymentInfo', data);
};

const handleSubmit = (e) => {
  e.preventDefault();
  console.log('submit', checkoutData.value);
};

// Transition helpers
const setInitialHeight = (el) => {
  el.style.height = '0';
  el.style.opacity = '0';
};

const setAutoHeight = (el) => {
  el.style.height = `${el.scrollHeight}px`;
  el.style.opacity = '1';
};

const resetHeight = (el) => {
  el.style.height = '';
  el.style.opacity = '';
};

const collapseHeight = (el) => {
  el.style.height = '0';
  el.style.opacity = '0';
};
</script>
