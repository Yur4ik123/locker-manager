<template>
  <div id="app" class="uk-link-reset">
    <Header></Header>
    <div class="content">
      <router-view/>
    </div>
    <SettingsModal/>
  </div>
</template>
<script>
import Header from './components/Header'
import SettingsModal from './components/modals/SettingsModal'
export default {
  components: {
    Header,
    SettingsModal,
  }
}
</script>

<style lang="scss">

</style>
