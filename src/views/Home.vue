<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <v-container>
      <v-row v-if="buildings" class="mt-11">
        <v-card v-for="building in buildings" :key="building.id" class="building-card">
          <v-row>
            <v-col>{{ building.floor }}</v-col>
            <v-col>{{ building.rooms }}</v-col>
            <v-col>-</v-col>
            <v-col>{{ building.square }}</v-col>
          </v-row>
          <div class="building-wrapper">
            <div class="rectangle-6"></div>
          </div>
        </v-card>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue';

@Component({
  components: {
    HelloWorld,
  },
})

export default class Home extends Vue {
  async mounted(): Promise<void> {
    this.$store.dispatch('loadBuildings');
    console.log(this.$store.state);
  }

  get buildings(): any {
    return this.$store.getters.getBuildings;
  }
}
</script>
<style lang="scss" scoped>
  .building-card {
    /* Rectangle 4 */
    width: 270px;
    height: 365px;
    background: #FFFFFF;
    box-shadow: 0px 5px 20px rgba(86, 86, 86, 0.05);
    border-radius: 10px;
  }
  .building-wrapper {
    /* Rectangle 5 */
    width: 250px;
    height: 250px;
    left: 10px;
    top: 40px;
    border: 1px solid #EBEBEB;
    box-sizing: border-box;
    border-radius: 5px;
  }
  .rectangle-6 {
    /* Rectangle 6 */
    width: 62px;
    height: 30px;
    float: right;
    border: 1px solid #EBEBEB;
    box-sizing: border-box;
    border-radius: 0px 5px;
  }
</style>
