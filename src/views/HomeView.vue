<script setup>
import { useSanityFetcher } from 'vue-sanity';
import LabelInfoBoxVue from '../components/LabelInfoBox.vue';
import Cartouche from '../components/Cartouche.vue'

    const { data: prototypes } = useSanityFetcher(
      () => `*[_type == 'prototype']{
        title,
        version,
        description,
        address,
        creationDate,
        updateDate,
        slug,
        "areaOfInterest": parentArea->title
      }`
    )
</script>

<template>
  <main class="core-container-home">
    <Cartouche
      v-for="(singleProt, protId) in prototypes"
      :key="protId" 
      :title="singleProt.title"
      :description="singleProt.description"
      :areaOfInterest="singleProt.areaOfInterest"
      :creationDate="singleProt.creationDate"
      :updateDate="singleProt.updateDate"
      :address="singleProt.address"
      />
  </main>
</template>

<style lang="scss" scoped>
.core-container-home {
  position: relative;
  top: 150px;
  max-width: 75%;
  margin: 0 auto;
  padding-bottom: 20vh;
}

</style>
