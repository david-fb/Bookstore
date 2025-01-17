<template>
  <section class="OrderPlaced">
    <button
      class="OrderPlaced__close"
      aria-label="Cerrar"
      type="button"
      @click="$emit('close')"
    >
      <ClearIcon
        width="28px"
        height="28px"
      />
    </button>
    <h1 class="OrderPlaced__title">
      Detalles de la orden
    </h1>
    <div>
      <p><span class="OrderPlaced_subtitle">Orden #:</span> {{ orderData.id }}</p>
      <p><span class="OrderPlaced_subtitle">Estado:</span> {{ orderData.status }}</p>
      <br>
      <p><span class="OrderPlaced_subtitle">Información de envío:</span></p>
      <p><span class="OrderPlaced_subtitle">Nombre:</span> {{ orderData.customer.name }}</p>
      <p><span class="OrderPlaced_subtitle">Dirección:</span> {{ orderData.customer.address }}</p>
      <p><span class="OrderPlaced_subtitle">Ciudad:</span> {{ orderData.customer.city }}</p>
      <p><span class="OrderPlaced_subtitle">Departamento:</span> {{ orderData.customer.department }}</p>
      <p><span class="OrderPlaced_subtitle">Número de contacto:</span> {{ orderData.customer.contactNumber }}</p>
      <p><span class="OrderPlaced_subtitle">Correo electrónico:</span> {{ orderData.customer.email }}</p>
      <br>
      <p><span class="OrderPlaced_subtitle">Total:</span> {{ formatCurrency(orderData.totalAmount) }}</p>
      <p><span class="OrderPlaced_subtitle">Productos:</span></p>
      <ul class="OrderPlaced__products">
        <li
          v-for="item in orderData.items"
          :key="item.id"
        >
          <BsOrderPlacedProduct
            :item="item"
          />
        </li>
      </ul>
      <div
        v-if="orderData.status === 'APPROVED'"
        class="OrderPlaced__actions"
      >
        <button
          class="OrderPlaced__continueShopping"
          @click="$emit('close')"
        >
          Continuar comprando
        </button>
        <p>Gracias por tu compra!</p>
      </div>
      <div
        v-else
        class="OrderPlaced__actions"
      >
        <button
          class="OrderPlaced__continueShopping"
          @click="$emit('close')"
        >
          Volver a la página principal
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  showOrderPlaced: Boolean,
  orderData: {
    type: Object,
    default: {},
  },
});

defineEmits(['close']);
</script>
