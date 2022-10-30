<template>
  <ul class="todo-list">
    <li v-for="({ item }, index) in todo" :key="index">
      <label class="checkbox-layout" :class="{checked: item.state }">
        <input v-model="item.state" type="checkbox"
               name="check"
        >
        <span class="checkmark"></span>

        <div class="text">
          <div class="primary">
            {{ item.title }}
          </div>
          <div class="secondary">
            {{ item.subTitle }}
          </div>
        </div>
      </label>
    </li>
  </ul>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
  props: {
    todo: {
      type: Array,
      required: true
    }
  }
});
</script>

<style scoped>

</style>