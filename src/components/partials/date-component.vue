<template>
  <date-picker v-model="date" type="datetime"></date-picker>
</template>

<script>
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';

export default {
  name: "date-component",
  components: {DatePicker},
  props: {
    value: {
      default: ''
    },
  },
  data() {
    return {
      date: ''
    }
  },
  watch: {
    value: {
      handler(newVal, oldVal) {
        this.date = newVal;
      },
      deep: true,
    }
  },
  methods: {
    setValue(selectedOption, id) {
      this.$emit("input", selectedOption);
    }
  }
}
</script>

<style lang="scss">

</style>