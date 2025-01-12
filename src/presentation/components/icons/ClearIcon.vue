<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >

    <g
      id="SVGRepo_bgCarrier"
      stroke-width="0"
    />

    <g
      id="SVGRepo_tracerCarrier"
      stroke-linecap="round"
      stroke-linejoin="round"
    />

    <g id="SVGRepo_iconCarrier"> <path
      d="M8 8L16 16"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    /> <path
      d="M16 8L8 16"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    /> </g>

  </svg>
</template>

<script setup>
defineProps({
  width: {
    type: String,
    default: '32px',
  },
  height: {
    type: String,
    default: '32px',
  },
  color: {
    type: String,
    default: 'currentColor',
  },
});
</script>
