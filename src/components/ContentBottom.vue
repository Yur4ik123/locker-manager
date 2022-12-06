<template>
  <div class="container">
    <div class="content__bottom">
      <paginate
          v-model="paginator.current_page"
          :page-count="paginator.last_page"
          :page-range="3"
          :margin-pages="1"
          :prev-text="'Prev'"
          :next-text="'Next'"
          :container-class="'pagination'"
          :page-class="'page-item'"
          :page-link-class="'pagination__item'"
          :hide-prev-next="true"
          :no-li-surround="true"
          :prev-link-class="'hidden'"
          :next-link-class="'hidden'"
          :click-handler="paginationHandler"
          :break-view-link-class="'pagination__item_dotted'"
      >
      </paginate>
      <!--      <div class="pagination">-->
      <!--        <span class="pagination__item active">1</span>-->
      <!--        <a href="#" class="pagination__item">2</a>-->
      <!--        <a href="#" class="pagination__item">3</a>-->
      <!--        <a href="#" class="pagination__item">4</a>-->
      <!--        <a href="#" class="pagination__item pagination__item_dotted">...</a>-->
      <!--        <a href="#" class="pagination__item">105</a>-->
      <!--      </div>-->
      <div v-if="paginator.current_page < paginator.last_page" class="content__loadmore js-loadmore" @click="loadMore">Mehr laden</div>
      <div class="content__bottom-controls">
        <div class="content__bottom-lbl">Reihen pro Seite</div>
        <v-select class="content__bottom-select"
                  :options="options"
                  v-model="per_page"
                  :clearable="false"
                  :searchable="false"
                  @input="setPerPage"
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
        <div class="content__bottom-count">{{ paginator.from }} - {{ paginator.to }} von {{ paginator.total }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import Paginate from 'vuejs-paginate'

export default {
  name: "ContentBottom",
  props: {
    paginator: {
      default: function () {
        return {
          total: 1,
          last_page: 1,
          current_page: 1,
          from: 1,
          to: 1
        }
      }
    }
  },
  data() {
    return {
      per_page: 10,
      options: [10, 20, 30, 40],
      current_page: 1
    }
  },
  created() {
    this.per_page = this.$store.getters["internalVariables/getPerPage"];
    this.current_page = this.$store.getters['internalVariables/getCurrentPage']
  },
  watch: {
    // current_page: {
    //   handler(page) {
    //     this.$emit('pagination', page = this.current_page)
    //   },
    //   immediate: true
    // }
  },
  methods: {
    paginationHandler(pageNum) {
      this.$emit('pagination', pageNum )
    },
    setPerPage() {
      this.$store.dispatch('internalVariables/changePerPage', this.per_page);
      this.$emit('change-per-page')
    },
    loadMore() {
      this.$emit('loadmore', this.paginator.current_page+1)
    }

  },
  components: {
    Paginate
  }
}
</script>

<style lang="scss">
.pagination {
  .hidden {
    display: none;
  }
}

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