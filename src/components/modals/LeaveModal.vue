<template>
  <div class="uk-flex-top" id="leave" uk-modal>
    <div class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">
      <div class="modal__title">Datum auswählen</div>
      <form action="" class="modal__form">
        <div class="modal__form-row">
          <!-- <label class="form__lbl">Datum auswählen</label> -->
          <input type="date" class="input-text" name="" placeholder="">
<!--          <div class="form__item-icon">-->
<!--            <img src="@/assets//img/style/ico_date.svg" alt="">-->
<!--          </div>-->
        </div>
        <div class="modal__form-row modal__form-buttons">
          <div class="button button_grey button_small uk-modal-close" >Abbrechen</div>
          <button type="submit" class="button button_blue button_small">Speichern</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "LeaveModal"
}
</script>

<style scoped>

</style>