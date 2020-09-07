<template>
  <v-footer
    app
    class="grey--text lighten-5"
    absolute
  >
    <v-container style="text-align:center">
      <v-row>
        <v-col class="pa-0 ma-0">
          <span class="footer-link text-body-2 ml-2 mr-2">
            <nuxt-link to="/">Home</nuxt-link>
          </span>
          <v-divider vertical />
          <span class="footer-link text-body-2 ml-2 mr-2">
            About
          </span>
          <span class="footer-link text-body-2 ml-2 mr-2">
            Shop
          </span>
          <span class="footer-link text-body-2 ml-2 mr-2">
            Help
          </span>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <span class="text-caption">Copyright © 2013 E-SHOP Inc. All rights reserved.</span>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<style scoped>
.footer-link {
  cursor: pointer;
  font-size: 12pt;
}
.footer-link:hover {
  color: #F44336;
  cursor: pointer;
}
</style>
