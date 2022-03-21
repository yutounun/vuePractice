<script>
export default {
  data: () => ({
    km: 0,
    m: 0
  }),
  // Works when property change
  watch: {
    km: function(value) {
      this.km = value
      this.m = value * 1000
    },
    m: function(value) {
      this.km  = value / 1000
      this.m = value
    }
  }
}
</script>


<template>
  <div class="wraper">
    <p><input type="text" v-model="km">km</p>
    <p><input type="text" v-model="m">m</p>
    {{ $data }}
  </div>
</template>

<style scoped>
ul {
  list-style: none;
}
#app li > span.done {
  text-decoration: line-through;
}
</style>
