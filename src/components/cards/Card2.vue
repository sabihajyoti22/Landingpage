<template>
  <div class="text-inter w-56 h-56 xl:w-[357px] xl:h-[397px] p-4 bg-white rounded-xl">
    <div class="mb-4">
      <img
        :src="cardInfo.image"
        alt=""
        class="w-full h-full object-cover rounded-xl"
      >
    </div>
  
    <div class="px-2">
      <div class="text-white mb-3">
        {{ cardInfo.name }}
      </div>
  
      <div class="text-xl font-semibold flex gap-3">
        <div>{{ cardInfo.price }}</div>
        <div class="line-through text-[#9B9B9B]">
          {{ cardInfo.prevPrice }}
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
  export default {
    props: {
      cardInfo: {
        type: Object,
        default: null
      }
    }
  }
  </script>