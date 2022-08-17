<script setup>
import { ref, computed } from "vue"
import { useSanityFetcher } from 'vue-sanity';
import Cartouche from '../components/Cartouche.vue';

const { data: areas } = useSanityFetcher(
    () => `*[_type == 'area']{
    title,
    slug,
    description
    }`
)

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

let currentSelectedElement = ref('all')

const filteredAreasByArrays = computed(() => {
    const allAreas = areas.value
    const allPrototypes = prototypes.value
    let filteredPrototypeByAreas = []

    const areaObject = {}

    areaObject.title = 'Hello'


    return filteredPrototypeByAreas
})


</script>

<template>
    <main class="areaCoreContainer" v-if="prototypes && areas">
        <div class="headingColumn">
            <h1 class="Main-title" >
            Prototypes by Areas ({{ prototypes.length }})<br/>
            </h1>

            <aside class="categorySelection">
                <div class="globalRadioButton">
                    All
                    <button class="customRadioButton" :class="{ activeRadio: currentSelectedElement == 'all' }" @click="currentSelectedElement = 'all'">
                        <img src="@/assets/icons/icn_check.svg" alt="Icon check" v-if="currentSelected" />
                    </button>
                </div>
                <ul class="radioButtonFilterList">
                    <li class="radioButtonArea" v-for="(uniqueArea, areaID) in areas" :key="areaID">
                        <span class="labelRadioButton">{{uniqueArea.title}}</span>
                        <button class="customRadioButton" :class="{ activeRadio: currentSelectedElement == uniqueArea.title }" @click="defineFilteringArea(currentSelectedElement = uniqueArea.title)">
                            <img src="@/assets/icons/icn_check.svg" alt="Icon check" v-if="currentSelected" />
                        </button>
                    </li>
                </ul>
            </aside>

        </div>
        <section class="areaBox" v-for="(singleArea, areaIdx) in areas" :key="areaIdx"  >
            <template v-if="currentSelectedElement == 'all' || singleArea.title == currentSelectedElement">
                <h2 class="Main-Subtitle">{{singleArea.title}}</h2>
                <div class="itemList" v-for="(singleProt, protIdx) in prototypes" :key="protIdx">
                    <Cartouche
                        v-if="singleProt.areaOfInterest === singleArea.title"
                        :key="protId" 
                        :title="singleProt.title"
                        :description="singleProt.description"
                        :areaOfInterest="singleProt.areaOfInterest"
                        :creationDate="singleProt.creationDate"
                        :updateDate="singleProt.updateDate"
                        />
                </div>
            </template>
        </section>
    </main>
</template>

<style lang="scss" scoped>
.areaCoreContainer {
  position: relative;
  top: 150px;
  width: 75%;
  margin: 0 auto;
  padding-bottom: 20vh;
}

.Main-title {
    font: {
            family: 'Titillium Web', sans-serif;
            size: 1.2rem;
            weight: 700;
        }
    color: #0050B3;
    margin-bottom: 2rem;
}

.Main-Subtitle {
    font: {
            family: 'Titillium Web', sans-serif;
            size: 2.5rem;
            weight: 700;
        }
    color: #BFBFBF;
    margin-bottom: 1rem;
}

.prototype-title {
    font: {
            family: 'Titillium Web', sans-serif;
            size: 1rem;
            weight: 600;
        }
    color: #0050B3;
}

.areaBox {
    margin-bottom: 3rem;
}

.radioButtonFilterList {
    display: flex;
    flex-direction: row;
}

.headingColumn {
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
}

.categorySelection {
    display: flex;
    flex-flow: row nowrap;

    font: {
            family: 'Titillium Web', sans-serif;
            size: 1.2rem;
            weight: 700;
        }
    color: #0050B3;
}

ul {
    margin: 0;
    margin-block-start: 0;
    margin-block-end: 0;
}

li {
    list-style: none;
}

.globalRadioButton {
    display: flex;
    flex-direction: row;
    align-items: center;

    input {
        margin-left: 0.5rem;
    }
}

.radioButtonArea {
    display:flex;
    flex-direction: row;
    align-items: center;
    margin-right: 1.4rem;


    &:last-child {
        margin-right: 0;
    }

    input {
        margin-left: 0.5rem;
    }
}

input {
    width: 1rem;
    height: 1rem;
}

.customRadioButton {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.2rem;
    height: 1.2rem;
    background: white;
    border: 1px solid #0050B3;
    margin-left: 0.5rem;
    border-radius: 0.6rem;
    cursor: pointer;
}

.activeRadio {
    background: #0050B3;
}
</style>