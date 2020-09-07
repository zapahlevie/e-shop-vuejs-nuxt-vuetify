<template>
  <div>
    <v-app-bar app>
      <v-app-bar flat app class="container pa-0">
        <v-app-bar-nav-icon class="d-flex d-md-none" @click.stop="drawer = !drawer" />
        <v-toolbar-title class="pl-0 mr-10 d-none d-sm-flex">
          <nuxt-link to="/">
            <v-img
              src="/logo.png"
              height="20px"
              width="100px"
            />
          </nuxt-link>
        </v-toolbar-title>
        <v-text-field
          append-icon="mdi-magnify"
          solo
          hide-details
          single-line
          placeholder="Search"
        />
        <v-spacer />
        <div class="d-none d-md-flex">
          <v-btn depressed to="/">
            Home
          </v-btn>
          <v-divider vertical />
          <v-btn depressed>
            About
          </v-btn>
          <v-divider vertical />

          <v-btn depressed>
            Shop
          </v-btn>
          <v-divider vertical />
          <v-btn depressed>
            Help
          </v-btn>
        </div>
        <div>
          <v-btn icon to="/cart">
            <v-badge
              color="red"
              :content="cartItems.length || '0'"
            >
              <v-icon>mdi-cart</v-icon>
            </v-badge>
          </v-btn>
        </div>
      </v-app-bar>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      class="d-flex d-md-none"
    >
      <v-list class="mt-14">
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>

export default {
  data () {
    return {
      drawer: false,
      items: [
        {
          icon: 'mdi-home',
          title: 'Home',
          to: '/'
        },
        {
          icon: 'mdi-information-outline',
          title: 'About',
          to: ''
        },
        {
          icon: 'mdi-shopping',
          title: 'Shop',
          to: ''
        },
        {
          icon: 'mdi-help',
          title: 'Help',
          to: ''
        }
      ]
    }
  },
  computed: {
    cartItems () {
      return this.$store.state.cart.cartItems
    }
  }
}
</script>
