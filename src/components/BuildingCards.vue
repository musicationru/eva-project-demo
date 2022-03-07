<template>
  <v-row class="mt-11">
    <v-card v-for="building in buildings" :key="building.id" class="building ma-4 px-2">
      <p class="text-12 d-flex justify-space-around align-center my-2">
        <span class="text-gray">{{ building.floor }} этаж</span>
        <span>{{ building.rooms }} комната</span>
        <span class="text-gray">-</span>
        <span>{{ building.square }}м<span class="text-index">2</span></span>
      </p>
      <div class="building-wrapper mx-auto">
        <div class="building-number text-center d-flex justify-center align-center">
          <span>№{{ building.number }}</span>
        </div>
        <div class="building-image mx-2">
          <img src="@/assets/building.jpg" />
        </div>
      </div>
      <div class="building-bottom text-right">
        <p class="text-20 mt-2 mb-0">{{ numberWithSpaces(building.price) }}р.</p>
        <span class="text-gray text-12">
          {{ pricePerMeter(building.price, building.square) }} р. за м<span class="text-index"
            >2</span
          >
        </span>
      </div>
    </v-card>
  </v-row>
</template>

<script lang="ts">
import { BuildingState } from '@/store/types';
import Vue from 'vue';

export default Vue.extend({
  async mounted(): Promise<void> {
    this.$store.dispatch('loadBuildings');
  },
  methods: {
    pricePerMeter(price: number, square: number): string {
      return this.numberWithSpaces(Math.ceil(price / square));
    },
    numberWithSpaces(x: number): string {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    },
  },
  computed: {
    buildings(): Array<BuildingState> {
      return this.$store.getters.getBuildings;
    },
  },
});
</script>
