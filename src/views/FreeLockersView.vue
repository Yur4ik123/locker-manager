<template>
<div class="free__locker">
  <TopBar></TopBar>
  <div class="container">

    <div class="content__result js-result">
      <div class="content__wrap white-bg">
        <div class="content__table">
          <table class="table">
            <tr>
              <th>Gebäude/ Ort</th>
              <th>Etage</th>
              <th>Spind-Nr.</th>
              <th>Status</th>
            </tr>
            <tr>
              <td>0126</td>
              <td>2</td>
              <td>156</td>
              <td>Frei</td>
            </tr>
            <tr>
              <td>0126</td>
              <td>2</td>
              <td>156</td>
              <td>Frei</td>
            </tr>
            <tr>
              <td>0126</td>
              <td>3</td>
              <td>158</td>
              <td>Reparatur</td>
            </tr>

          </table>
        </div>
      </div>

    </div>

  </div>
  <ContentBottom/>
</div>
</template>

<script>
import ContentBottom from "@/components/ContentBottom";
import TopBar from "@/components/TopBar";

export default {
  name: "FreeLockersView",
  components: {
    ContentBottom,
    TopBar
  }
}
</script>

<style scoped>

</style>