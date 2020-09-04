<template>
  <Button/>
  <router-link to="/about">about</router-link>
  <router-link to="/">index</router-link>
  <router-view></router-view>
</template>

<script lang="ts">
import Button from "./components/Button.vue";

export default {
  name: 'App',
  components: {
    Button
  },
  setup() {
  }
}
</script>
