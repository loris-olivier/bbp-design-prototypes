<script setup>

</script>

<template>
<nav class="core-navigation">
    <div class="left-column">
        <img src="@/assets/icons/epfl_bbp_logo.svg" alt="Logo epfl BBP" />
    </div>
    <div class="right-column">
        <span class="label-subnavtitle-01">
            Product Design
        </span>
        <span class="label-subnavtitle-02">
            Prototypes
        </span>
    </div>
</nav>
</template>

<style lang="scss" scoped>

.core-navigation {
    position: fixed;
    z-index: 30;
    top: 0;
    left: 0;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    padding: 0 40px 0 10px;
    width: 100%;
    height: 50px;
    background: #002766;
    color: #69C0FF;
    font: {
            family: 'Titillium Web', sans-serif;
            size: 1.1rem;
        }
}

.left-column {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.right-column {
    display: flex;
    flex-direction: row;

    .label-subnavtitle-01 {
        font-weight: 300;
        margin-right: 6px;
    }
    .label-subnavtitle-02 { 
        font-weight: 700;
    }
}
</style>