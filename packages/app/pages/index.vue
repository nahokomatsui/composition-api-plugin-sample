<template>
  <div>
    <NuxtLogo />
    {{ message }}
  </div>
</template>

<script setup lang="ts">
import { ref } from "@nuxtjs/composition-api";

const message = ref("hi!");
</script>
