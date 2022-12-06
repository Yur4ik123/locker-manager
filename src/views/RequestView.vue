<template>
  <div class="request__view">
    <form action="" class="content content_form" @submit.prevent="submit">
      <div class="white-bg">
        <div class="container">
          <div class="content__container">
            <h1 class="content__title">Spind beantragen</h1>
            <div class="form">
              <div class="form__row">
                <div class="form__item" :class="{'invalid': $v.client.$error}">
                  <label class="form__lbl">Auftraggeber *</label>
                  <SelectComponent v-model.trim="$v.client.$model" :options="clients_list"></SelectComponent>
                  <span class="valid-error">
                            required
                        </span>

                </div>
                <div class="form__item">
                  <label class="form__lbl">Ansprechpartner</label>
                  <input type="text" v-model.trim="contact_person" class="input-text" name="" placeholder="" value="">
                </div>
                <div class="form__item">
                  <label class="form__lbl">Telefonnummer</label>
                  <input type="text" v-model.trim="phone" class="input-text" name="" placeholder="" value="">
                </div>
                <div class="form__item">
                  <label class="form__lbl">E-Mail Adresse</label>
                  <input type="text" v-model.trim="email" class="input-text" name="" placeholder="" value="">

                </div>
                <div class="form__item" :class="{'invalid': $v.employer.$error}">
                  <label class="form__lbl">Arbeitgeber *</label>
                  <input type="text" v-model.trim="$v.employer.$model" class="input-text" name="" placeholder=""
                         value="">
                  <span class="valid-error">
                            required
                        </span>
                </div>
                <div class="form__item" :class="{'invalid': $v.cost_centre.$error}">
                  <label class="form__lbl">Kostenstelle *</label>

                  <input type="text" v-model.trim="$v.cost_centre.$model" class="input-text" name="" placeholder=""
                         value="">
                  <span class="valid-error">
                            required
                        </span>
                </div>
                <div class="form__item" :class="{'invalid': $v.location.$error}">
                  <label class="form__lbl">Gebäude/ Ort *</label>
                  <SelectComponent v-model.trim="$v.location.$model" :options="palaces_list"></SelectComponent>
                  <span class="valid-error">
                            required
                        </span>
                </div>
                <div class="form__item" :class="{'invalid': $v.role.$error}">
                  <label class="form__lbl">Rolle *</label>
                  <SelectComponent v-model.trim="$v.role.$model" :options="roles_list"></SelectComponent>
                  <span class="valid-error">
                            required
                        </span>
                </div>
                <div class="form__item">
                  <label class="form__lbl">Mietbeginn</label>
                  <input type="date" v-model.trim="rental_start" class="input-text" name="" placeholder="">
                </div>
                <div class="form__item">
                  <label class="form__lbl">Mietende </label>
                  <input type="date" v-model.trim="rental_end" class="input-text" name="" placeholder="">
                </div>
                <div class="form__item" :class="{'invalid': $v.gender.$error}">
                  <label class="form__lbl">Geschlecht *</label>
                  <SelectComponent v-model.trim="$v.gender.$model" :options="genders_list"></SelectComponent>
                  <span class="valid-error">
                            required
                        </span>
                </div>
                <div class="form__item form__item_50">
                  <label class="form__lbl">Bemerkung</label>
                  <textarea v-model.trim="remark" class="input-textarea"></textarea>
                </div>
              </div>
              <div class="form__row">
                <div class="form__item">
                  <label class="input-checkbox">
                    <input type="checkbox" v-model.trim="reg_ror_downtime" name="" value=""
                           class="input-checkbox__input js-tab-change">
                    <span>Für Stillstand anmelden</span>
                  </label>
                </div>
              </div>
              <div class="js-show-num" v-if="reg_ror_downtime">
                <div class="form__row">
                  <div class="form__item">
                    <label class="form__lbl">Auftragsnummer</label>
                    <input type="text" v-model.trim="order_number" class="input-text" name="" placeholder="" value="">
                  </div>
                  <div class="form__item">
                    <label class="form__lbl">Anzahl Personen</label>
                    <input type="number" v-model.trim="number_people" min="1" class="input-text js-cloned-count-input"
                           name="" value="1"
                           placeholder="">
                  </div>
                  <div class="form__item">
                    <button type="submit" class="button button_block button_clear js-cloned-count js-cloned-add">
                      Hinzufügen
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="grey-bg">
        <div class="container">
          <div class="content__container">
            <h1 class="content__title">Personen</h1>
            <div class="cloned">
              <div class="cloned__wrap js-cloned-rows">
                <div class="cloned__row js-cloned-row" v-for="(item, idx) in persons">
                  <div class="cloned__item">
                    <label class="form__lbl">Personalnummer</label>
                    <input type="text" class="input-text" v-model="item.pepersonalnummer" placeholder="" value="">
                  </div>
                  <div class="cloned__item">
                    <label class="form__lbl">Nachname</label>
                    <input type="text" class="input-text" v-model="item.name" placeholder="" value="">
                  </div>
                  <div class="cloned__item">
                    <label class="form__lbl">Vorname</label>
                    <input type="text" class="input-text" v-model="item.vorname" placeholder="" value="">
                  </div>
                  <div class="cloned__item">
                    <label class="form__lbl">Geschlecht</label>
                    <SelectComponent v-model="item.sex" :options="genders_list"></SelectComponent>
                  </div>
                  <div class="cloned__remove js-cloned-remove" v-if="idx!=0" @click="removeRow(idx)">
                    <img src="@/assets/img/style/ico_remove.svg" alt="">
                  </div>
                </div>
              </div>
              <div class="cloned__bottom">
                <div class="button button_clear js-cloned-add" @click="clonedAdd">
                  <span>Weitere Person hinzufügen</span>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 0L9 18M18 9L0 9" stroke="#006B8D"/>
                  </svg>
                </div>
                <button type="submit" ref="submit_button"
                        class="button button_blue js-check-save-button">Speichern
                </button>
                <button type="submit" ref="save_button"
                        class="fixed-save-button js-save-button">
                  <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                       xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                       viewBox="0 0 486 486" style="enable-background:new 0 0 486 486;" xml:space="preserve">
<g>
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
</g>
                    <g>
</g>
                    <g>
</g>
                    <g>
</g>
                    <g>
</g>
                    <g>
</g>
                    <g>
</g>
                    <g>
</g>
                    <g>
</g>
                    <g>
</g>
                    <g>
</g>
                    <g>
</g>
                    <g>
</g>
                    <g>
</g>
                    <g>
</g>
                    <g>
</g>
</svg>
                </button>
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
import DateComponent from "@/components/partials/date-component";
import axios from "axios";
import {required, email} from 'vuelidate/lib/validators'

export default {
  name: "RequestView",
  data() {
    return {
      clients_list: ['BASF', 'Bayer', 'CABB', 'Clariant', 'EEW', 'LiondellBasel', 'Perimeter Solutions', 'Statkraft'],
      client: 'BASF',
      palaces_list: ['0126 Knapsack', '1400 Hürth'],
      location: '0126 Knapsack',
      roles_list: ['Mitarbeiter', 'Azubi', 'Praktikant', 'Umschüler', 'AÜG', 'Sonstige'],
      role: 'Mitarbeiter',
      genders_list: ['Männlich', 'Weiblich', 'Divers'],
      gender: 'Männlich',
      persons: [{
        personalnummer: '',
        name: '',
        vorname: '',
        sex: ''
      }],
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
  validations: {
    client: {required},
    employer: {required},
    cost_centre: {required},
    location: {required},
    role: {required},
    gender: {required},
  },
  mounted() {

    let observer = new IntersectionObserver(this.showHideSaveButton, {
      root: document,
      rootMargin: '50px',
      threshold: 1.0
    });
    observer.observe(this.$refs.submit_button);
  },
  methods: {
    submit() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        console.log(this.$v)
        return;
      }
      axios.post('/requests/create', this.$data).then(res => {
       this.$router.push('/')
      }).catch(err => {
        console.log(err)
      })

    },
    showHideSaveButton(entries, observer) {
      let save_btn = this.$refs.save_button
      entries[0].isIntersecting ? save_btn.style.display = 'none  ' : save_btn.style.display = 'block'
    },
    clonedAdd() {
      this.persons.push({
        personalnummer: '',
        name: '',
        vorname: '',
        sex: ''
      })
    },
    removeRow(idx) {
      console.log(idx, 'asfasfa')
      this.persons = this.persons.filter((e, i) => i !== idx).slice()
    }
  },
  components: {
    SelectComponent,
    DateComponent
  }
}
</script>

<style lang="scss">
@import "@/styles/block/system/_mixin.scss";

@include validate;
</style>