<template>
  <div
    class="backdrop"
    :class="{ 'backdrop-active': isVisible }"
  >
    <slot />
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const isVisible = computed(() => store.state.backdrop.isVisible);
</script>
