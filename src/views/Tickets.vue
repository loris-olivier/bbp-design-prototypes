<template>
    <div class="areaCoreContainer ">
        <div class="ticketListContainer">
            <TicketCard
                v-for="(singleTicket, ticketID) of tickets"
                :key="ticketID"
                :title="singleTicket.title"
                :description="singleTicket.description"
                :protoLink="singleTicket.protoLink"
                :ticketUrl="singleTicket.slug.current"
                :coverImageSource="singleTicket.coverImageUrl"
                :referenceList="singleTicket.tagReference"
                />
        </div>
    </div>
</template>

<script setup>
import { useSanityFetcher } from 'vue-sanity';
import TicketCard from "@/components/TicketCard.vue"

const { data: tickets } = useSanityFetcher(
    () => `*[_type == 'tickets']{
        title,
        description,
        slug,
        protoLink,
        additionalcontent,
        userInsights,
        "imageList": additionalContent[].file.asset->url,
        "coverImageUrl": coverImage.asset->url,
        "tagReference": areaOfReference[]->
    }`
)
</script>

<style lang="scss" scoped>
.areaCoreContainer {
  position: relative;
  top: 150px;
  width: 75%;
  margin: 0 auto;
  padding-bottom: 20vh;
}
.mainTitle {
    font-size: 4rem;
    color: black;
}
.ticketListContainer {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 1rem;
}



</style>