<script lang="ts">
import { ref } from "vue";
import { links } from "../links";

export default {
  setup() {
    const openLinkNumber = ref(0);
    const openLink = (id: number) => {
      if (openLinkNumber.value === id) {
        openLinkNumber.value = 0;
      } else {
        openLinkNumber.value = id;
      }
    };
   
    return { links, openLinkNumber, openLink };
  },
};
</script>

<template>
  <ul>
    <li v-for="link in links" :key="link.id" @click="openLink(link.id)">
      <span>{{ link.link }}</span>
      <template v-if="link.hasLists">
        <img
          src="@/assets/icon-arrow-down.svg"
          alt="arrowDown"
          v-show="openLinkNumber !== link.id"
        />
        <img
          src="@/assets/icon-arrow-up.svg"
          alt="arrowup"
          v-show="openLinkNumber === link.id"
        />
      </template>
      <ul class="listBox" v-if="link.list && openLinkNumber === link.id">
        <li v-for="index in link.list" :key="index.id">
          <img
            v-if="index.listIcon"
            :src="index.listIcon || '' "
            :alt="index.listName"
          />
          <span>{{ index.listName }}</span>
        </li>
      </ul>
    </li>
  </ul>
</template>

