<template>
  <v-row>
    <v-col>
      <p class="text-12">КОМНАТЫ</p>

      <v-btn-toggle
        v-model="rooms"
        tile
        color="#70D24E"
        group
        class="d-flex justify-space-around align-center toggle-button-group"
        @change="filterBuildings()"
        >
        <v-btn class="toggle-button" value="0">S</v-btn>

        <v-btn class="toggle-button" value="1">1к</v-btn>

        <v-btn class="toggle-button" value="2">2к</v-btn>

        <v-btn class="toggle-button" value="3">3к</v-btn>
      </v-btn-toggle>
    </v-col>
    <v-col>
      <p class="text-12">ЭТАЖ</p>
      <v-range-slider
        v-model="floor"
        :max="maxFloor"
        :min="minFloor"
        hide-details
        class="align-center"
        @change="filterBuildings()"
        >
        <template v-slot:prepend>
          <v-text-field
            :value="floor[0]"
            class="range-textarea mt-0 pt-0"
            hide-details
            single-line
            type="number"
            style="width: 60px"
            @change="$set(floor, 0, $event)"
          ></v-text-field>
        </template>
        <template v-slot:append>
          <v-text-field
            :value="floor[1]"
            class="range-textarea mt-0 pt-0"
            hide-details
            single-line
            type="number"
            style="width: 60px"
            @change="$set(floor, 1, $event)"
          ></v-text-field>
        </template>
      </v-range-slider>
    </v-col>
    <v-col>
      <p class="text-12">ПЛОЩАДЬ</p>
      <v-range-slider
        v-model="square"
        :max="maxSquare"
        :min="minSquare"
        hide-details
        class="d-flex justify-space-around align-center"
        @change="filterBuildings()"
        >
        <template v-slot:prepend>
          <v-text-field
            :value="square[0]"
            class="range-textarea mt-0 pt-0"
            hide-details
            single-line
            type="number"
            style="width: 60px"
            @change="$set(square, 0, $event)"
          ></v-text-field>
        </template>
        <template v-slot:append>
          <v-text-field
            :value="square[1]"
            class="range-textarea mt-0 pt-0"
            hide-details
            single-line
            type="number"
            style="width: 60px"
            @change="$set(square, 1, $event)"
          ></v-text-field>
        </template>
      </v-range-slider>
    </v-col>
    <v-col>
      <p class="text-12">СТОИМОСТЬ, млн. р.</p>
      <v-range-slider
        v-model="price"
        :max="maxPrice"
        :min="minPrice"
        hide-details
        class="align-center"
        @change="filterBuildings()"
        >
        <template v-slot:prepend>
          <v-text-field
            :value="price[0]"
            class="range-textarea mt-0 pt-0"
            hide-details
            single-line
            type="number"
            style="width: 60px"
            @change="$set(price, 0, $event)"
          ></v-text-field>
        </template>
        <template v-slot:append>
          <v-text-field
            :value="price[1]"
            class="range-textarea mt-0 pt-0"
            hide-details
            single-line
            type="number"
            style="width: 60px"
            @change="$set(price, 1, $event)"
          ></v-text-field>
        </template>
      </v-range-slider>
    </v-col>
    <v-col>
      <v-btn @click="applyFilter">ПРИМЕНИТЬ</v-btn>
      <v-btn plain @click="resetFilter">СБРОСИТЬ ФИЛЬТР</v-btn>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { BuildingState } from '@/store/types';
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      rooms: 0 as number,
      floor: [1, 99] as Array<number>,
      minFloor: 1 as number,
      maxFloor: 99 as number,
      square: [1, 99] as Array<number>,
      minSquare: 1 as number,
      maxSquare: 99 as number,
      price: [1000000, 10000000] as Array<number>,
      minPrice: 1000000 as number,
      maxPrice: 10000000 as number,
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
        (b) => b.rooms == this.rooms
        && b.floor >= this.floor[0]
        && b.floor <= this.floor[1]
        && b.square >= this.square[0]
        && b.square <= this.square[1]
        && b.price >= this.price[0]
        && b.price <= this.price[1],
      );
      console.log(this.filteredBuildings);
    },
    applyFilter(): void {
      this.$store.commit('setBuildings', this.filteredBuildings);
    },
    resetFilter(): void {
      this.$store.commit('setBuildings', this.buildings);
      this.rooms = 0;
      this.floor = [1, 99];
      this.square = [1, 99];
      this.price = [1000000, 10000000];
    },
  },
});
</script>
