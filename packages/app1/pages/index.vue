<template>
  <div>
    <LibLogo />
    {{ message }}
  </div>
</template>

<script setup lang="ts">
import { ref } from "@nuxtjs/composition-api";

const message = ref("hi! this is app1");
</script>
