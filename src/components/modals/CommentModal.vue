<template>
  <div class="uk-flex-top" id="comment" uk-modal>
    <div class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">
      <div class="modal__title">Hinweis</div>
      <form action="" class="modal__form">
        <div class="modal__form-row">
          <textarea name="" class="input-textarea"></textarea>
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
  name: "CommentModal",

}
</script>

<style scoped>

</style>