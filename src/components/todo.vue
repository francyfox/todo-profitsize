<template>
  <div class="wrap">
    <div class="card-tops"></div>
    <div class="todo">
      <div class="head">
        <h1>
          Todo list
        </h1>
        <button type="button" title="ADD">
          ADD
        </button>
      </div>
      <todo-list/>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import TodoList from "./todoList.vue";
export default defineComponent({
  components: {TodoList}
})
</script>