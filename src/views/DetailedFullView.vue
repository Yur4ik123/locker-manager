<template>
<div class="detailed__full-page">
  <form action=""  class="content content_form">
    <div class="white-bg">
      <div class="container">
        <div class="content__container">
          <h1 class="content__title">Spind zuteilen</h1>
          <div class="form">
            <div class="form__row">
              <div class="form__item">
                <label class="form__lbl">Auftraggeber</label>
                <SelectComponent :disabled="true" v-model="client" :options="clients_list"></SelectComponent>

              </div>
              <div class="form__item">
                <label class="form__lbl">Ansprechpartner</label>
                <input type="text" class="input-text" name="" placeholder="" value="Müller, Maria">
              </div>
              <div class="form__item">
                <label class="form__lbl">Telefonnummer</label>
                <input type="text" class="input-text" name="" placeholder="" value="02233 - xxx xx xx">
              </div>
              <div class="form__item">
                <label class="form__lbl">E-Mail Adresse</label>
                <input type="text" class="input-text error" name="" placeholder="" value="mueller.maria@xxxxx.com">
              </div>
              <div class="form__item">
                <label class="form__lbl">Arbeitgeber</label>
                <input type="text" class="input-text" name="" placeholder="" value="Gerüst GmbH">
              </div>
              <div class="form__item">
                <label class="form__lbl">Kostenstelle</label>
                <input type="text" class="input-text" name="" placeholder="" value="53800xxx">
              </div>
              <div class="form__item">
                <label class="form__lbl">Mietbeginn</label>
                <input type="date" class="input-text" data-toggle="datepicker" name="" placeholder="" value="23.02.2022">
<!--                <div class="form__item-icon">-->
<!--                  <img src="@/assets/img/style/ico_date.svg" alt="">-->
<!--                </div>-->
              </div>
              <div class="form__item">
                <label class="form__lbl">Mietende</label>
                <input type="date" data-toggle="datepicker" class="input-text" name="" placeholder="" value="31.05.2022">
<!--                <div class="form__item-icon">-->
<!--                  <img src="@/assets/img/style/ico_date.svg" alt="">-->
<!--                </div>-->
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
                <label class="form__lbl">Status</label>
                <SelectComponent v-model="status" :options="status_list"></SelectComponent>

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
                <input type="text" class="input-text" name="" placeholder="" value="122">
              </div>
              <div class="form__item">
                <label class="form__lbl">Spindstatus</label>
                <SelectComponent v-model="locker_status" :options="lockers_status_list"></SelectComponent>

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
  </form>
</div>
</template>

<script>
import SelectComponent from "@/components/partials/select-component";
export default {
  name: "DetailedFullView",
  data(){
    return{
      clients_list: ['Bayer', 'Basf', 'Basf'],
      client: 'Bayer',
      count_list: [1, 2, 3, 4, 5, 6],
      count: 1,
      genders_list: ['Männlich', 'Weiblich', 'Divers'],
      gender: 'Männlich',
      palaces_list: ['0126 Knapsack', '1400 Hürth'],
      place: '0126 Knapsack',
      levels_list: ['UG', 'EG', '1 OG', '2 OG', '3 OG'],
      level: 'UG',
      layers_list:['Rot','Gelb', 'Grün', 1,2,3 ],
      layer: 'Rot',
      status_list:['Mitarbeiter','Mitarbeiter','Mitarbeiter'],
      status:'Mitarbeiter',
      lockers_status_list:['Frei', 'Belegt', 'Reparatur' ],
      locker_status: 'Frei'
    }
  },
  components:{
    SelectComponent
  }
}
</script>

<style scoped>

</style>