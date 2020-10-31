<template>
  <div class="field is-grouped">
    <p class="control is-expanded">
      <input
        v-model="data"
        @keyup.enter="createHandler"
        class="input"
        type="text"
        placeholder="Write something...">
    </p>
    <p class="control">
      <button @click="createHandler" :disabled="isDisabled" class="button is-info">
        Create
      </button>
    </p>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'CreateItem',
  data() {
    return {
      data: '',
    };
  },
  computed: {
    isDisabled() {
      return this.data.trim() === '';
    },
  },
  methods: {
    ...mapActions(['storeItem']),
    async createHandler() {
      if (this.isDisabled) {
        return;
      }

      await this.storeItem(this.data);
      this.data = '';
    },
  },
};
</script>

<style lang="scss" scoped>
  input {
    width: 370px;
  }
  button {
    width: 95px;
  }
</style>
