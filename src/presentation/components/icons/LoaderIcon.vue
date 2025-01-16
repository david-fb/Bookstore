<template>
  <span class="loader" />
</template>

<style scoped>
.loader {
    height: 2px;
    width: 2px;
    color: #fff;
    box-shadow: -4px -4px 0 2px,
                -4px -4px 0 2px,
                -4px -4px 0 2px,
                -4px -4px 0 2px;
    animation: loader-38 6s infinite;
}

@keyframes loader-38 {
    0% {
    box-shadow: -4px -4px 0 2px,
                -4px -4px 0 2px,
                -4px -4px 0 2px,
                -4px -4px 0 2px;
    }
    8.33% {
    box-shadow: -4px -4px 0 2px,
                4px -4px 0 2px,
                4px -4px 0 2px,
                4px -4px 0 2px;
    }
    16.66% {
    box-shadow: -4px -4px 0 2px,
                4px -4px 0 2px,
                4px 4px 0 2px,
                4px 4px 0 2px;
    }
    24.99% {
    box-shadow: -4px -4px 0 2px,
                4px -4px 0 2px,
                4px 4px 0 2px,
                -4px 4px 0 2px;
    }
    33.32% {
    box-shadow: -4px -4px 0 2px,
                4px -4px 0 2px,
                4px 4px 0 2px,
                -4px -4px 0 2px;
    }
    41.65% {
    box-shadow: 4px -4px 0 2px,
                4px -4px 0 2px,
                4px 4px 0 2px,
                4px -4px 0 2px;
    }
    49.98% {
    box-shadow: 4px 4px 0 2px,
                4px 4px 0 2px,
                4px 4px 0 2px,
                4px 4px 0 2px;
    }
    58.31% {
    box-shadow: -4px 4px 0 2px,
                -4px 4px 0 2px,
                4px 4px 0 2px,
                -4px 4px 0 2px;
    }
    66.64% {
    box-shadow: -4px -4px 0 2px,
                -4px -4px 0 2px,
                4px 4px 0 2px,
                -4px 4px 0 2px;
    }
    74.97% {
    box-shadow: -4px -4px 0 2px,
                4px -4px 0 2px,
                4px 4px 0 2px,
                -4px 4px 0 2px;
    }
    83.3% {
    box-shadow: -4px -4px 0 2px,
                4px 4px 0 2px,
                4px 4px 0 2px,
                -4px 4px 0 2px;
    }
    91.63% {
    box-shadow: -4px -4px 0 2px,
                -4px 4px 0 2px,
                -4px 4px 0 2px,
                -4px 4px 0 2px;
    }
    100% {
    box-shadow: -4px -4px 0 2px,
                -4px -4px 0 2px,
                -4px -4px 0 2px,
                -4px -4px 0 2px;
    }
}
</style>
