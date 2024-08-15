import Layout from "./Layout.vue";
import PrimeVue from "primevue/config";
import MultiSelect from "primevue/multiselect";
import FloatLabel from "primevue/floatlabel";
import Aura from "@primevue/themes/aura";
import "./style.css";

export default {
  Layout,
  enhanceApp({ app, router, siteData }) {
    app.use(PrimeVue, {
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: "", // Disable dark mode
        },
      },
    });
    app.component("MultiSelect", MultiSelect);
    app.directive("FloatLabel", FloatLabel);
  },
};
