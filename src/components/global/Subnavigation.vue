<script setup>

</script>

<template>
    <nav class="core-subnavigation">

        <router-link to="/" class="singleItem">
            <span class="label-button">Prototypes</span>
            <img src="@/assets/icons/icn_chevron.svg" alt="chevron icon" />
        </router-link>
        <router-link to="/areas" class="singleItem">
            <span class="label-button">Areas</span>
            <img src="@/assets/icons/icn_chevron.svg" alt="chevron icon" />
        </router-link>
        <router-link to="/tickets" class="singleItem">
            <span class="label-button">Tickets</span>
            <img src="@/assets/icons/icn_chevron.svg" alt="chevron icon" />
        </router-link>
        <router-link to="/design" class="singleItem">
            <span class="label-button">Design Guide</span>
            <img src="@/assets/icons/icn_chevron.svg" alt="chevron icon" />
        </router-link>

    </nav>
</template>

<style lang="scss" scoped>
.core-subnavigation {
    position: fixed;
    top: 50px;
    left: 0;
    z-index: 35;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    width: 100%;
    color: white;
}

a {
    color: white;
    text-decoration: none;
}

.singleItem {
    flex-basis: 25%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    padding: 4px 20px 7px 20px;
    transition: all ease-in-out 0.25s;
    cursor: pointer;

    font: {
            family: 'Titillium Web', sans-serif;
            size: 1rem;
            weight: 600;
        }

    &:first-child{
        background: #003A8C;
    }
    &:nth-child(2){
        background: #0050B3;
    }
    &:nth-child(3){
        background: #096DD9;
    }
    &:last-child{
        background: #1890FF;
    }

    &:hover {
        padding: 12px 20px 15px 20px;
    }
}
</style>