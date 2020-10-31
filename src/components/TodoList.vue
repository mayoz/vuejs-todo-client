<template>
  <div class="container">
    <nav class="panel is-link">
      <p class="panel-heading">
        Todo List
      </p>

      <div v-if="items.length > 0">
          <TodoItem v-for="item in items" :key="item.id" :item="item" />
      </div>
      <div class="panel-block" v-else>
        <p class="no-found">No found any items</p>
      </div>

      <div class="panel-block">
        <CreateItem />
      </div>
    </nav>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import CreateItem from './CreateItem.vue';
import TodoItem from './TodoItem.vue';

export default {
  name: 'TodoList',
  components: {
    CreateItem,
    TodoItem,
  },
  computed: {
    ...mapState(['items']),
  },
  methods: {
    ...mapActions(['fetchItems']),
  },
  async created() {
    await this.fetchItems();
  },
};
</script>

<style lang="scss" scoped>
  .panel {
    width: 500px;
    margin: 50px auto;
  }
</style>
