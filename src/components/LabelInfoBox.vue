<template>
    <div class="core-info-box">
        <span class="label-date">
          {{ label }}
        </span>
        <span class="date-box">
          {{ coreInfo }}
        </span>
    </div>
</template>

<script setup>

const props = defineProps({
    label: {
        type: String
    },
    coreInfo: {
        type: String
    }
})

</script>

<style lang="scss" scoped>
.core-info-box {
    display: flex;
    flex-direction: row;
    align-items: baseline;
    font: {
            family: 'Titillium Web', sans-serif;
            size: 1rem;
        }
    color: #595959;
}

.label-date {
    font-weight: 300;
}
.date-box {
    font-weight: 700;
    margin-left: 5px;
}
</style>