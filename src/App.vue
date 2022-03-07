<template>
      <v-app>
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
  $dark-background: #2F2E2D;
  $light-background: #F8F8F8;
  $dark-text: #2C323A;
  $accent: #70D24E;
  $body-font-family: 'Gotham Pro';
  $heading-font-family: 'Gotham Pro';

  %light-border {
    border: 1px solid #EBEBEB;
    box-sizing: border-box;
  }

  %gray-border {
    background: #FFFFFF !important;
    border: 1px solid #D8D8D8 !important;
    box-sizing: border-box;
    border-radius: 5px !important;
  }

  @font-face {
    font-family: 'Gotham Pro';
    src: local('Gotham Pro Medium'), local('Gotham-Pro-Medium'),
        url('assets/fonts/GothamPro-Medium.woff2') format('woff2'),
        url('assets/fonts/GothamPro-Medium.woff') format('woff'),
        url('assets/fonts/GothamPro-Medium.ttf') format('truetype');
    font-weight: 700;
    font-style: normal;
  }
  html {
    font-style: normal;
    font-weight: bold;
    font-size: 14px !important;
    line-height: 28px;
  }
  #app {
    font-family: $body-font-family;
    height: 1772px;
    background: $dark-background !important;
  }
  .main-wrapper {
    /* Rectangle */
    margin-top: 80px;
    height: 1612px;
    width: 95%;
    padding: 15px 15px 15px 15px;
    /* White */
    background: #FFFFFF;
    border-radius: 10px;
  }
  .light-wrapper {
    position: absolute;
    width: 93%;
    padding: 0 5vw 0 5vw;
    height: 1552px;
    background: #F8F8F8;
    border-radius: 10px;
  }
  .building {
      width: 270px;
      height: 365px;
      background: #FFFFFF;
      box-shadow: 0px 5px 20px rgba(86, 86, 86, 0.05);
      border-radius: 10px;
      &-wrapper {
        width: 250px;
        height: 250px;
        border-radius: 5px;
        @extend %light-border;
      }
      &-image {
        width: 188px;
        height: 230px;
      }
      &-number {
        width: 62px;
        height: 30px;
        float: right;
        border-radius: 0px 5px;
        @extend %light-border;
      }
  }
  .text {
    width: 61px;
    height: 28px;
    /* identical to box height, or 233% */
    color: $dark-text;
    &-gray {
      opacity: 0.5;
    }
    &-index {
      position: relative;
      font-size: 0.571rem;
      bottom: 4px;
    }
    &-12 {
      font-size: 0.857rem;
    }
    &-20 {
      font-size: 1.429rem;
    }
  }
  .toggle-button {
    width: 47px;
    height: 40px;
    @extend %gray-border;
  }
  .range-textarea {
    width: 80px;
    height: 40px;
    @extend %gray-border;
  }
</style>
