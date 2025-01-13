<template>
  <div>
    <BsBackdrop>
      <BsCheckout />
    </BsBackdrop>
    <BsHero />
    <BsProductList />
  </div>
</template>

<script setup>
import { useStore } from 'vuex';

const store = useStore();

const isVisible = computed(() => store.state.backdrop.isVisible);

watch(isVisible, (value) => {
  document.body.classList.toggle('modal-open', value);
});
</script>

<style>

</style>
