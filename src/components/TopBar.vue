<template>
  <div class="top">
    <div class="container">
      <div class="top__row">
        <div class="top__pagename">
          <div class="top__pagename-ico">
            <img src="@/assets/img/style/ico_pagename.svg" alt="">
            <div class="top__pagename-lbl">{{ subheader }}</div>
          </div>
          <div class="top__pagename-text">
            <div class="top__pagename-title">{{ header }}</div>
            <div class="top__pagename-desc">148 Anfragen</div>
          </div>
        </div>
        <form class="search">
          <div class="search__row">
            <input type="text" name="search" placeholder="Volltextsuche ..." class="search__field input-text">
            <button type="submit" class="search__button">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M23 23L16.274 16.2746M16.274 16.2746C19.7623 12.7859 19.7623 7.10906 16.274 3.62037C14.5845 1.93091 12.3371 1 9.9472 1C7.55727 1 5.31041 1.93091 3.62043 3.62086C1.92994 5.31032 0.999503 7.55712 1 9.9475C1 12.3374 1.93093 14.5842 3.62043 16.2741C5.31041 17.9641 7.55727 18.895 9.9472 18.895C12.3371 18.895 14.584 17.9646 16.274 16.2746Z"
                    stroke="#8A949F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>

            </button>
          </div>
        </form>
        <div class="top__buttons">
          <a href="#export" uk-toggle class="top__button">
            <svg width="20" height="22" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M1 12V13.5C1 14.0523 1.44772 14.5 2 14.5H12C12.5523 14.5 13 14.0523 13 13.5V12M13 5V3.5L10 0.5H2C1.44772 0.5 1 0.947715 1 1.5V5M2 6V7.5L3 8.5M3 8.5L4 9.5V11M3 8.5L2 9.5V11M3 8.5L4 7.5V6M6 6V10.5H8.5M12.5 6.5H10V8.5H12V10.5H9.5"
                  stroke="black"/>
            </svg>

          </a>
          <a href="#" class="top__button">
            <svg width="28" height="26" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M15.5255 15.4144C15.4561 15.4321 15.3881 15.4489 15.3202 15.4666C14.8618 15.5843 14.4159 15.6988 13.9864 15.8011L13.407 15.9397C12.2414 16.2178 11.0498 16.5018 9.87319 16.8399M15.5255 15.4144C14.3768 14.4969 13.3732 13.4367 12.575 12.2902C12.3995 12.038 12.2313 11.7867 12.0698 11.5354M15.5255 15.4144L17.6118 14.9081C19.2295 14.5519 20.489 14.3924 21.6575 14.3924C22.7488 14.3924 23.709 14.536 24.593 14.8313C24.6157 14.8391 26.9025 15.6607 26.9969 16.9412C27.0157 17.183 26.9714 17.7874 26.1731 18.1791C25.2867 18.6149 23.9765 18.7321 22.5015 18.5299C20.7503 18.2904 18.9547 17.6374 17.2849 16.6363L15.5255 15.4144ZM9.87319 16.8399C10.3205 15.8229 10.736 14.795 11.1429 13.7898C11.4441 13.0459 11.7517 12.2856 12.0698 11.5354M9.87319 16.8399L7.69102 17.5502C5.79422 18.2577 4.23629 19.1157 2.93769 20.169C2.0869 20.8579 1.06162 21.9108 1.00281 23.0101C0.974369 23.5277 1.16236 24.0025 1.5451 24.3829C1.95145 24.7869 2.46241 24.9995 3.02398 25C4.87884 25 6.66381 22.5975 7.0022 22.1158C7.68379 21.1474 8.32152 20.0672 8.94672 18.8212L9.87319 16.8399ZM12.0698 11.5354L11.0219 9.71269C9.57674 6.85299 9.32656 4.45636 10.2786 2.58322C10.8122 1.53213 11.4687 1 12.2308 1C13.3419 1 14.1589 2.14742 14.2626 3.85561C14.3908 5.98595 13.6841 7.88817 12.8994 9.65725L12.0698 11.5354Z"
                  stroke="black"/>
            </svg>

          </a>
          <a href="#" class="top__button js-filter-toogle">
            <svg class="filter__icon" width="28" height="24" viewBox="0 0 28 24" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M11.5513 18.0076L1.16599 4.98757C1.05732 4.85506 0.998784 4.69147 1.00002 4.52366V1.76477C1.00223 1.34107 1.36679 0.998926 1.8148 1.00009H26.1858C26.6338 0.998898 26.9978 1.34097 27 1.76468V4.52357C27.0007 4.69395 26.9405 4.85964 26.8291 4.99356L16.4488 18.0076M11.5513 18.0076V20.9684C11.5521 21.2794 11.7501 21.5597 12.0537 21.6791L15.3273 22.9409C15.4263 22.9797 15.5325 22.9998 15.6397 23C15.8551 22.9998 16.0613 22.9187 16.2132 22.7742C16.3651 22.6298 16.4498 22.4342 16.4488 22.2304V18.0076M11.5513 18.0076L16.4488 18.0076M22.1528 5.18344H5.83781"
                  stroke="black" stroke-linecap="round"/>
            </svg>
            <div class="close__svg" style="display: none">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 1L9 9.13333M9 9.13333L1.26229 17M9 9.13333L16.7377 17M9 9.13333L1 1" stroke="#006B8D"
                      stroke-width="2"/>
              </svg>
            </div>
          </a>
          <div class="filter js-filter" uk-dropdown="mode: click; pos:bottom-right">
            <!--            <div class="filter__close js-filter-toogle">-->
            <!--              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">-->
            <!--                <path d="M17 1L9 9.13333M9 9.13333L1.26229 17M9 9.13333L16.7377 17M9 9.13333L1 1" stroke="#006B8D"-->
            <!--                      stroke-width="2"/>-->
            <!--              </svg>-->

            <!--            </div>-->
            <div class="filter__title">Filter</div>
            <div class="filter__wrap">
              <div class="filter__group" v-for="group in filters_list">
                <div class="filter__group-lbl">{{ group.group_header }}</div>
                <div class="filter__group-list">
                  <label class="input-checkbox"  v-for="filter in group.items">
                    <input type="checkbox" name="" value="" class="input-checkbox__input">
                    <span>{{ filter }}</span>
                  </label>

                </div>
                <div class="filter__group-list" v-if="group.show_interval">
                  <div class="filter__group-item">
                    <label class="form__lbl">Mietbeginn</label>
                    <input type="date" class="input-text" data-toggle="datepicker" name="" placeholder="" value="">

                  </div>
                  <div class="filter__group-item">
                    <label class="form__lbl">Mietende</label>
                    <input type="date" class="input-text" data-toggle="datepicker" name="" placeholder="" value="">

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ExportModal></ExportModal>
  </div>
</template>

<script>
import ExportModal from "@/components/modals/ExportModal";

export default {
  name: "TopBar",
  props: {
    header: {
      default: ''
    },
    subheader: {
      default: ''
    },
    filters_list: {
      default: function () {
        return []
      }
    }
  },
  components: {
    ExportModal
  }
}
</script>

<style lang="scss">
.js-filter-toogle[aria-expanded="true"] {

  .filter__icon {
    display: none;
  }

  .close__svg {
    display: block !important;
  }

  .js-filter-toogle {
    &:hover {
      .close__svg {
        svg {
          path {
            stroke: white;
          }
        }
      }
    }
  }

}
</style>