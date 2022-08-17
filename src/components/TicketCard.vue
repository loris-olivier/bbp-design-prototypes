<template>
<section class="ticket-core" @click="goToTicketDetails(ticketUrl)">
    <header class="coreHeaderContent">
        <h2 class="ticketMainTitle">
            {{ title }}
        </h2>
        <p class="descriptionParagraph">
            {{ description }}
        </p>
    </header>
    <div class="cardBody">
        <img :src="coverImageSource" alt="Cover image" />
    </div>
    <footer class="cardFooter">
        <div class="tagReference" v-for="(ref, refId) of referenceList" :key="refId">
            {{ ref.title }}
        </div>
    </footer>
    
</section> 
</template>
<script setup>
import router from '../router';


const props = defineProps({
    title: {
        type: String
    },
    description: {
        type: String
    },
    protoLink: {
        type: String
    },
    coverImageSource: {
        type: String
    },
    ticketUrl: {
        type: String
    },
    referenceList: {
        type: Array
    }
})

const goToTicketDetails = (url) => {
    router.push({
        path: `/tickets/${url}`
    })
}
</script>
<style lang="scss">
.ticket-core {
    background: #003A8C;
    border-radius: 12px;
    padding: 3rem;
    cursor: pointer;
    box-shadow: 0 44px 38px -40px rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(255, 255, 255, 0.2);
}

.coreHeaderContent {
    font-family: 'Titillium Web', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
}

.ticketMainTitle {
    font: {
            size: 2.5rem;
            weight: 700;
        }
    color: white;
}

.descriptionParagraph {
    width: 400px;
    font: {
            size: 1rem;
            weight: 400;
        }
    color: #E6F7FF;
    line-height: 1.45;
    margin-bottom: 1rem;
    // O V E R F L O W I N G  T E X T
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}


.cardBody {
    width: 100%;
    aspect-ratio: 5/3;
    overflow: hidden;
    border-radius: 4px;
    margin-top: 1rem;
    box-shadow: 0 22px 46px -14px rgba(0, 0, 0, 0.56);

    img {
        width: 100%;
        height: auto;
    }
}

.cardFooter {
    display: flex;
    flex-direction: row;
    margin-top: 2rem;
}

.tagReference {
    font: {
        size: 1rem;
        weight: 600;
        family: 'Titillium Web', sans-serif;
    }
    color: rgba(255, 255, 255, 0.6);
    margin-right: 0.4rem;
    padding: 0.5rem 1rem;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 4px;
}
</style>