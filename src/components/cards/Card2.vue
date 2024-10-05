<template>
  <div class="text-inter p-4 w-full bg-white rounded-xl">
    <div class="mb-4">
      <img
        :src="cardInfo.image"
        :alt="cardInfo.name"
        class="object-cover rounded-xl"
      >
    </div>
  
    <div class="text-[#060606] px-2">
      <div class="font-semibold mb-3">
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