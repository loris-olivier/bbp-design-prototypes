<script setup>
import { RouterView } from "vue-router";
import { useSanityClient } from 'vue-sanity'

// C O M P O N E N T S
import Topbar from "@/components/global/Topbar.vue"
import Subnavigation from "@/components/global/Subnavigation.vue"

useSanityClient({
      projectId: 'x79duyux',
      dataset: 'production',
      useCdn: process.env.NODE_ENV === 'production',
    })

</script>

<template>
  <Topbar />
  <Subnavigation />
  <RouterView />
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Titillium+Web:wght@300;400;600;700&display=swap');

</style>
