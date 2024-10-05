<template>
  <div class="w-full">
    <LandingPage />
  </div>
</template>

<script>
  import LandingPage from "./views/LandingPage.vue"
  export default {
    components: {
      LandingPage
    },
    data() {
      return {
        observer: null,
      }
    },
    mounted(){
      this.observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          const intersecting = entry.isIntersecting
          if(intersecting){
            if(entry.target.id === 'card1'){
              document.getElementById(entry.target.id).classList.add('fade-top')
            }else if(entry.target.id === 'left1'){
              document.getElementById(entry.target.id).classList.add('fade-left')
            }else if(entry.target.id === 'right1'){
              document.getElementById(entry.target.id).classList.add('fade-right')
            }else{
              document.getElementById(entry.target.id).classList.add('fade-top')
            }
          }
        })
      })
      this.observer.observe(document.getElementById("card1"))
      this.observer.observe(document.getElementById("left1"))
      this.observer.observe(document.getElementById("right1"))
      this.observer.observe(document.getElementById("layout3"))
    },
    unmounted(){
      new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            observer.unobserve(entry.target)
          }
        })
      })
      window.removeEventListener('scroll', () => {})
    }
  }
</script>