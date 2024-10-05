<template>
  <div class="h-[80vh] xl:h-screen bg-[#EA2127] overflow-hidden">
    <div class="h-full py-6 xl:py-[72px] flex items-end">
      <div
        id="slide"
        class="relative -right-[15%] xl:-right-[10%]"
      >
        <div class="absolute -top-[10%] xl:-top-[13%] -left-[2%] font-rejection text-5xl md:text-8xl xl:text-[140px] text-white opacity-40 z-10">
          future looks brights!
        </div>
        <div class="flex gap-1 xl:gap-6 relative z-20">
          <div
            v-for="(item, index) in items"
            :key="index"
          >
            <Card
              :card-info="item"
              class="transition duration-300 hover:-translate-y-3"
            />
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