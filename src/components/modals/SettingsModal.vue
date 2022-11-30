<template>
  <div class="uk-flex-top" id="settings" uk-modal>
    <div class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">
      <div class="modal__title">Bitte Debitoren wählen</div>
      <form action="" class="modal__form">
        <div class="modal__form-row">
          <label class="input-checkbox">
            <input type="checkbox" class="input-checkbox__input"> <span>BASF 1</span>
          </label>
        </div>
        <div class="modal__form-row">
          <label class="input-checkbox">
            <input type="checkbox" class="input-checkbox__input"> <span>BASF 2</span>
          </label>
        </div>
        <div class="modal__form-row">
          <label class="input-checkbox">
            <input type="checkbox" class="input-checkbox__input"> <span>Bayer 23</span>
          </label>
        </div>
        <div class="modal__form-row">
          <label class="input-checkbox">
            <input type="checkbox" class="input-checkbox__input"> <span>Bayer</span>
          </label>
        </div>
        <div class="modal__form-row">
          <label class="input-checkbox">
            <input type="checkbox" class="input-checkbox__input"> <span>Vinnolit</span>
          </label>
        </div>
        <div class="modal__form-row">
          <label class="input-checkbox">
            <input type="checkbox" class="input-checkbox__input"> <span>...</span>
          </label>
        </div>
        <div class="modal__form-row modal__form-buttons">
          <div class="button button_grey button_small uk-modal-close">Abbrechen</div>
          <button type="submit" class="button button_blue button_small">Speichern</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "SettingsModal"
}
</script>

<style scoped>

</style>