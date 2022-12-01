<template>
  <div class="reserved__lockers">
    <TopBar></TopBar>
    <div class="container">

      <div class="content__result js-result">
        <div class="content__wrap white-bg">
          <div class="content__table">
            <table class="table">
              <tr>
                <th>Pers.-Nr.</th>
                <th>Nachname</th>
                <th>Vorname</th>
                <th>Arbeitgeber</th>
                <th>Auftraggeber</th>
                <th>Kostenstelle</th>
                <th>Telefon</th>
                <th>E-Mail</th>
                <th>Gebäude/ Ort</th>
                <th>Spind-Nr.</th>
                <th>Mietbeginn</th>
                <th>Mietende</th>
                <th>Abm.</th>
                <th></th>
              </tr>
              <tr v-for="i in 10">
                <td>9999999</td>
                <td>Meier</td>
                <td>Hans</td>
                <td>Deutsche Post</td>
                <td>REA</td>
                <td>xxxxxxxxxx</td>
                <td>xxxxxxxxxx</td>
                <td>mail@mail.com</td>
                <td>0126 Knapsack</td>
                <td>156</td>
                <td>21.01.2022</td>
                <td>21.02.2022</td>
                <td>
                  <label class="input-checkbox">
                    <input type="checkbox" @click="showComment" class="input-checkbox__input add__comment-checkbox">
                    <span></span>
                  </label>
                </td>
                <td>
                  <div class="table__buttons">
                    <a href="#" class="table__button js-remove-item" @click.prevent="removeRow">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 1L9 9.13333M9 9.13333L1.26229 17M9 9.13333L16.7377 17M9 9.13333L1 1"
                              stroke="#006B8D" stroke-width="2"/>
                      </svg>

                    </a>
                    <router-link to="/detailed-full" class="table__button">
                      <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10.0782 14.1465L10.6791 15.6884L12.154 19.6406C12.213 19.8801 12.4489 20 12.6259 20H12.685C12.862 20 13.0979 19.8803 13.2158 19.7006L14.7497 17.1256L17.1408 19.5398C17.3767 19.7792 17.7307 19.7792 17.9666 19.5398L19.5593 17.923C19.7953 17.6835 19.7953 17.3242 19.5593 17.0847L17.1683 14.6706L19.705 13.1136C19.882 12.9938 20 12.7542 20 12.5747C19.9409 12.3349 19.764 12.1555 19.587 12.0955L15.6935 10.5984L10.2072 8.56238L8.73234 8.02352C8.49643 7.96358 8.26036 8.02352 8.08335 8.14325C8.02444 8.26313 7.96542 8.5026 8.02447 8.74207L8.55533 10.2391L10.0782 14.1465ZM10.0782 14.1465L9.85344 13.5924M10.0782 14.1465L10.2664 14.6104M4 18H15C16.6569 18 18 16.6569 18 15V4C18 2.34315 16.6569 1 15 1H4C2.34315 1 1 2.34315 1 4V15C1 16.6569 2.34315 18 4 18Z"
                            stroke="#000"/>
                      </svg>

                    </router-link>
                  </div>
                </td>
              </tr>


            </table>
          </div>
        </div>
      </div>
      <a href="#leave" uk-toggle ref="leave_btn" class="add-comment js-add-comment">
        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
             x="0px" y="0px"
             viewBox="0 0 486 486" style="enable-background:new 0 0 486 486;" xml:space="preserve">

	<g>
		<path d="M473.7,485.75c6.8,0,12.3-5.5,12.3-12.3v-359.8c0-3.6-1.6-7-4.3-9.3L363,2.85c-0.2-0.2-0.4-0.3-0.6-0.4
			c-0.3-0.2-0.5-0.4-0.8-0.6c-0.4-0.2-0.7-0.4-1.1-0.6c-0.3-0.1-0.6-0.3-0.9-0.4c-0.4-0.2-0.9-0.3-1.3-0.4c-0.3-0.1-0.6-0.2-0.9-0.2
			c-0.8-0.1-1.5-0.2-2.3-0.2H12.3C5.5,0.05,0,5.55,0,12.35v461.3c0,6.8,5.5,12.3,12.3,12.3h461.4V485.75z M384.5,461.25h-283v-184.1
			c0-3.7,3-6.6,6.6-6.6h269.8c3.7,0,6.6,3,6.6,6.6V461.25z M161.8,24.45h180.9v127.8c0,0.8-0.6,1.4-1.4,1.4h-178
			c-0.8,0-1.4-0.7-1.4-1.4V24.45H161.8z M24.6,24.45h112.8v127.8c0,14.3,11.6,25.9,25.9,25.9h178c14.3,0,25.9-11.6,25.9-25.9V38.75
			l94.2,80.6v341.9H409v-184.1c0-17.2-14-31.1-31.1-31.1H108.1c-17.2,0-31.1,14-31.1,31.1v184.2H24.6V24.45z"/>
    <path d="M227.4,77.65h53.8v32.6c0,6.8,5.5,12.3,12.3,12.3s12.3-5.5,12.3-12.3v-44.8c0-6.8-5.5-12.3-12.3-12.3h-66.1
			c-6.8,0-12.3,5.5-12.3,12.3S220.7,77.65,227.4,77.65z"/>
    <path d="M304.5,322.85h-123c-6.8,0-12.3,5.5-12.3,12.3s5.5,12.3,12.3,12.3h123c6.8,0,12.3-5.5,12.3-12.3
			S311.3,322.85,304.5,322.85z"/>
    <path d="M304.5,387.75h-123c-6.8,0-12.3,5.5-12.3,12.3s5.5,12.3,12.3,12.3h123c6.8,0,12.3-5.5,12.3-12.3
			S311.3,387.75,304.5,387.75z"/>
	</g>

</svg>

      </a>
      <LeaveModal></LeaveModal>
      <ContentBottom></ContentBottom>
    </div>
  </div>

</template>

<script>
import ContentBottom from "@/components/ContentBottom";
import TopBar from "@/components/TopBar";
import LeaveModal from "@/components/modals/LeaveModal";

export default {
  name: "ReservedLockersView",
  methods: {
    removeRow() {
      confirm('Are you sure you want to delete this?')
    },
    showComment() {
      let count = document.querySelectorAll('.add__comment-checkbox:checked')
      if (count.length) {
        this.$refs.leave_btn.style.display = 'block';
      } else {
        this.$refs.leave_btn.style.display = 'none';
      }
    }
  },
  components: {
    ContentBottom,
    TopBar,
    LeaveModal
  }
}
</script>

<style scoped>

</style>