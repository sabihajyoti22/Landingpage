<template>
  <div
    id="navbar"
    class="fixed w-full flex justify-center z-50 top-0"
  >
    <div class="w-full xl:w-[1796px] mx-3 xl:mx-10">
      <div class="w-full flex justify-between items-center">
        <div class="flex items-center gap-3">
          <div class="w-12 h-12 xl:w-fit xl:h-fit">
            <img
              src="/assets/Logo/Valuetainment.svg"
              alt="logo"
              class="w-full h-full"
            >
          </div>
          <div class="font-mono text-2xl xl:text-[112px] font-extrabold text-white">
            VTMERCH
          </div>
        </div>

        <div class="w-5 h-5 xl:w-fit xl:h-fit">
          <img
            src="/assets/Icon/menu.svg"
            alt="menu"
            class="w-full h-full"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    mounted(){
      var prevScrollpos = window.pageYOffset;
      window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
          document.getElementById("navbar").style.top = "0";
        } else {
          document.getElementById("navbar").style.top = "-110px";
        }
        prevScrollpos = currentScrollPos;
      }
    }
  }
</script>

<style scoped>
#navbar {
  transition: top 0.3s;
}
</style>