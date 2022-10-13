<template>
  <div class="person-card center" >
    <div v-for="person in presentation">
      <figure>
        <img :src='person.url' alt="person-pict">
      </figure>
      <h4>{{ person.name }}</h4>
      <h5>{{ person.role }}</h5>
      <p>{{ person.description }}</p>
      <a :href="person.linkedin">
        <img src="../assets/BaseIcons/linkedin.jpg">
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "TeamPresentation",
  props:{
    presentation: Array
  }
}
</script>

<style scoped>

</style>