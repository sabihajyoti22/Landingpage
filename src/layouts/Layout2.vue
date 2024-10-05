<template>
  <div class="bg-[#F6F5F5]">
    <div class="default-layout py-5 xl:py-[102px]">
      <div class="font-monsterrat text-3xl xl:text-[70px] font-semibold uppercase mb-3 xl:mb-12 xl:leading-[84px]">
        Buy 1 get 1 Free <br>on <span class="text-border text-white">best selling products</span>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3 xl:gap-6 mb-10">
        <div
          v-for="(item, index) in items.slice(0, length)"
          :key="index"
        >
          <Card
            :card-info="item"
            class="transition duration-300 hover:-translate-y-3"
          />
        </div>
      </div>

      <div
        v-if="length < items.length"
        class="w-full flex justify-center"
      >
        <button
          class="xl:text-xl font-bold text-[#EA2127]"
          @click="length += 4"
        >
          SEE MORE
        </button>
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
          {
            image: '/assets/img/img (3).jpeg',
            name: 'Army Green Active Short Sleeve',
            price: '$ 34.95',
            prevPrice: '$ 34.95'
          },
          {
            image: '/assets/img/img (7).png',
            name: 'Army Green Active Short Sleeve',
            price: '$ 34.95',
            prevPrice: '$ 34.95'
          },
          {
            image: '/assets/img/img (8).jpeg',
            name: 'Army Green Active Short Sleeve',
            price: '$ 34.95',
            prevPrice: '$ 34.95'
          },
          {
            image: '/assets/img/img (9).jpeg',
            name: 'Army Green Active Short Sleeve',
            price: '$ 34.95',
            prevPrice: '$ 34.95'
          }
        ],
        length: 4
      }
    }
  }
</script>