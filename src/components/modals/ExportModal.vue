<template>
  <div class="uk-flex-top" id="export" uk-modal>
    <div class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">
    <div class="modal__title">Spalten für Excel-Export wählen</div>
    <form action="" class="modal__form">
      <div class="modal__form-row">
        <label class="input-checkbox">
          <input type="checkbox" class="input-checkbox__input"> <span></span>
        </label>
      </div>
      <div class="modal__form-row">
        <label class="input-checkbox">
          <input type="checkbox" class="input-checkbox__input"> <span>Auftraggeber</span>
        </label>
      </div>
      <div class="modal__form-row">
        <label class="input-checkbox">
          <input type="checkbox" class="input-checkbox__input"> <span>Personal-Nr.</span>
        </label>
      </div>
      <div class="modal__form-row">
        <label class="input-checkbox">
          <input type="checkbox" class="input-checkbox__input"> <span>Nachname</span>
        </label>
      </div>
      <div class="modal__form-row">
        <label class="input-checkbox">
          <input type="checkbox" class="input-checkbox__input"> <span>Vorname</span>
        </label>
      </div>
      <div class="modal__form-row">
        <label class="input-checkbox">
          <input type="checkbox" class="input-checkbox__input"> <span>Geschlecht</span>
        </label>
      </div>
      <div class="modal__form-row">
        <label class="input-checkbox">
          <input type="checkbox" class="input-checkbox__input"> <span>...</span>
        </label>
      </div>
      <div class="modal__form-row modal__form-buttons">
        <div class="button button_grey button_small uk-modal-close">Abbrechen</div>
        <button type="submit" class="button button_blue button_small">Export</button>
      </div>
    </form>
    </div>
  </div>

</template>

<script>
export default {
  name: "ExportModal"
}
</script>

<style scoped>

</style>