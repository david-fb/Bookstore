<template>
  <div class="Checkout__shipping">
    <h2 class="Checkout__title Checkout__title--shipping">
      Datos de Envío
    </h2>
    <div
      v-if="deliveryInfo.edit"
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
        v-model="deliveryInfo.phone"
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
    </div>
    <div
      v-else
      class="Checkout__shippingInfo"
    >
      <p>
        <span>Nombre: </span> {{ deliveryInfo.name }}
      </p>
      <p>
        <span>Dirección: </span> {{ deliveryInfo.address }}
      </p>
      <p>
        <span>Ciudad: </span> {{ deliveryInfo.city }}
      </p>
      <p>
        <span>Departamento: </span> {{ deliveryInfo.department }}
      </p>
      <p>
        <span>Teléfono: </span> {{ deliveryInfo.phone }}
      </p>
      <p>
        <span>Correo Electrónico: </span> {{ deliveryInfo.email }}
      </p>
      <button
        type="button"
        class="Checkout__shippingInfoEdit"
        @click="toogleEdit"
      >
        Editar
      </button>
    </div>
  </div>
</template>

<script setup>
const deliveryInfo = ref({
  name: '',
  address: '',
  city: '',
  department: '',
  phone: '',
  email: '',
  edit: true,
});

const toogleEdit = () => {
  deliveryInfo.value.edit = !deliveryInfo.value.edit;
};
</script>
