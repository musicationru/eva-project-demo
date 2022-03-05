<template>
      <v-app>
        <v-card>
        </v-card>

        <v-main>
          <router-view/>
        </v-main>
      </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',

  data: () => ({
  }),
});
</script>
<style lang="scss">
  #app {
    height: 1772px;
    background: #2F2E2D !important;
  }
</style>
