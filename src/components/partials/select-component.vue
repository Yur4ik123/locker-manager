<template>
  <multiselect v-model="sel_prop" :options="options" :taggable="true" :showLabels="false" :searchable="false"
               :close-on-select="true" :allowEmpty="false" @select="setValue"
               placeholder>
    <template slot="singleLabel" slot-scope="props">
      {{ props.option }}
    </template>
    <template slot="option" slot-scope="props">
      {{ props.option }}
    </template>
  </multiselect>
</template>

<script>
/*       options: [
                {
                    title: 'Самовывоз(Харьков)',
                    identifier: 'samovivoz'
                },
                {
                    title: 'Укрпочта',
                    identifier: 'ukrpost'
                },
                {
                    title: 'Новая Почта',
                    identifier: 'nova_post'
                },
            ]*/
import Multiselect from 'vue-multiselect'

export default {
  name: "select-component",
  props: {
    options: {
      type: Array
    },
    value: {
      default: ''
    },

  },

  data() {
    return {
      sel_prop: '',
    }
  },
  created() {
    this.sel_prop = this.value;
    console.log( this.value, ' this.value')
    /*   this.$on("input", function (val){
           console.log(val, 'asdasdasdas')
       })*/
  },
  components: {
    Multiselect
  },
  watch: {
    value: {
      handler(newVal, oldVal) {
        this.sel_prop = newVal;
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
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style lang="scss">
.multiselect {
  height: 60px;
  background-color: transparent;
  font-family: "Play", sans-serif;
  z-index: 1;

  .multiselect__tags {
    height: 60px;
    border: 1px solid #DCDFE3;
    border-radius: 0;
    background-color: white;
    display: flex;
    align-items: center;
    padding: 0px 20px;
  }

  .multiselect__single {
    margin-bottom: 0;
    color: #141621;
  }

  .multiselect__content-wrapper {
    background-color: white;
  }

  .multiselect__option--highlight {
    background: #006B8D;
    outline: none;
    color: white;
  }

  .multiselect__select {
    height: 60px;
    z-index: 1;

    &:before {
      margin-top: 0;
      position: absolute;
      right: 20px;
      background: url("@/assets/img/style/ico_dropdown.svg") no-repeat center/cover;
      width: 16px;
      height: 8px;
      top: 50%;
      border: none;
      transform: translate(0, -50%);
    }
  }
}

.multiselect--active {
  z-index: 2;

  .multiselect__select {
    transform: rotateX(180deg);

    &:before {
    }
  }

}
</style>
