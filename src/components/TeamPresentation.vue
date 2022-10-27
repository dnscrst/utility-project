<template>
  <div class="person-card center" >
    <div v-for="person in presentation">
      <figure>
        <img :src='person.url' alt="person-pict">
      </figure>
      <h4 v-scroll-animation>{{ person.name }}</h4>
      <h5 v-scroll-animation>{{ person.role }}</h5>
      <p v-scroll-animation>{{ person.description }}</p>
      <button @click = linkedInOpen(person.linkedin)>
        <img v-scroll-animation
             src="../assets/BaseIcons/linkedin.jpg">
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TeamPresentation",
  props:{
    presentation: Array
  },
  methods: {
    linkedInOpen (link) {
      window.open(link)
    }
  }
}
</script>

<style lang="scss">

</style>