<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  }
});
</script>
<script>
export default {
  data: () => ({
    newItem: '',
    todos: {
      item: '',
      isDone: false
    }
  }),
  methods: {
    addTodo: function() {
      console.log('debug')
      if (this.newItem === '') return
      let todo = {
        item: this.newItem,
        isDone: false
      }
      this.todos.push(todo)
      this.newItem = ''
    },
    deleteTodo: function(index) {
      this.todos.splice(index, 1)
    }
  }
}
</script>


<template>
  <div class="greetings">
<<<<<<< HEAD
    <h2>TODO list</h2>
    <!-- prevent form reloading -->
    <form v-on:submit.prevent>
      <input type="text" v-model="newItem">
      <button @click="addTodo">Add</button>
      <ul>
        <li v-for="(todo,index) in todos">
          <input type="checkbox">
          {{ todo.item }}
          <button @click="deleteTodo(index)">delete</button>
        </li>
      </ul>
    </form>
    {{ $data }}
=======
    <h1 class="green">{{ msg }}</h1>
    <h3>
      You’ve successfully created a project with
      <a target="_blank" href="https://vuejs.org/">Vue 3</a>.
    </h3>
>>>>>>> cd32c742809f9bc5faa3757b631f30761cface08
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
