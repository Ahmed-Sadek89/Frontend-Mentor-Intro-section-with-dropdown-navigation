<template>
  <main :class="overlay_styles">
    <Header_desktop />
    <Header_mobile @handleStylesEmit="handleStyles" />
    <Main />
  </main>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Header_desktop from "@/components/Header_Desktop/Header_desktop.vue";
import Header_mobile from "@/components/Header_mobile/Header_mobile.vue";
import Main from "@/components/Main/Main.vue";

import "./index.css";

export default defineComponent({
  name: "App",
  components: {
    Header_desktop,
    Header_mobile,
    Main,
  },
  setup() {
    const overlay_styles = ref("");
    const handleStyles = () => {
      overlay_styles.value =
        overlay_styles.value === "" ? "custom_mobile_styles" : "";
    };
    return {
      overlay_styles,
      handleStyles,
    };
  },
});
</script>