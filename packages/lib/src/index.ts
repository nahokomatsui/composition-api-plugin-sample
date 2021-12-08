import { VueConstructor, PluginObject } from "vue";
import Logo from "./components/Logo.vue";

const plugin: PluginObject<VueConstructor> = {
  install: (Vue) => {
    Vue.component("LibLogo", Logo);
  },
};

export default plugin;
