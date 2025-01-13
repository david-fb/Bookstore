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
    <form class="Checkout">
      <div
        v-show="currentStep.id === 1"
        id="summary"
        class="Checkout__section Checkout__summary"
      >
        <BsCheckoutProductList :products="cart" />
        <button
          type="button"
          class="Checkout__flow__button"
          @click="nextStep"
        >
          Continuar <RightArrowIcon
            width="24px"
            height="24px"
          />
        </button>
      </div>

      <div
        v-show="currentStep.id === 2"
        id="delivery"
        class="Checkout__section"
      >
        <BsDeliveyInfo />
        <div class="Checkout__flow">
          <button
            type="button"
            class="Checkout__flow__button"
            @click="prevStep"
          >
            <LeftArrowIcon />
          </button>
          <button
            type="button"
            class="Checkout__flow__button"
            @click="nextStep"
          >
            <RightArrowIcon />
          </button>
        </div>
      </div>

      <div
        v-show="currentStep.id === 3"
        id="payment"
        class="Checkout__section"
      >
        <BsPaymentInfo />
        <div class="Checkout__flow">
          <button
            type="button"
            class="Checkout__flow__button"
            @click="prevStep"
          >
            <LeftArrowIcon />
          </button>
          <input
            type="submit"
            value="Pagar Ahora"
            class="Checkout__submit"
          >
        </div>
      </div>
    </form>
  </section>
</template>

<script setup>
import { useStore } from 'vuex';

const store = useStore();
const toggleBackdrop = () => store.dispatch('backdrop/toggleBackdrop', false);
const showSteps = ref(false);

const cart = ref([
  {
    id: 1,
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in',
    price: 100,
    image: 'https://m.media-amazon.com/images/I/9101MLPcFTL._AC_UY247.5_FMwebp_.jpg?aicid=books-design-system-web',
    stock: 10,
    quantity: 1,
  },
  {
    id: 2,
    title: 'Product 2',
    description: 'Description 2',
    price: 200,
    image: 'https://m.media-amazon.com/images/I/9101MLPcFTL._AC_UY247.5_FMwebp_.jpg?aicid=books-design-system-web',
    stock: 20,
    quantity: 2,
  },
]);

const steps = ref([
  {
    id: 1,
    title: 'Resumen',
  },
  {
    id: 2,
    title: 'Envío',
  },
  {
    id: 3,
    title: 'Pago',
  },
]);

const currentStep = ref(steps.value[0]);

const nextStep = () => {
  const currentIndex = steps.value.indexOf(currentStep.value);
  currentStep.value = steps.value[currentIndex + 1];
};

const prevStep = () => {
  const currentIndex = steps.value.indexOf(currentStep.value);
  currentStep.value = steps.value[currentIndex - 1];
};

const toggleSteps = () => {
  showSteps.value = !showSteps.value;
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
