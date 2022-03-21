<script setup>
import axios from 'axios'
import VueAxios from 'vue-axios'
</script>

<script>
export default {
  data: () => ({
    keyword: '',
    error: '',
    items: [],
    message: ''
  }),
  mounted: function() {
    this.debouncedGetData = _.debounce(this.getData, 1000)
  },
  methods: {
    getData: function() {
      const vm = this
      const params = { page:1, per_page:20, query: this.keyword }
      axios.get('https://qiita.com/api/v2/items', { params })
          .then((result) => {
            console.log(result)
            vm.items = result.data
          }).catch((err) => {
            vm.message = 'Error' + err
          });
    }
  },
  watch: {
    keyword: function(newValue, oldValue){
      this.getData()
      this.message = 'typing...'
      console.log(newValue)
    }
  }
}
</script>


<template>
  <div class="wrapper">
    <input type="text" v-model="keyword">
    {{ message }}
    <ul>
      <li v-for="item in items">
        <a :href="item.url">
          {{ item.title }}
        </a>
        likes: {{ item.likes_count }}
      </li>
    </ul> 
  </div>
</template>

<style scoped>

</style>
