<template>
  <div class="h-screen bg-[#EA2127]">
    <div class="default-layout h-full py-[72px] flex items-end">
      <div>
        <div
          v-for="(item, index) in items"
          :key="index"
        >
          <Card :card-info="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Card from "../components/cards/Card.vue"
  export default {
    components: {
      Card
    },
    data() {
      return {
        items: [
          {
            image: '/assets/img/img (9).png',
            name: 'Army Green Active Short Sleeve',
            price: '$ 34.95',
            prevPrice: '$ 34.95'
          }
        ]
      }
    },
  }
</script>