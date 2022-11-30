<template>
  <div class="reserved__lockers">
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
              <tr>
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
                    <input type="checkbox" class="input-checkbox__input">
                    <span></span>
                  </label>
                </td>
                <td>
                  <div class="table__buttons">
                    <a href="#" class="table__button js-remove-item">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 1L9 9.13333M9 9.13333L1.26229 17M9 9.13333L16.7377 17M9 9.13333L1 1" stroke="#006B8D" stroke-width="2"/>
                      </svg>

                    </a>
                    <a href="./detailed-full.html" class="table__button">
                      <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.0782 14.1465L10.6791 15.6884L12.154 19.6406C12.213 19.8801 12.4489 20 12.6259 20H12.685C12.862 20 13.0979 19.8803 13.2158 19.7006L14.7497 17.1256L17.1408 19.5398C17.3767 19.7792 17.7307 19.7792 17.9666 19.5398L19.5593 17.923C19.7953 17.6835 19.7953 17.3242 19.5593 17.0847L17.1683 14.6706L19.705 13.1136C19.882 12.9938 20 12.7542 20 12.5747C19.9409 12.3349 19.764 12.1555 19.587 12.0955L15.6935 10.5984L10.2072 8.56238L8.73234 8.02352C8.49643 7.96358 8.26036 8.02352 8.08335 8.14325C8.02444 8.26313 7.96542 8.5026 8.02447 8.74207L8.55533 10.2391L10.0782 14.1465ZM10.0782 14.1465L9.85344 13.5924M10.0782 14.1465L10.2664 14.6104M4 18H15C16.6569 18 18 16.6569 18 15V4C18 2.34315 16.6569 1 15 1H4C2.34315 1 1 2.34315 1 4V15C1 16.6569 2.34315 18 4 18Z" stroke="#000"/>
                      </svg>

                    </a>
                  </div>
                </td>
              </tr>
              <tr>
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
                    <input type="checkbox" class="input-checkbox__input">
                    <span></span>
                  </label>
                </td>
                <td>
                  <div class="table__buttons">
                    <a href="#" class="table__button js-remove-item">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 1L9 9.13333M9 9.13333L1.26229 17M9 9.13333L16.7377 17M9 9.13333L1 1" stroke="#000" stroke-width="2"/>
                      </svg>

                    </a>
                    <a href="./detailed-full.html" class="table__button">
                      <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.0782 14.1465L10.6791 15.6884L12.154 19.6406C12.213 19.8801 12.4489 20 12.6259 20H12.685C12.862 20 13.0979 19.8803 13.2158 19.7006L14.7497 17.1256L17.1408 19.5398C17.3767 19.7792 17.7307 19.7792 17.9666 19.5398L19.5593 17.923C19.7953 17.6835 19.7953 17.3242 19.5593 17.0847L17.1683 14.6706L19.705 13.1136C19.882 12.9938 20 12.7542 20 12.5747C19.9409 12.3349 19.764 12.1555 19.587 12.0955L15.6935 10.5984L10.2072 8.56238L8.73234 8.02352C8.49643 7.96358 8.26036 8.02352 8.08335 8.14325C8.02444 8.26313 7.96542 8.5026 8.02447 8.74207L8.55533 10.2391L10.0782 14.1465ZM10.0782 14.1465L9.85344 13.5924M10.0782 14.1465L10.2664 14.6104M4 18H15C16.6569 18 18 16.6569 18 15V4C18 2.34315 16.6569 1 15 1H4C2.34315 1 1 2.34315 1 4V15C1 16.6569 2.34315 18 4 18Z" stroke="#000"/>
                      </svg>

                    </a>
                  </div>
                </td>
              </tr>
              <tr>
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
                    <input type="checkbox" class="input-checkbox__input">
                    <span></span>
                  </label>
                </td>
                <td>
                  <div class="table__buttons">
                    <a href="#" class="table__button js-remove-item">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 1L9 9.13333M9 9.13333L1.26229 17M9 9.13333L16.7377 17M9 9.13333L1 1" stroke="#000" stroke-width="2"/>
                      </svg>

                    </a>
                    <a href="./detailed-full.html" class="table__button">
                      <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.0782 14.1465L10.6791 15.6884L12.154 19.6406C12.213 19.8801 12.4489 20 12.6259 20H12.685C12.862 20 13.0979 19.8803 13.2158 19.7006L14.7497 17.1256L17.1408 19.5398C17.3767 19.7792 17.7307 19.7792 17.9666 19.5398L19.5593 17.923C19.7953 17.6835 19.7953 17.3242 19.5593 17.0847L17.1683 14.6706L19.705 13.1136C19.882 12.9938 20 12.7542 20 12.5747C19.9409 12.3349 19.764 12.1555 19.587 12.0955L15.6935 10.5984L10.2072 8.56238L8.73234 8.02352C8.49643 7.96358 8.26036 8.02352 8.08335 8.14325C8.02444 8.26313 7.96542 8.5026 8.02447 8.74207L8.55533 10.2391L10.0782 14.1465ZM10.0782 14.1465L9.85344 13.5924M10.0782 14.1465L10.2664 14.6104M4 18H15C16.6569 18 18 16.6569 18 15V4C18 2.34315 16.6569 1 15 1H4C2.34315 1 1 2.34315 1 4V15C1 16.6569 2.34315 18 4 18Z" stroke="#000"/>
                      </svg>

                    </a>
                  </div>
                </td>
              </tr>
              <tr>
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
                    <input type="checkbox" class="input-checkbox__input">
                    <span></span>
                  </label>
                </td>
                <td>
                  <div class="table__buttons">
                    <a href="#" class="table__button js-remove-item">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 1L9 9.13333M9 9.13333L1.26229 17M9 9.13333L16.7377 17M9 9.13333L1 1" stroke="#000" stroke-width="2"/>
                      </svg>

                    </a>
                    <a href="./detailed-full.html" class="table__button">
                      <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.0782 14.1465L10.6791 15.6884L12.154 19.6406C12.213 19.8801 12.4489 20 12.6259 20H12.685C12.862 20 13.0979 19.8803 13.2158 19.7006L14.7497 17.1256L17.1408 19.5398C17.3767 19.7792 17.7307 19.7792 17.9666 19.5398L19.5593 17.923C19.7953 17.6835 19.7953 17.3242 19.5593 17.0847L17.1683 14.6706L19.705 13.1136C19.882 12.9938 20 12.7542 20 12.5747C19.9409 12.3349 19.764 12.1555 19.587 12.0955L15.6935 10.5984L10.2072 8.56238L8.73234 8.02352C8.49643 7.96358 8.26036 8.02352 8.08335 8.14325C8.02444 8.26313 7.96542 8.5026 8.02447 8.74207L8.55533 10.2391L10.0782 14.1465ZM10.0782 14.1465L9.85344 13.5924M10.0782 14.1465L10.2664 14.6104M4 18H15C16.6569 18 18 16.6569 18 15V4C18 2.34315 16.6569 1 15 1H4C2.34315 1 1 2.34315 1 4V15C1 16.6569 2.34315 18 4 18Z" stroke="#000"/>
                      </svg>

                    </a>
                  </div>
                </td>
              </tr>
              <tr>
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
                    <input type="checkbox" class="input-checkbox__input">
                    <span></span>
                  </label>
                </td>
                <td>
                  <div class="table__buttons">
                    <a href="#" class="table__button js-remove-item">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 1L9 9.13333M9 9.13333L1.26229 17M9 9.13333L16.7377 17M9 9.13333L1 1" stroke="#000" stroke-width="2"/>
                      </svg>

                    </a>
                    <a href="./detailed-full.html" class="table__button">
                      <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.0782 14.1465L10.6791 15.6884L12.154 19.6406C12.213 19.8801 12.4489 20 12.6259 20H12.685C12.862 20 13.0979 19.8803 13.2158 19.7006L14.7497 17.1256L17.1408 19.5398C17.3767 19.7792 17.7307 19.7792 17.9666 19.5398L19.5593 17.923C19.7953 17.6835 19.7953 17.3242 19.5593 17.0847L17.1683 14.6706L19.705 13.1136C19.882 12.9938 20 12.7542 20 12.5747C19.9409 12.3349 19.764 12.1555 19.587 12.0955L15.6935 10.5984L10.2072 8.56238L8.73234 8.02352C8.49643 7.96358 8.26036 8.02352 8.08335 8.14325C8.02444 8.26313 7.96542 8.5026 8.02447 8.74207L8.55533 10.2391L10.0782 14.1465ZM10.0782 14.1465L9.85344 13.5924M10.0782 14.1465L10.2664 14.6104M4 18H15C16.6569 18 18 16.6569 18 15V4C18 2.34315 16.6569 1 15 1H4C2.34315 1 1 2.34315 1 4V15C1 16.6569 2.34315 18 4 18Z" stroke="#000"/>
                      </svg>

                    </a>
                  </div>
                </td>
              </tr>
              <tr>
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
                    <input type="checkbox" class="input-checkbox__input">
                    <span></span>
                  </label>
                </td>
                <td>
                  <div class="table__buttons">
                    <a href="#" class="table__button js-remove-item">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 1L9 9.13333M9 9.13333L1.26229 17M9 9.13333L16.7377 17M9 9.13333L1 1" stroke="#000" stroke-width="2"/>
                      </svg>

                    </a>
                    <a href="./detailed-full.html" class="table__button">
                      <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.0782 14.1465L10.6791 15.6884L12.154 19.6406C12.213 19.8801 12.4489 20 12.6259 20H12.685C12.862 20 13.0979 19.8803 13.2158 19.7006L14.7497 17.1256L17.1408 19.5398C17.3767 19.7792 17.7307 19.7792 17.9666 19.5398L19.5593 17.923C19.7953 17.6835 19.7953 17.3242 19.5593 17.0847L17.1683 14.6706L19.705 13.1136C19.882 12.9938 20 12.7542 20 12.5747C19.9409 12.3349 19.764 12.1555 19.587 12.0955L15.6935 10.5984L10.2072 8.56238L8.73234 8.02352C8.49643 7.96358 8.26036 8.02352 8.08335 8.14325C8.02444 8.26313 7.96542 8.5026 8.02447 8.74207L8.55533 10.2391L10.0782 14.1465ZM10.0782 14.1465L9.85344 13.5924M10.0782 14.1465L10.2664 14.6104M4 18H15C16.6569 18 18 16.6569 18 15V4C18 2.34315 16.6569 1 15 1H4C2.34315 1 1 2.34315 1 4V15C1 16.6569 2.34315 18 4 18Z" stroke="#000"/>
                      </svg>

                    </a>
                  </div>
                </td>
              </tr>
              <tr>
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
                    <input type="checkbox" class="input-checkbox__input">
                    <span></span>
                  </label>
                </td>
                <td>
                  <div class="table__buttons">
                    <a href="#" class="table__button js-remove-item">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 1L9 9.13333M9 9.13333L1.26229 17M9 9.13333L16.7377 17M9 9.13333L1 1" stroke="#000" stroke-width="2"/>
                      </svg>

                    </a>
                    <a href="./detailed-full.html" class="table__button">
                      <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.0782 14.1465L10.6791 15.6884L12.154 19.6406C12.213 19.8801 12.4489 20 12.6259 20H12.685C12.862 20 13.0979 19.8803 13.2158 19.7006L14.7497 17.1256L17.1408 19.5398C17.3767 19.7792 17.7307 19.7792 17.9666 19.5398L19.5593 17.923C19.7953 17.6835 19.7953 17.3242 19.5593 17.0847L17.1683 14.6706L19.705 13.1136C19.882 12.9938 20 12.7542 20 12.5747C19.9409 12.3349 19.764 12.1555 19.587 12.0955L15.6935 10.5984L10.2072 8.56238L8.73234 8.02352C8.49643 7.96358 8.26036 8.02352 8.08335 8.14325C8.02444 8.26313 7.96542 8.5026 8.02447 8.74207L8.55533 10.2391L10.0782 14.1465ZM10.0782 14.1465L9.85344 13.5924M10.0782 14.1465L10.2664 14.6104M4 18H15C16.6569 18 18 16.6569 18 15V4C18 2.34315 16.6569 1 15 1H4C2.34315 1 1 2.34315 1 4V15C1 16.6569 2.34315 18 4 18Z" stroke="#000"/>
                      </svg>

                    </a>
                  </div>
                </td>
              </tr>

            </table>
          </div>
        </div>
      </div>
      <ContentBottom></ContentBottom>
    </div>
  </div>

</template>

<script>
import ContentBottom from "@/components/ContentBottom";

export default {
  name: "ReservedLockersView",
  components: {
    ContentBottom
  }
}
</script>

<style scoped>

</style>