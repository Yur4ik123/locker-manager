<template>
  <div class="container">
    <div class="content__bottom">
      <div class="pagination">
        <span class="pagination__item active">1</span>
        <a href="#" class="pagination__item">2</a>
        <a href="#" class="pagination__item">3</a>
        <a href="#" class="pagination__item">4</a>
        <a href="#" class="pagination__item pagination__item_dotted">...</a>
        <a href="#" class="pagination__item">105</a>
      </div>
      <div class="content__loadmore js-loadmore">Mehr laden</div>
      <div class="content__bottom-controls">
        <div class="content__bottom-lbl">Reihen pro Seite</div>
        <v-select class="content__bottom-select"
                  :options="options"
                  v-model="per_page"
                  :clearable="false"
                  :searchable="false"
        >
          <template #open-indicator="{ attributes }">
            <span v-bind="attributes">
              <svg width="16" height="9" viewBox="0 0 16 9" fill="none"
                   xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L8 8L15 1" stroke="black"/>
              </svg>
</span>
          </template>
        </v-select>
        <!--        <select class="content__bottom-select">-->
        <!--          <option value="10">10</option>-->
        <!--          <option value="20">20</option>-->
        <!--          <option value="30">30</option>-->
        <!--          <option value="30">40</option>-->
        <!--        </select>-->
        <div class="content__bottom-count">1-10 von 100</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContentBottom",
  data() {
    return {
      per_page: 10,
      options: [10, 20, 30, 40]
    }
  },
  methods: {

  }
}
</script>

<style lang="scss">
.content__bottom {
  .v-select {
    height: 40px;

    .vs__dropdown-toggle {
      height: 40px;
      border-radius: 0;
    }

    .vs__selected-options {
      display: flex;
      align-items: center;
      padding: 4px 9px;
    }

    .vs__dropdown-option--highlight {
      background-color: #006B8D;
      color: white;
    }

    .vs__dropdown-menu {
      min-width: 90px;
    }

    .vs__search {
      display: none;
    }

    .vs__dropdown-option--selected {
      background-color: #006B8D;
      color: white;
    }

    .vs__dropdown-option {
      padding: 7px 17px;

      &:hover {
        background-color: #006B8D;
        color: white;
      }
    }

  }
}
</style>