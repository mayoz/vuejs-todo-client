<template>
  <div>
    <p class="panel-block">
      <span :class="{ completed: item.completed }" @click="toggleItem(item.id)">
        {{ item.text }}
      </span>
    </p>

    <button @click="destroyItem(item.id)" class="destroy-item">
      &cross;
    </button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'TodoItem',
  props: ['item'],
  methods: {
    ...mapActions(['toggleItem', 'destroyItem']),
  },
};
</script>

<style lang="scss" scoped="true">
  div {
    position: relative;
    span {
      cursor: pointer;
      &.completed {
        color: #999;
        text-decoration: line-through;
      }
    }
    button {
      position: absolute;
      right: 10px;
      top: 10px;
    }
  }
</style>
