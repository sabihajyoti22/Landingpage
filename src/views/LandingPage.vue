<template>
  <div>
    <Navbar />
    <Layout1 />
    <Layout2 />
    <Layout3 />
    <Footer1 />
  </div>
</template>

<script>
  import Navbar from '../components/Navbar.vue'
  import Layout1 from '../layouts/Layout1.vue'
  import Layout2 from '../layouts/Layout2.vue'
  import Layout3 from '../layouts/Layout3.vue'
  import Footer1 from '../components/Footer.vue'
  export default {
    components: {
      Navbar,
      Layout1,
      Layout2,
      Layout3,
      Footer1
    }
  }
</script>