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
      <v-btn>ПРИМЕНИТЬ</v-btn>
      <v-btn plain>СБРОСИТЬ ФИЛЬТР</v-btn>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { BuildingState } from '@/store/types';
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      rooms: [0, 1, 2, 3] as Array<number>,
      floor: [1, 99] as Array<number>,
      minFloor: 1 as number,
      maxFloor: 99 as number,
      square: [99, 999] as Array<number>,
      minSquare: 99 as number,
      maxSquare: 999 as number,
      price: [9.9, 99.9] as Array<number>,
      minPrice: 9.9 as number,
      maxPrice: 99.9 as number,
    };
  },
  computed: {
    buildings(): Array<BuildingState> {
      return this.$store.getters.getBuildings;
    },
  },
});
</script>
