<template>
  <div>
    <v-row>
      <v-col md="6" cols="12">
        <v-card outlined>
          <v-img
            contain
            height="450px"
            :src="item.image"
          />
        </v-card>
      </v-col>
      <v-col md="6" cols="12" class="pa-10">
        <div class="text-h4" v-text="item.title" />
        <div class="mt-2">
          <v-row class="mt-2">
            <v-col md="4" sm="6" xs="12">
              <span>
                <v-icon v-for="n in item.rating" :key="'ratingitemStarred' + n" class="red--text mr-1">
                  mdi-star
                </v-icon><v-icon v-for="n in ((5 - item.rating) || 0)" :key="'ratingitemUnstarred' +n" class="mr-1">
                  mdi-star
                </v-icon>
              </span>
            </v-col>
            <v-col md="8" sm="6" xs="12">
              <span style="font-size:15pt" v-text="item.reviews + ' reviews'" />
            </v-col>
          </v-row>
        </div>

        <v-divider class="mt-2 mb-4" />

        <div>
          <v-row class="mt-2">
            <v-col md="8" sm="12" xs="12">
              <span class="red--text text-h4" style="white-space:pre" v-text="'Rp. ' + Number(item.price).toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')" />
            </v-col>
            <v-col md="4" sm="12" xs="12">
              <v-text-field
                v-model="quantity"
                dense
                class="shrink"
                type="number"
                label="Quantity"
                append-outer-icon="mdi-plus-circle"
                prepend-icon="mdi-minus-circle"
                @click:append-outer="increment"
                @click:prepend="decrement"
              />
            </v-col>
          </v-row>
        </div>

        <v-divider class="mt-4 mb-4" />

        <div>
          <span class="text-ceaption" v-text="item.desc" />
        </div>
        <div>
          <v-btn class="red mt-4" @click="addTocart">
            Add To Cart
          </v-btn>
        </div>
      </v-col>
    </v-row>

    <v-divider class="mt-10 mb-10" />

    <div class="text-h4 mb-4" style="text-align:center">
      Similar Products
    </div>

    <v-row>
      <v-col v-for="(similarItem, index) in similarItems" :key="'similarItem' + index" md="4" cols="12">
        <nuxt-link :to="{ path: 'product', query: { product_id: similarItem.id }}">
          <v-row>
            <v-col cols="6">
              <v-card>
                <v-img
                  contain
                  height="150px"
                  :src="similarItem.image"
                />
              </v-card>
            </v-col>
            <v-col cols="6">
              <div style="font-size:10pt" v-text="similarItem.title" />
              <div>
                <span>
                  <v-icon v-for="n in similarItem.rating" :key="'ratingsimilarStarred' + n" x-small class="red--text mr-1">
                    mdi-star
                  </v-icon><v-icon v-for="n in ((5 - similarItem.rating) || 0)" :key="'ratingsimilarUnstarred' + n" x-small class="mr-1">
                    mdi-star
                  </v-icon>
                </span>
              </div>
              <div>
                <span class="red--text text-caption" style="white-space:pre" v-text="'Rp. ' + Number(item.price).toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')" />
              </div>
            </v-col>
          </v-row>
        </nuxt-link>
      </v-col>
    </v-row>

    <v-divider class="mt-10 mb-10" />

    <div class="text-h4 mb-4">
      Reviews
    </div>

    <v-row v-for="(itemReview, index) in itemReviews" :key="'review' + index" class="mb-10">
      <v-col md="4" cols="12">
        <v-row>
          <v-col cols="3">
            <v-avatar
              max-width="60px"
            >
              <img
                v-if="itemReview.profile"
                alt="Avatar"
                :src="itemReview.profile"
              >
              <img
                v-else
                alt="Avatar"
                src="/user.jpg"
              >
            </v-avatar>
          </v-col>
          <v-col cols="9">
            <div class="pl-2" v-text="itemReview.name" />
            <div class="pl-2" v-text="new Intl.DateTimeFormat('en', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(itemReview.date))" />
            <div class="pl-2">
              <span>
                <v-icon v-for="n in itemReview.rating" :key="'reviewStarred' + n" x-small class="red--text mr-1">
                  mdi-star
                </v-icon><v-icon v-for="n in ((5 - itemReview.rating) || 0)" :key="'reviewUnstarred' + n" x-small class="mr-1">
                  mdi-star
                </v-icon>
              </span>
            </div>
          </v-col>
        </v-row>
      </v-col>
      <v-col md="8" cols="12">
        <v-row>
          <v-col>
            <div v-text="itemReview.comment" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-snackbar
      v-model="snackbar"
      color="green"
    >
      Item added to cart
      <template v-slot:action="{ attrs }">
        <v-btn
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  data () {
    return {
      loading: true,
      loadingSimilar: true,
      loadingReview: true,
      item: {},
      similarItems: [],
      itemReviews: [],
      quantity: 1,
      snackbar: false
    }
  },
  mounted () {
    const productId = this.$route.query.product_id

    axios
      .get('http://localhost:8000/items/' + productId)
      .then((response) => {
        this.item = response.data
        this.loading = false
      })
      .catch((error) => {
        console.log(error)
      })
    axios
      .get('http://localhost:8000/similarItems')
      .then((response) => {
        this.similarItems = response.data
        this.loadingSimilar = false
      })
      .catch((error) => {
        console.log(error)
      })
    axios
      .get('http://localhost:8000/reviews')
      .then((response) => {
        this.itemReviews = response.data
        this.loadingReview = false
      })
      .catch((error) => {
        console.log(error)
      })
  },
  methods: {
    increment () {
      this.quantity = parseInt(this.quantity, 10) + 1
    },
    decrement () {
      const current = parseInt(this.quantity, 10)

      if (current > 1) { this.quantity = current - 1 }
    },
    addTocart (e) {
      if (this.quantity > 0) {
        this.$store.commit('cart/add', { id: this.item.id, item: this.item, quantity: this.quantity })
        this.snackbar = true
      }
    }
  }
}
</script>
