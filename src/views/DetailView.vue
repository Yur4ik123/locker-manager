<template>
  <div class="detail__page">
    <form action="" class="content content_form">
      <div class="white-bg">
        <div class="container">
          <div class="content__container">
            <h1 class="content__title">Spind zuteilen</h1>
            <div class="form">
              <div class="form__row">
                <div class="form__item">

                  <label class="form__lbl">Auftraggeber</label>
                  <SelectComponent :disabled="true" v-model="client" :options="clients_list"></SelectComponent>
                  <!--                  <select name="" disabled>-->
                  <!--                    <option value="">Bayer</option>-->
                  <!--                    <option value="">Basf</option>-->
                  <!--                    <option value="">Basf</option>-->
                  <!--                  </select>-->
                </div>
                <div class="form__item">
                  <label class="form__lbl">Ansprechpartner</label>
                  <input type="text" class="input-text" name="" placeholder="" v-model="contact_person">
                </div>
                <div class="form__item">
                  <label class="form__lbl">Telefonnummer</label>
                  <input type="text" class="input-text" name="" placeholder="" v-model="phone">
                </div>
                <div class="form__item">
                  <label class="form__lbl">E-Mail Adresse</label>
                  <input type="text" class="input-text" name="" placeholder="" v-model="phone">
                </div>
                <div class="form__item">
                  <label class="form__lbl">Arbeitgeber</label>
                  <input type="text" class="input-text" name="" placeholder="" value="Gerüst GmbH">
                </div>
                <div class="form__item">
                  <label class="form__lbl">Kostenstelle</label>
                  <input type="text" class="input-text" name="" placeholder="" v-model="cost_centre">
                </div>
                <div class=" form__item">
                  <label class="form__lbl">Auftragsnummer</label>
                  <input type="text" class="input-text" name="" v-model="id">
                </div>
                <div class="form__item">
                  <label class="form__lbl">Verrechnung</label>
                  <SelectComponent v-model="count" :options="count_list"></SelectComponent>
                </div>
              </div>
              <div class="form__row">
                <div class="form__item">
                  <label class="form__lbl">Mietbeginn</label>
                  <input type="date" class="input-text"
                        v-model="rental_start">

                </div>
                <div class="form__item">
                  <label class="form__lbl">Mietende</label>
                  <input type="date"  class="input-text"
                         v-model="rental_end">

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="grey-bg">
        <div class="container">
          <div class="content__container">
            <div class="form">
              <div class="form__row">
                <div class="form__item">
                  <label class="form__lbl">Personalnummer</label>
                  <input type="text" class="input-text" name="" placeholder="" value="10038xx">
                </div>
                <div class="form__item">
                  <label class="form__lbl">Nachname</label>
                  <input type="text" class="input-text" name="" placeholder="" value="Müller">
                </div>
                <div class="form__item">
                  <label class="form__lbl">Vorname</label>
                  <input type="text" class="input-text" name="" placeholder="" value="Max">
                </div>
                <div class="form__item">
                  <label class="form__lbl">Geschlecht</label>
                  <SelectComponent v-model="gender" :options="genders_list"></SelectComponent>
                </div>
                <div class="form__item">
                  <label class="form__lbl">Rolle</label>
                  <input type="text" class="input-text" name="" placeholder="" value="Mitarbeiter">
                </div>
                <div class="form__item">
                  <label class="form__lbl">Gebäude/ Ort</label>
                  <SelectComponent v-model="place" :options="palaces_list"></SelectComponent>
                </div>

                <div class="form__item">
                  <label class="form__lbl">Etage</label>
                  <SelectComponent v-model="level" :options="levels_list"></SelectComponent>
                </div>
                <div class="form__item">
                  <label class="form__lbl">Spind-Nr.</label>
                  <input type="text" class="input-text" name="" placeholder="">
                </div>
                <div class="form__item">
                  <label class="form__lbl">Schicht</label>
                  <SelectComponent v-model="layer" :options="layers_list"></SelectComponent>
                </div>
                <div class="form__item form__item_100">
                  <label class="form__lbl">Bemerkung</label>
                  <textarea class="input-textarea"></textarea>
                </div>
                <div class="form__item form__item_full">
                  <button type="button" uk-toggle="target: #map" class="button button_green button_block">Wählen
                    Sie ein Schließfach
                  </button>
                </div>
                <div class="form__item">
                  <button type="submit" class="button button_block">Speichern</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MapModal/>
    </form>
  </div>
</template>

<script>
import SelectComponent from "@/components/partials/select-component";
import MapModal from "@/components/modals/MapModal";
import axios from "axios";

export default {
  name: "DetailView",
  data() {
    return {
      clients_list: ['BASF', 'Bayer', 'CABB', 'Clariant', 'EEW', 'LiondellBasel', 'Perimeter Solutions', 'Statkraft'],
      client: 'BASF',
      count_list: [1, 2, 3, 4, 5, 6],
      count: 1,
      place: '0126 Knapsack',
      levels_list: ['UG', 'EG', '1 OG', '2 OG', '3 OG'],
      level: 'UG',
      layers_list: ['Rot', 'Gelb', 'Grün', 1, 2, 3],
      layer: 'Rot',
      palaces_list: ['0126 Knapsack', '1400 Hürth'],
      location: '0126 Knapsack',
      roles_list: ['Mitarbeiter', 'Azubi', 'Praktikant', 'Umschüler', 'AÜG', 'Sonstige'],
      role: 'Mitarbeiter',
      genders_list: ['Männlich', 'Weiblich', 'Divers'],
      gender: 'Männlich',
      id: '',
      employer: '',
      contact_person: '',
      phone: '',
      email: '',
      cost_centre: '',
      rental_end: '',
      rental_start: '',
      remark: '',
      number_people: 1,
      order_number: 0,
      reg_ror_downtime: false,
    }
  },
  components: {
    SelectComponent,
    MapModal
  },
  created() {
    axios.get(`/requests/${this.$route.params.id}`).then(res => {
      console.log(res)

      this.contact_person = res.data.contact_person
      this.id = res.data.id
      this.client = res.data.client
      this.phone = res.data.phone
      this.email = res.data.email
      this.cost_centre = res.data.cost_centre
      this.rental_end = res.data.rental_end
      this.rental_start = res.data.rental_start
      this.remark = res.data.remark
      this.number_people = res.data.number_people
      this.order_number = res.data.order_number
      this.reg_ror_downtime = res.data.reg_ror_downtime
    })
  }
}
</script>

<style scoped>

</style>