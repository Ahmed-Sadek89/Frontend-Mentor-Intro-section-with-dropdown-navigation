<script lang="ts">
import { defineComponent, PropType, ref } from "vue";
import Header_links from "./Header_links.vue";
import { links } from "../links";
import "./style.css";

export default defineComponent({
  name: "Header_mobile",
  components: {
    Header_links,
  },
  setup(_, { emit }) {
    const isOpen = ref(false);

    const setIsOpen = () => {
      isOpen.value = !isOpen.value;
      emit("handleStylesEmit");
    };

    return { links, isOpen, setIsOpen };
  },
  emits: ['handleStylesEmit']
});
</script>
<template>
  <header class="header_mobile">
    <div class="left">
      <img src="@/assets/logo.svg" alt="logo" />
    </div>
    <div class="right" @click="setIsOpen()">
      <img src="@/assets/icon-menu.svg" alt="links" />
    </div>
  </header>
  <div v-show="isOpen">
    <div class="overlay" />
    <div class="header_mobile_content">
      <div class="close" @click="setIsOpen()">
        <img src="@/assets/icon-close-menu.svg" alt="close" />
      </div>
      <Header_links />
      <div class="mobile_btns">
        <button>Login</button>
        <button>Register</button>
      </div>
    </div>
  </div>
</template>

