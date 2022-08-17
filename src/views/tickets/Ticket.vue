<template>
<div class="coreContainerTicket">

  <button class="closeIcon" v-if="selectedElements != null" @click="selectedElements = null">
    <img src="@/assets/icons/icn_close.svg" alt="icon close" />
  </button>

  <div class="overlayContainer" v-if="selectedElements != null" :class="{noPointerEvent: selectedElements == null}" @click="selectedElements = null"></div>

  <header class="coreHeader" v-if="content">
    <div class="columnHeaderOne">
      <h1 class="mainTitle">
        {{ content.title }}
      </h1>
      <div class="descriptionContainer">
        <h2 class="descriptionTitle">
          Description:
        </h2>
        <p class="descriptionText">
          {{ content.description }}
        </p>
      </div>
      <div class="belongingCategory">
          <span class="categoryRelated" v-for="(singleTag, tagID) of content.tagReference" :key="tagID">
            {{ singleTag.title }}
          </span>
        </div>
    </div>
      
    <div class="columnHeaderTwo">
        
      <a :href="content.protoLink" target="_blank">
        View Prototype
      </a>
      </div>
      
    </header>

  <aside class="userInsightBox">
    <h1 class="titleInsights">
      User Insights
    </h1>
    <ul>
      <li class="singleUserContent" v-for="(insight, insightIndex) of content.userInsights" :key="insightIndex">
        <p class="insightParagraph">
          {{insight}}
        </p>
      </li>
    </ul>
    
  </aside>

  <section class="visualAssetBox" v-if="content">
    <div class="singleVisualBox" v-for="(singleAsset, assetID) of content.additionalContent" :key="assetID">
      <div class="assetImageBox" :class="{ openImage: selectedElements == assetID }" @click="selectedElements = assetID">
        <img :src="content.imageList[assetID]" :alt="`Image of the ${title}`" />
      </div>
      <div class="informationAssetBox">
        <h3 class="assetTitle">
          {{ singleAsset.title }}
        </h3>
        <p class="assetDescription">
          {{ singleAsset.description }}
        </p>
        <a :href="singleAsset.protoReference" target="_blank" v-if="singleAsset.protoReference">
          View Prototype
        </a>
      </div>
    </div>
  </section>
    
</div>

</template>

<script setup>
import { ref } from 'vue'
import { useSanityFetcher } from 'vue-sanity';


const props = defineProps({
  slug: {
    type: String
  }
})

const { data: content } = useSanityFetcher(
    () =>
    `*[_type == 'tickets' && slug.current == '${props.slug}'][0]{
      title,
      description,
      slug,
      protoLink,
      additionalContent,
      userInsights,
      "imageList": additionalContent[].file.asset->url,
      "coverImageUrl": coverImage.asset->url,
      "tagReference": areaOfReference[]->
    }`
)

let selectedElements = ref(null)

</script>

<style lang="scss" scoped>
.coreContainerTicket {
  position: relative;
  top: 150px;
  width: 75%;
  margin: 0 auto;
  padding-bottom: 20vh;
}

.mainTitle {
  font-size: 60px;
  color: black;
}

.belongingCategory {
  display: flex;
  flex-direction: row;
  margin: 1rem 0;

  .categoryRelated {
    font: {
      family: 'Titillium Web', sans-serif;
      size: 0.8rem;
      weight: 400;
    }
    text-transform: uppercase;
    letter-spacing: 1px;
    color: rgba(0, 0, 0, 0.6);
    padding: 0.6rem 1rem;
    background: rgba(255, 255, 255, 1);
    border-radius: 4px;
    margin-right: 0.5rem;
  }
}

.coreHeader {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;

  a {
    font: {
      family: 'Titillium Web', sans-serif;
      size: 0.8rem;
      weight: 400;
    }
    color: white;
    text-transform: uppercase;
    letter-spacing: 1px;
    padding: 1rem 1.6rem;
    background: #0050B3;
    text-decoration: none;
    border-radius: 0;
    transition: all ease-in-out 0.3s;

    &:hover {
      border-radius: 8px;
      transform: scale(0.94);
    }
  }
}

.visualAssetBox {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.singleVisualBox {
  flex-basis: 32%;
}

.descriptionText {
  font-size: 24px;
  color: red;
}

.assetImageBox {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  margin-bottom: 1rem;
  cursor: pointer;
  
  img {
    width: 100%;
    height: auto;
  }
}

.overlayContainer {
  top: 0;
  left: 0;
  position: fixed;
  z-index: 400;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.82);
  pointer-events: auto;
}

.userInsightBox {
  margin: 5vh 0;
  padding: 4rem;
  background: white;
  border-radius: 4px;
}

ul {
  list-style-type: square;
  
}

// T Y P E  S T Y L E 
.mainTitle {
  font: {
    family: 'Titillium Web', sans-serif;
    size: 3.6rem;
    weight: 800;
  }
  color: #0050B3;
  margin-bottom: 2rem;
}
.descriptionTitle {
  font: {
    family: 'Titillium Web', sans-serif;
    size: 0.9rem;
    weight: 400;
  }
  color: #0050B3;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 0.4rem;
}
.descriptionText {
  font: {
    family: 'Titillium Web', sans-serif;
    size: 0.9rem;
    weight: 400;
  }
  color: #0050B3;
  line-height: 1.55;
  border: solid 1px rgba(0,80,179,0.3);
  padding: 1rem;
}

.columnHeaderTwo {
  position: relative;
  top: 1.5rem;
}

.titleInsights {
  font: {
    family: 'Titillium Web', sans-serif;
    size: 1.6rem;
    weight: 600;
  }
  color: #0050B3;
  text-transform: uppercase;
  margin-bottom: 1rem;
}

.singleUserContent {
  font: {
    family: 'Titillium Web', sans-serif;
    size: 1rem;
    weight: 400;
  }
  color: #0050B3;

  &::first-word {
    weight: 400;
  }
}

.assetTitle {
  font: {
    family: 'Titillium Web', sans-serif;
    size: 1.2rem;
    weight: 600;
  }
  color: #0050B3;
}
.assetDescription {
  font: {
    family: 'Titillium Web', sans-serif;
    size: 0.8rem;
    weight: 400;
  }
  color: #0050B3;
  line-height: 1.45;
}

.openImage {
  position: fixed;
  top: 7.5vh;
  left: 10vw;
  width: 80vw;
  height: 80vh;
  margin: 2rem auto;
  z-index: 500;
}

button {
  background: transparent;
  border: none;
}
.closeIcon {
  position: fixed;
  z-index: 550;
  top: 1rem;
  right: 1rem;
  width: 2.4rem;
  height: 2.4rem;

  img {
    width: 100%;
    height: auto;
  }
}



.noPointerEvent {
  pointer-events: none;
}
</style>