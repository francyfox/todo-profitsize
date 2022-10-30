<template>
  <div class="wrap">
    <div class="container">
      <div class="card-tops"></div>
      <div class="todo">
        <div class="head">
          <h1>
            Todo list
          </h1>
          <button type="button"
                  class="btn btn-primary"
                  :class="{active: popup.state}"
                  @click="popup.state = !popup.state"
          >
            <span v-if="!popup.state">
              ADD
            </span>
            <span v-else>
              CLOSE
            </span>
          </button>
        </div>
        <todo-list :todo="list"/>
      </div>
      <div class="popup" :class="{active: popup.state }">
        <label>
          <input v-model="popup.title"
                 type="text"
                 @keydown="validate"
                 maxlength="60"
                 placeholder="Title"
          >
        </label>
        <label>
          <textarea v-model="popup.subTitle"
                    @keydown="validate"
                    placeholder="SubTitle"
          >
          </textarea>
        </label>
        <button @click="addItem"
                type="button"
                class="btn btn-primary"
                :disabled="isDisabled"
        >
          ADD ITEM
        </button>
      </div>

      <footer>
        © 2022. Golota Danil. <a href="https://github.com/francyfox/todo-profitsize">Repository</a>
      </footer>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import TodoList from "./todoList.vue";
export default defineComponent({
  components: {TodoList},

  data() {
    return {
      popup: {
        valid: false,
        state: false,
        title: '',
        subTitle: ''
      },

      list: [
        {
          item: {
            state: false,
            title: 'delectus aut autem',
            subTitle: 'laboriosam mollitia et enim quasi adipisci quia provident illum'
          }
        },
        {
          item: {
            state: true,
            title: 'delectus aut autem',
            subTitle: 'laboriosam mollitia et enim quasi adipisci quia provident illum'
          }
        },
        {
          item: {
            state: false,
            title: 'delectus aut autem',
            subTitle: 'laboriosam mollitia et enim quasi adipisci quia provident illum'
          }
        },
        {
          item: {
            state: false,
            title: 'delectus aut autem',
            subTitle: 'laboriosam mollitia et enim quasi adipisci quia provident illum'
          }
        },
      ],
    }
  },

  methods: {
    validate() {
      const popupNotEmpty = (this.$data.popup.title !== ''
          && this.$data.popup.subTitle !== '');
      this.$data.popup.valid = popupNotEmpty;
    },

    addItem() {
      const { title, subTitle } = this.$data.popup;

      this.$data.list.push({
        item: {
          state: false,
          title,
          subTitle,
        }
      });

      this.$data.popup.state = false;
    }
  },

  computed: {
    isDisabled() {
      return !this.$data.popup.valid;
    },
  },

})
</script>