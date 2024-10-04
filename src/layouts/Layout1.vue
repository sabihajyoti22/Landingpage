<template>
  <div class="h-[80vh] xl:h-screen bg-[#EA2127] overflow-hidden">
    <div class="default-layout h-full py-6 xl:py-[72px] flex items-end">
      <div class="relative">
        <div class="absolute -top-20 -left-8 font-rejection text-5xl xl:text-[140px] text-white opacity-40 z-10">
          future looks brights!
        </div>
        <div class="flex gap-1 xl:gap-6 relative z-50">
          <div
            v-for="(item, index) in items"
            :key="index"
          >
            <Card :card-info="item" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Card from "../components/cards/Card1.vue"
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
          },
          {
            image: '/assets/img/img (10).png',
            name: 'Army Green Active Short Sleeve',
            price: '$ 34.95',
            prevPrice: '$ 34.95'
          },
          {
            image: '/assets/img/img (11).jpeg',
            name: 'Army Green Active Short Sleeve',
            price: '$ 34.95',
            prevPrice: '$ 34.95'
          },
          {
            image: '/assets/img/img (11).png',
            name: 'Army Green Active Short Sleeve',
            price: '$ 34.95',
            prevPrice: '$ 34.95'
          },
          {
            image: '/assets/img/img (11).jpeg',
            name: 'Army Green Active Short Sleeve',
            price: '$ 34.95',
            prevPrice: '$ 34.95'
          },
        ]
      }
    }
  }
</script>