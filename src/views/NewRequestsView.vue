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
                    <input type="checkbox" class="input-checkbox__input add__comment-checkbox" @click="showComment" > <span></span>
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
                  <div class="table__buttons" >
                    <a href="#map" class="table__button" uk-toggle>
                      <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10.0782 14.1465L10.6791 15.6884L12.154 19.6406C12.213 19.8801 12.4489 20 12.6259 20H12.685C12.862 20 13.0979 19.8803 13.2158 19.7006L14.7497 17.1256L17.1408 19.5398C17.3767 19.7792 17.7307 19.7792 17.9666 19.5398L19.5593 17.923C19.7953 17.6835 19.7953 17.3242 19.5593 17.0847L17.1683 14.6706L19.705 13.1136C19.882 12.9938 20 12.7542 20 12.5747C19.9409 12.3349 19.764 12.1555 19.587 12.0955L15.6935 10.5984L10.2072 8.56238L8.73234 8.02352C8.49643 7.96358 8.26036 8.02352 8.08335 8.14325C8.02444 8.26313 7.96542 8.5026 8.02447 8.74207L8.55533 10.2391L10.0782 14.1465ZM10.0782 14.1465L9.85344 13.5924M10.0782 14.1465L10.2664 14.6104M4 18H15C16.6569 18 18 16.6569 18 15V4C18 2.34315 16.6569 1 15 1H4C2.34315 1 1 2.34315 1 4V15C1 16.6569 2.34315 18 4 18Z"
                            stroke="#8A949F"/>
                      </svg>
                    </a>
                    <router-link to="/detail" class="table__button">
                      <svg width="21" height="14" viewBox="0 0 21 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10.5 13C4.48834 13 1.19774 7.45681 1.07118 7.24361C0.976274 7.09128 0.976274 6.93896 1.07118 6.78684C1.19764 6.54316 4.48834 1 10.5 1C16.5117 1 19.8023 6.54319 19.9288 6.75639C20.0237 6.90872 20.0237 7.06105 19.9288 7.21316C19.8024 7.45684 16.5117 13 10.5 13ZM10.5 10.6548C8.41168 10.6548 6.70321 9.01018 6.70321 6.99996C6.70321 4.98974 8.41168 3.34516 10.5 3.34516C12.5883 3.34516 14.2968 4.98974 14.2968 6.99996C14.2968 9.01018 12.5883 10.6548 10.5 10.6548Z"
                            stroke="#8A949F"/>
                      </svg>
                    </router-link>
                  </div>
                </td>
              </tr>

            </table>
          </div>
        </div>

      </div>

    </div>
    <a href="#comment" uk-toggle ref="comment_btn" class="add-comment js-add-comment">
      <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" >
        <g id="🔍-Product-Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g id="ic_fluent_comment_24_regular" fill="#fff" fill-rule="nonzero">
            <path d="M5.25,18 C3.45507456,18 2,16.5449254 2,14.75 L2,6.25 C2,4.45507456 3.45507456,3 5.25,3 L18.75,3 C20.5449254,3 22,4.45507456 22,6.25 L22,14.75 C22,16.5449254 20.5449254,18 18.75,18 L13.0124851,18 L7.99868152,21.7506795 C7.44585139,22.1641649 6.66249789,22.0512036 6.2490125,21.4983735 C6.08735764,21.2822409 6,21.0195912 6,20.7499063 L5.99921427,18 L5.25,18 Z M12.5135149,16.5 L18.75,16.5 C19.7164983,16.5 20.5,15.7164983 20.5,14.75 L20.5,6.25 C20.5,5.28350169 19.7164983,4.5 18.75,4.5 L5.25,4.5 C4.28350169,4.5 3.5,5.28350169 3.5,6.25 L3.5,14.75 C3.5,15.7164983 4.28350169,16.5 5.25,16.5 L7.49878573,16.5 L7.49899997,17.2497857 L7.49985739,20.2505702 L12.5135149,16.5 Z" id="🎨-Color"></path>
          </g>
        </g>
      </svg>
    </a>
    <CommentModal/>
    <MapModal/>
    <ContentBottom />
  </div>
</template>

<script>
// @ is an alias to /src
import {mapMutations, mapActions, mapGetters} from "vuex";
import ContentBottom from "@/components/ContentBottom";
import TopBar from "@/components/TopBar";
import CommentModal from "@/components/modals/CommentModal";
import MapModal from "@/components/modals/MapModal";
import axios from 'axios';


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
    // axios.get('basUrl/new-requests', {
    //     params:{
    //       per_page: 10
    //     }
    // })

  },
  methods:{
    showComment(){
      let count = document.querySelectorAll('.add__comment-checkbox:checked')
      if(count.length){
        this.$refs.comment_btn.style.display='block';
      } else{
        this.$refs.comment_btn.style.display='none';
      }
    }
  },
  computed: {
    ...mapGetters({
      getRequests: 'newRequests/GET_NEW_REQUESTS'
    }),
  },
  components: {
    ContentBottom,
    TopBar,
    CommentModal,
    MapModal
  }
}
</script>
