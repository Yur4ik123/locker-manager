<template>
  <div class="new__requests">
    <TopBar></TopBar>
    <div class="container">

      <div class="content__result js-result">
        <div class="content__wrap white-bg">
          <div class="content__table">
            <table class="table">
              <tr>
                <th>HW</th>
                <th>Auftraggeber</th>
                <th>Pers.-Nr.</th>
                <th>Nachname</th>
                <th>Vorname</th>
                <th>Geschl.</th>
                <th>Arbeitgeber</th>
                <th>Kostenstelle</th>
                <th>Auftrag-Nr.</th>
                <th>Gebäude/ Ort</th>
                <th>Telefon</th>
                <th>E-Mail</th>
                <th></th>
              </tr>

              <tr v-for="item in requests">
                <td>
                  <label class="input-checkbox">
                    <input type="checkbox" class="input-checkbox__input" > <span></span>
                  </label>
                </td>
                <td>REA</td>
                <td>{{ item.personellId }}</td>
                <td>{{ item.lastName }}</td>
                <td>{{ item.firstName }}</td>
                <td>{{ item.gender }}</td>
                <td>{{ item.employer }}</td>
                <td>{{ item.costCenter }}</td>
                <td>{{ item.orderNumber }}</td>
                <td>{{ item.building }}</td>
                <td>{{ item.phone }}</td>
                <td>{{ item.email }}</td>
                <td>
                  <div class="table__buttons">
                    <a href="#map" data-fancybox class="table__button">
                      <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10.0782 14.1465L10.6791 15.6884L12.154 19.6406C12.213 19.8801 12.4489 20 12.6259 20H12.685C12.862 20 13.0979 19.8803 13.2158 19.7006L14.7497 17.1256L17.1408 19.5398C17.3767 19.7792 17.7307 19.7792 17.9666 19.5398L19.5593 17.923C19.7953 17.6835 19.7953 17.3242 19.5593 17.0847L17.1683 14.6706L19.705 13.1136C19.882 12.9938 20 12.7542 20 12.5747C19.9409 12.3349 19.764 12.1555 19.587 12.0955L15.6935 10.5984L10.2072 8.56238L8.73234 8.02352C8.49643 7.96358 8.26036 8.02352 8.08335 8.14325C8.02444 8.26313 7.96542 8.5026 8.02447 8.74207L8.55533 10.2391L10.0782 14.1465ZM10.0782 14.1465L9.85344 13.5924M10.0782 14.1465L10.2664 14.6104M4 18H15C16.6569 18 18 16.6569 18 15V4C18 2.34315 16.6569 1 15 1H4C2.34315 1 1 2.34315 1 4V15C1 16.6569 2.34315 18 4 18Z"
                            stroke="#8A949F"/>
                      </svg>
                    </a>
                    <a href="./detail.html" class="table__button">
                      <svg width="21" height="14" viewBox="0 0 21 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10.5 13C4.48834 13 1.19774 7.45681 1.07118 7.24361C0.976274 7.09128 0.976274 6.93896 1.07118 6.78684C1.19764 6.54316 4.48834 1 10.5 1C16.5117 1 19.8023 6.54319 19.9288 6.75639C20.0237 6.90872 20.0237 7.06105 19.9288 7.21316C19.8024 7.45684 16.5117 13 10.5 13ZM10.5 10.6548C8.41168 10.6548 6.70321 9.01018 6.70321 6.99996C6.70321 4.98974 8.41168 3.34516 10.5 3.34516C12.5883 3.34516 14.2968 4.98974 14.2968 6.99996C14.2968 9.01018 12.5883 10.6548 10.5 10.6548Z"
                            stroke="#8A949F"/>
                      </svg>
                    </a>
                  </div>
                </td>
              </tr>

            </table>
          </div>
        </div>

      </div>

    </div>
    <ContentBottom/>
  </div>
</template>

<script>
// @ is an alias to /src
import {mapMutations, mapActions, mapGetters} from "vuex";
import ContentBottom from "@/components/ContentBottom";
import TopBar from "@/components/TopBar";


export default {
  name: 'NewRequestsView',
  data() {
    return {
      requests: []
    }
  },
  created() {
    this.$store.dispatch('newRequests/getNewRequests');
    this.requests = this.getRequests;
  },
  computed: {
    ...mapGetters({
      getRequests: 'newRequests/GET_NEW_REQUESTS'
    }),
  },
  components: {
    ContentBottom,
    TopBar
  }
}
</script>
