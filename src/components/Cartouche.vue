<script setup>
import LabelInfoBoxVue from '../components/LabelInfoBox.vue';
const props = defineProps({
    title: {
        type: String
    },
    areaOfInterest: {
        type: String
    },
    description: {
        type: String
    },
    creationDate: {
        type: String
    },
    updateDate: {
        type: String
    }
})
</script>

<template>
    <section class="singlePrototypeBox">
    <!-- L E F T  -->
        <div class="left-side-container">
            <header class="head-proto-infos">
            <h2 class="prot-title">
            {{ title }}
            </h2>
            <button class="area-button">
            {{ areaOfInterest }}
            </button>
            </header>
            <p class="prototype-description">
            {{ description }}
            </p>
        </div>
    <!--R I G H T-->
        <div class="right-side-container">
            <LabelInfoBoxVue :label="`Created`" :coreInfo="creationDate" />
            <LabelInfoBoxVue :label="`Updated`" :coreInfo="updateDate" class="lelftMarginSpace-M" />
        </div>
    </section>
</template>

<style lang="scss" scoped>
.lelftMarginSpace-M {
  margin-left: 20px;
}

.singlePrototypeBox {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 30px 50px 30px 36px;
  background: white;
  border-radius: 4px;
  box-shadow: 0 24px 42px -16px rgba(0, 0, 0, 0.12);
  margin-bottom: 10px;
  text-decoration: none;
  cursor: pointer;
  transition: all ease-in-out 0.3s;

  &:hover {
    background: #E6F7FF;
  }
}

.head-proto-infos {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.prot-title {
  font: {
            family: 'Titillium Web', sans-serif;
            size: 2rem;
            weight: 700;
        }
    color: #0050B3;
}

button {
    background: transparent;
    border: none;
}

.area-button {
  position: relative;
  top: 2px;
  font: {
            family: 'Titillium Web', sans-serif;
            size: 1rem;
            weight: 400;
        }
    color: #8C8C8C;
    border: 1px solid #BFBFBF;
    border-radius: 2px;
    margin-left: 10px;
}

.prototype-description {
  width: 60%;
  font: {
            family: 'Titillium Web', sans-serif;
            size: 0.9rem;
            weight: 400;
        }
  color: #595959;
  line-height: 1.45;
}

.right-side-container {
    display: flex;
    flex-direction: row;
}
</style>