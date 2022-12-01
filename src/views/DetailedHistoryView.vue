<template>
  <div class="detailed__history_page">
    <form action="" class="content content_form">
      <div class="white-bg">
        <div class="container">
          <div class="content__container">
            <h1 class="content__title">Spind bearbeiten</h1>
            <div class="form">
              <div class="form__row">
                <div class="form__item">
                  <label class="form__lbl">Gebäude/ Ort</label>
                  <SelectComponent v-model="place" :options="palaces_list"></SelectComponent>

                </div>
                <div class="form__item">
                  <label class="form__lbl">Etage</label>
                  <SelectComponent v-model="level" :options="levels_list"></SelectComponent>

                </div>
                <div class="form__item">
                  <label class="form__lbl">Spindnummer</label>
                  <input type="text" class="input-text" name="" placeholder="" value="156">
                </div>
                <div class="form__item">
                  <label class="form__lbl">Schlüssel-Nr.</label>
                  <input type="text" class="input-text" name="" placeholder="" value="21312313">
                </div>
                <div class="form__item">
                  <label class="form__lbl">Status</label>
                  <SelectComponent v-model="status" :options="status_list"></SelectComponent>

                </div>
                <div class="form__item">
                  <label class="form__lbl">Spindinfo</label>
                  <SelectComponent v-model="locker_inf" :options="lockers_info_list"></SelectComponent>

                </div>
                <div class="form__item">
                  <label class="form__lbl">Maße</label>
                  <SelectComponent v-model="size" :options="sizes_list"></SelectComponent>
                </div>
                <div class="form__item">
                  <label class="form__lbl">Geschlecht</label>
                  <SelectComponent v-model="gender" :options="genders_list"></SelectComponent>

                </div>
                <div class="form__item">
                  <label class="form__lbl">Separierung</label>
                  <SelectComponent v-model="section" :options="sections_list"></SelectComponent>

                </div>
                <div class="form__item">
                  <label class="form__lbl">letzte Inventur</label>
                  <input type="date" class="input-text" name="" placeholder="">
                </div>
              </div>
              <div class="form__row">
                <div class="form__item form__item_full">
                  <button type="submit" class="button button_blue button_block">Speichern</button>
                </div>
                <div class="form__item">
                  <button type="submit" class="button button_grey button_block">Abbrechen</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="grey-bg">
        <div class="container">
          <div class="content__container">
            <h1 class="content__title mb15">Historie</h1>
            <div class="content__wrap white-bg">
              <div class="content__table">
                <table class="table">
                  <tr>
                    <th>Personalnummer</th>
                    <th>Nachname</th>
                    <th>Vorname</th>
                    <th>Mietbeginn</th>
                    <th>Mietende</th>
                  </tr>
                  <tr>
                    <td>10038XX</td>
                    <td>Müller</td>
                    <td>Max</td>
                    <td>20.01.2017</td>
                    <td>31.07.2017</td>
                  </tr>
                  <tr>
                    <td>10038XX</td>
                    <td>Müller</td>
                    <td>Max</td>
                    <td>20.01.2017</td>
                    <td>31.07.2017</td>
                  </tr>
                  <tr>
                    <td>10038XX</td>
                    <td>Müller</td>
                    <td>Max</td>
                    <td>20.01.2017</td>
                    <td>31.07.2017</td>
                  </tr>
                  <tr>
                    <td>10038XX</td>
                    <td>Müller</td>
                    <td>Max</td>
                    <td>20.01.2017</td>
                    <td>31.07.2017</td>
                  </tr>
                  <tr>
                    <td>10038XX</td>
                    <td>Müller</td>
                    <td>Max</td>
                    <td>20.01.2017</td>
                    <td>31.07.2017</td>
                  </tr>
                  <tr>
                    <td>10038XX</td>
                    <td>Müller</td>
                    <td>Max</td>
                    <td>20.01.2017</td>
                    <td>31.07.2017</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import SelectComponent from "@/components/partials/select-component";

export default {
  name: "DetailedHistoryView",
  data() {
    return {
      palaces_list: ['0126 Knapsack', '1400 Hürth'],
      place: '0126 Knapsack',
      levels_list: ['UG', 'EG', '1 OG', '2 OG', '3 OG'],
      level: 'UG',
      status_list: ['Mitarbeiter', 'Mitarbeiter', 'Mitarbeiter'],
      status: 'Mitarbeiter',
      lockers_info_list: ['S/W', 'Einzeltür', 'Doppeltür', 'Doppeltür Unterbrechungsfrei'],
      locker_inf: 'S/W',
      sizes_list: ['2000 x 500 x 400', '2000 x 600 x 400'],
      size: '2000 x 500 x 400',
      genders_list: ['Männlich', 'Weiblich', 'Divers'],
      gender: 'Männlich',
      sections_list: ['BCS und BASF (SW)', 'CLA und PS. (SW)', 'Basell', 'Vinnolit', 'Yncoris (Außer Azubis!)', 'Yncoris Azubis', 'REA', 'Nur Damen'],
      section: 'Nur Damen'
    }
  },
  components: {
    SelectComponent
  }
}
</script>

<style scoped>

</style>