<template>
  <div class="bg-[#F6F5F5] flex justify-center items-center">
    <div class="default-layout">
      <div class="font-monsterrat text-[70px] font-semibold uppercase mb-12">
        Buy 1 get 1 Free 
        <br>on <span class="text-border text-white">best selling products</span>
      </div>

      <div class="grid grid-cols-4 gap-1 xl:gap-6">
        <div
          v-for="(item, index) in items"
          :key="index"
        >
          <Card
            :card-info="item"
            class="text-black"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Card from '../components/cards/Card2.vue';
  export default {
    components: {
      Card
    },
    data() {
      return {
        items: [
          {
            image: '/assets/img/img (4).jpeg',
            name: 'Army Green Active Short Sleeve',
            price: '$ 34.95',
            prevPrice: '$ 34.95'
          },
          {
            image: '/assets/img/img (5).jpeg',
            name: 'Army Green Active Short Sleeve',
            price: '$ 34.95',
            prevPrice: '$ 34.95'
          },
          {
            image: '/assets/img/img (6).jpeg',
            name: 'Army Green Active Short Sleeve',
            price: '$ 34.95',
            prevPrice: '$ 34.95'
          },
          {
            image: '/assets/img/img (7).jpeg',
            name: 'Army Green Active Short Sleeve',
            price: '$ 34.95',
            prevPrice: '$ 34.95'
          },
          {
            image: '/assets/img/img (10).jpeg',
            name: 'Army Green Active Short Sleeve',
            price: '$ 34.95',
            prevPrice: '$ 34.95'
          },
        ]
      }
    }
  }
</script>