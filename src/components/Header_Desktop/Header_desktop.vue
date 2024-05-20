<template>
  <header class="header_desktop">
    <div class="left">
      <img src="@/assets/logo.svg" alt="logo" />
      <Header_List />
    </div>
    <div class="right">
      <button>Login</button>
      <button>Register</button>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import "./style.css";
import Header_List from "./Header_List.vue";

export default defineComponent({
  name: "Header_desktop",
  components: {
    Header_List,
  },
  setup() {
    return {};
  },
});
</script>


