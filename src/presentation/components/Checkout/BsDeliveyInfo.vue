<template>
  <div class="Checkout__shipping">
    <h2 class="Checkout__title Checkout__title--shipping">
      Datos de Envío
    </h2>
    <div
      class="Checkout__shippingForm"
    >
      <label for="name">Nombre:</label>
      <input
        id="name"
        v-model="deliveryInfo.name"
        type="text"
        autocomplete="off"
      >

      <label for="address">Dirección:</label>
      <input
        id="address"
        v-model="deliveryInfo.address"
        type="text"
        autocomplete="off"
      >

      <label for="city">Ciudad:</label>
      <input
        id="city"
        v-model="deliveryInfo.city"
        type="text"
        autocomplete="off"
      >

      <label for="state">Departamento:</label>
      <input
        id="state"
        v-model="deliveryInfo.department"
        type="text"
        autocomplete="off"
      >

      <label for="phone">Teléfono:</label>
      <input
        id="phone"
        v-model="deliveryInfo.phoneNumber"
        type="text"
        autocomplete="off"
      >

      <label for="email">Correo Electrónico:</label>
      <input
        id="email"
        v-model="deliveryInfo.email"
        type="email"
        autocomplete="off"
      >

      <div class="Checkout__shippingForm__document">
        <label for="document">Documento:</label>
        <div>
          <select
            id="documentType"
            v-model="deliveryInfo.documentType"
          >
            <option
              value="CC"
              selected
            >
              CC
            </option>
          </select>
          <input
            id="document"
            v-model="deliveryInfo.documentId"
            type="text"
            autocomplete="off"
            @input="onlyNumbers"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});

const deliveryInfo = ref({ ...props.data });

const emit = defineEmits(['update-delivery-info']);

const onlyNumbers = (event) => {
  deliveryInfo.value.documentId = event.target.value.replace(/[^0-9]/g, '');
};

watch(() => deliveryInfo, (newData) => {
  emit('update-delivery-info', { ...newData.value });
}, { deep: true });
</script>
