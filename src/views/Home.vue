<template>
  <div class="home">
    <div class="main-wrapper mx-auto">
        <div class="light-wrapper mx-auto">
          <h1 class="text-center my-9"
          style="line-height: 60px; font-weight: 500"
          >
          LOREM IPSUM DOLOR SIT
          </h1>
          <BuildingsFilter></BuildingsFilter>
          <BuildingCards></BuildingCards>
        </div>
      </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BuildingCards from '../components/BuildingCards.vue';
import BuildingsFilter from '../components/BuildingsFilter.vue';

@Component({
  components: {
    BuildingCards, BuildingsFilter,
  },
})

export default class Home extends Vue {
}
</script>
<style lang="scss" scoped>
</style>
