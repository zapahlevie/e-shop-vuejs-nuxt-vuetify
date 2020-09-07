<template>
  <div>
    <v-layout
      justify-center
      align-center
      column
      class="mt-16 mb-16"
    >
      <v-flex>
        <h1>IT'S NEW &amp; IT'S NOW</h1>
      </v-flex>
      <v-flex>
        <h3>Available at E-Store Online and Offline Stores</h3>
      </v-flex>
    </v-layout>

    <v-carousel
      cycle
      height="350"
      interval="3000"
      progress
      hide-delimiters
      show-arrows-on-hover
    >
      <v-carousel-item
        v-for="(item, i) in items"
        :key="'carousel' + i"
      >
        <nuxt-link :to="{ path: 'product', query: { product_id: item.id }}">
          <v-img
            contain
            :src="items[i].image"
            height="350px"
          />
        </nuxt-link>
      </v-carousel-item>
    </v-carousel>

    <v-row align="center" justify="center" class="mt-10 mb-10">
      <v-btn class="red">
        SHOP NOW
      </v-btn>
    </v-row>

    <v-divider id="section-shop" />

    <v-row v-if="items && items.length > 0">
      <v-col
        v-for="(item, i) in items"
        :key="'item' + i"
        cols="4"
      >
        <nuxt-link :to="{ path: 'product', query: { product_id: item.id }}">
          <div>
            <v-card outlined>
              <v-img
                contain
                :src="items[i].image"
                height="200px"
              />
            </v-card>
            <v-row class="mt-2">
              <v-col md="6" cols="12">
                <div class="grey--text text-subtitle-2">
                  <span v-text="items[i].title" />
                </div>

                <div class="grey--text text-subtitle-2">
                  <span class="red--text" style="white-space:pre" v-text="'Rp. ' + Number(items[i].price).toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')" />
                </div>
              </v-col>
              <v-col md="6" cols="12">
                <span style="float:right">
                  <v-icon v-for="n in items[i].rating" :key="'stared' + n" class="red--text ml-1">
                    mdi-star
                  </v-icon><v-icon v-for="n in ((5 - items[i].rating) || 0)" :key="'unstarred' + n" class="ml-1">
                    mdi-star
                  </v-icon>
                </span>
              </v-col>
            </v-row>
          </div>
        </nuxt-link>
      </v-col>
    </v-row>

    <v-layout
      v-else
      justify-center
      align-center
      column
      class="mt-10 mb-10"
    >
      <v-flex>
        <h2>
          Sorry, no items match your search.
        </h2>
      </v-flex>
    </v-layout>

    <v-divider id="section-about" />

    <v-layout
      justify-center
      align-center
      column
      class="mt-16 mb-16"
    >
      <v-flex>
        <h2 class="mb-10">
          About Us
        </h2>
      </v-flex>
      <v-flex class="pl-md-16 pr-md-16">
        <div class="text-body-1">
          Established in 2020, E-Shop. has built its foundation on good quality and innovative design.
        </div>
      </v-flex>
      <v-flex class="pl-md-16 pr-md-16">
        <div class="text-body-1">
          We believe in seeking new talents and connecting with likeminded individuals that share these values.
        </div>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      loading: true,
      filterValue: '',
      items: []
    }
  },
  computed: {
    todos () {
      return this.$store.state.todos.list
    }
  },
  mounted () {
    axios
      .get('http://localhost:8000/items')
      .then((response) => {
        this.items = response.data
        this.loading = false
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>

<style>
  .done {
    text-decoration: line-through;
  }
</style>
