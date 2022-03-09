<template>
  <v-row>
    <v-col class="pr-8">
      <p class="text-12">КОМНАТЫ</p>

      <v-btn-toggle
        v-model="rooms"
        tile
        color="#70D24E"
        group
        multiple
        class="d-flex justify-space-around align-center toggle-button-group"
        @change="filterBuildings()"
        >
        <v-btn class="toggle-button" value="0"><span class="toggle-button-text">S</span></v-btn>

        <v-btn class="toggle-button" value="1">1к</v-btn>

        <v-btn class="toggle-button" value="2">2к</v-btn>

        <v-btn class="toggle-button" value="3">3к</v-btn>
      </v-btn-toggle>
    </v-col>
    <v-col class="px-8">
      <p class="text-12">ЭТАЖ</p>
      <div class="d-flex justify-center align-center">
        <v-text-field
            :value="floor[0]"
            class="range-textarea mt-0 pt-0"
            hide-details
            loading="false"
            single-line
            type="text"
            @change="$set(floor, 0, $event)"
          ></v-text-field>
          <span class="text-gray mx-1">-</span>
        <v-text-field
            :value="floor[1]"
            class="range-textarea mt-0 pt-0"
            hide-details
            loading="false"
            single-line
            @change="$set(floor, 1, $event)"
          ></v-text-field>
      </div>
      <v-range-slider
        v-model="floor"
        :max="maxFloor"
        :min="minFloor"
        hide-details
        class="d-flex flex-column align-center justify-center"
        color="#70D24E"
        track-color="#D8D8D8;"
        @change="filterBuildings()"
        >
      </v-range-slider>
    </v-col>
    <v-col class="px-8">
      <p class="text-12">ПЛОЩАДЬ, м<span class="text-index">2</span></p>
      <div class="d-flex justify-center align-center">
      <v-text-field
            :value="square[0]"
            class="range-textarea mt-0 pt-0"
            hide-details
            loading="false"
            single-line
            style="width: 60px"
            @change="$set(square, 0, $event)"
          ></v-text-field>
          <span class="text-gray mx-1">-</span>
          <v-text-field
            :value="square[1]"
            class="range-textarea mt-0 pt-0"
            hide-details
            loading="false"
            single-line
            style="width: 60px"
            @change="$set(square, 1, $event)"
          ></v-text-field>
      </div>
      <v-range-slider
        v-model="square"
        :max="maxSquare"
        :min="minSquare"
        hide-details
        class="d-flex justify-space-around align-center"
        color="#70D24E"
        track-color="#D8D8D8;"
        @change="filterBuildings()"
        >
      </v-range-slider>
    </v-col>
    <v-col class="px-8">
      <p class="text-12">СТОИМОСТЬ, млн. р.</p>
      <div class="d-flex justify-center align-center">
      <v-text-field
            :value="price[0]"
            class="range-textarea mt-0 pt-0"
            hide-details
            loading="false"
            single-line
            style="width: 60px"
            @change="$set(price, 0, $event)"
          ></v-text-field>
          <span class="text-gray mx-1">-</span>
          <v-text-field
            :value="price[1]"
            class="range-textarea mt-0 pt-0"
            hide-details
            loading="false"
            single-line
            style="width: 60px"
            @change="$set(price, 1, $event)"
          ></v-text-field>
      </div>
      <v-range-slider
        v-model="price"
        :max="maxPrice"
        :min="minPrice"
        hide-details
        class="align-center"
        color="#70D24E"
        track-color="#D8D8D8;"
        @change="filterBuildings()"
        >
      </v-range-slider>
    </v-col>
    <v-col class="d-flex flex-column justify-center align-center pl-8">
      <v-btn
        class="bg-accent mx-0"
        :disabled="filteredBuildings.length === 0"
        @click="applyFilter">ПРИМЕНИТЬ
      </v-btn>
      <a class="text-10 mt-3" @click="resetFilter">СБРОСИТЬ ФИЛЬТР</a>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { BuildingState } from '@/store/types';
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      rooms: [] as Array<number>,
      floor: [1, 99] as Array<number>,
      minFloor: 1 as number,
      maxFloor: 99 as number,
      square: [1, 99] as Array<number>,
      minSquare: 1 as number,
      maxSquare: 99 as number,
      price: [990000, 99000000] as Array<number>,
      minPrice: 990000 as number,
      maxPrice: 9900000 as number,
      buildings: [] as Array<BuildingState>,
      filteredBuildings: [] as Array<BuildingState>,
    };
  },
  async mounted() {
    await this.$store.dispatch('loadBuildings');
    this.buildings = this.$store.getters.getBuildings;
  },
  methods: {
    filterBuildings(): void {
      this.filteredBuildings = this.buildings.filter(
        // eslint-disable-next-line eqeqeq
        (b) => b.rooms == this.rooms.find((r) => r == b.rooms)
        && b.floor >= this.floor[0]
        && b.floor <= this.floor[1]
        && b.square >= this.square[0]
        && b.square <= this.square[1]
        && b.price >= this.price[0]
        && b.price <= this.price[1],
      );
    },
    applyFilter(): void {
      this.$store.commit('setBuildings', this.filteredBuildings);
    },
    resetFilter(): void {
      this.$store.commit('setBuildings', this.buildings);
      this.rooms = [];
      this.floor = [1, 99];
      this.square = [1, 99];
      this.price = [1000000, 10000000];
      this.filteredBuildings = [];
    },
  },
});
</script>
