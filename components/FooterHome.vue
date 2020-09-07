<template>
  <v-footer
    app
    class="grey--text lighten-5"
    absolute
  >
    <v-container>
      <v-row
        class="mb-2 grey--text lighten-5"
      >
        <v-col md="4" sm="4" cols="6">
          <div class="mb-6">
            <v-img
              src="/logo.png"
              height="20px"
              width="100px"
            />
          </div>
          <div class="text-caption">
            1717 Harrison St. San Francisco, <br>CA94103, USA
          </div>
        </v-col>
        <v-col md="2" sm="4" cols="6">
          <div class="font-weight-bold text-body-2 mb-4">
            MAIN MENU
          </div>
          <div class="footer-link text-body-2 mb-2">
            <nuxt-link to="/">
              Home
            </nuxt-link>
          </div>
          <div class="footer-link text-body-2 mb-2">
            About
          </div>
          <div class="footer-link text-body-2 mb-2">
            Shop
          </div>
          <div class="footer-link text-body-2 mb-2">
            Help
          </div>
        </v-col>
        <v-col md="2" sm="4" cols="6">
          <div class="font-weight-bold text-body-2 mb-4">
            COMPANY
          </div>
          <div class="footer-link text-body-2 mb-2">
            The Company
          </div>
          <div class="footer-link text-body-2 mb-2">
            Careers
          </div>
          <div class="footer-link text-body-2 mb-2">
            Press
          </div>
        </v-col>
        <v-col md="2" sm="4" cols="6">
          <div class="font-weight-bold text-body-2 mb-4">
            DISCOVER
          </div>
          <div class="footer-link text-body-2 mb-2">
            The Team
          </div>
          <div class="footer-link text-body-2 mb-2">
            Our History
          </div>
          <div class="footer-link text-body-2 mb-2">
            Brand Motto
          </div>
        </v-col>
        <v-col md="2" sm="4" cols="6">
          <div class="font-weight-bold text-body-2 mb-4">
            FIND US ON
          </div>
          <div class="footer-link text-body-2 mb-2">
            <v-icon small class="mr-2">
              mdi-facebook
            </v-icon>Facebook
          </div>
          <div class="footer-link text-body-2 mb-2">
            <v-icon small class="mr-2">
              mdi-twitter
            </v-icon>Twitter
          </div>
          <div class="footer-link text-body-2 mb-2">
            <v-icon small class="mr-2">
              mdi-instagram
            </v-icon>Instagram
          </div>
        </v-col>
      </v-row>
      <v-divider />
      <v-row class="mt-2">
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
