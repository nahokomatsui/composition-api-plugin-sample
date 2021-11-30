import { VueConstructor, PluginObject } from "vue";
import NuxtLogo from "./components/NuxtLogo.vue";

const plugin: PluginObject<VueConstructor> = {
  install: (Vue) => {
    Vue.component("NuxtLogo", NuxtLogo);
  },
};

export default plugin;
