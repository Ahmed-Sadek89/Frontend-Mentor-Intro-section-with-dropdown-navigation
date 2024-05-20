<script lang="ts">
import { defineComponent } from "vue";
import "./style.css";

export default defineComponent({
  name: "Main-component",
  setup() {
    return {};
  },
});
</script>

<template>
  <main>
    <div class="container">
      <div class="main-content">
        <div class="left">
          <h2>Make remote work</h2>
          <p>
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
          <button>Learn more</button>
          <ul>

          </ul>
        </div>
        <div class="right">
            <img src="@/assets/image-hero-desktop.png" alt="image-hero-desktop">
            <img src="@/assets/image-hero-mobile.png" alt="image-hero-mobile">
        </div>
      </div>
    </div>
  </main>
</template>

