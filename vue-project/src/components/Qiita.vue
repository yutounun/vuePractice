<script setup>
import axios from 'axios'
import VueAxios from 'vue-axios'
</script>

<script>
export default {
  data: () => ({
    keyword: '',
    error: '',
    items: []
  }),
  mounted: function() {
    this.keyword = 'JavaScript'
    this.getData()
  },
  methods: {
    getData: function() {
      const vm = this
      const params = { page:1, per_page:1, query: this.keyword }
      axios.get('https://qiita.com/api/v2/items', { params })
          .then((result) => {
            console.log(result)
            vm.items = result.data
          }).catch((err) => {
            vm.message = 'Error' + err
          });
    }
  }
}
</script>


<template>
  <div class="wrapper">
    {{ items }}
  </div>
</template>

<style scoped>

</style>
