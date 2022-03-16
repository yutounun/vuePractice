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
    <h2>TODO list</h2>
    <!-- prevent form reloading -->
    <form v-on:submit.prevent>
      <input type="text" v-model="newItem">
      <button @click="addTodo">Add</button>
      <ul>
        <li v-for="(todo,index) in todos">
          <input type="checkbox" v-model="todos.isDone">
          <span v-bind="{done: todo.isDone}">{{ todo.item }}</span>
          <button @click="deleteTodo(index)">delete</button>
        </li>
      </ul>
    </form>
    {{ $data }}
  </div>
</template>

<style scoped>
.done {
  text-decoration: line-through;
}
</style>
