<template>
  <v-app dark>
    <header-home />
    <v-main>
      <v-container>
        <nuxt :key="$route.fullPath" />
      </v-container>
    </v-main>
    <footer-home v-if="$nuxt.$route.path == '/'" />
    <footer-simple v-else />
  </v-app>
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
          to: '#home'
        },
        {
          icon: 'mdi-information-outline',
          title: 'About',
          to: '#about'
        },
        {
          icon: 'mdi-shopping',
          title: 'Shop',
          to: '#shop'
        },
        {
          icon: 'mdi-help',
          title: 'Help',
          to: '#help'
        }
      ]
    }
  }
}
</script>
