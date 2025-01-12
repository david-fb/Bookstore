import { defineAsyncComponent } from 'vue';

export const getCardIcon = (type: string) => {
  const icons = {
    visa: defineAsyncComponent(() => import('~/presentation/components/icons/Cards/VisaIcon.vue')),
    mastercard: defineAsyncComponent(() => import('~/presentation/components/icons/Cards/MastercardIcon.vue')),
    amex: defineAsyncComponent(() => import('~/presentation/components/icons/Cards/AmexIcon.vue')),
    discover: defineAsyncComponent(() => import('~/presentation/components/icons/Cards/DiscoverIcon.vue')),
    diners: defineAsyncComponent(() => import('~/presentation/components/icons/Cards/DinersClubIcon.vue')),
    jcb: defineAsyncComponent(() => import('~/presentation/components/icons/Cards/JcbIcon.vue')),
  };

  return icons[type] || null;
};
