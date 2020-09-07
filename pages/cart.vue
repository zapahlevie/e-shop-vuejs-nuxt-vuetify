<template>
  <div>
    <div v-if="cartItems.length > 0" class="grey darken-3 pa-5">
      <v-row class="d-none d-md-flex pl-5 pr-5 pt-5" style="text-align:center">
        <v-col cols="4">
          <span class="text-h6">1. Shopping Cart</span>
        </v-col>
        <v-col cols="4">
          <span class="text-h6">2. Shipping Details</span>
        </v-col>
        <v-col cols="4">
          <span class="text-h6">3. Payment Options</span>
        </v-col>
      </v-row>
      <v-row class="d-none d-md-flex pl-5 pr-5 pb-5">
        <v-col>
          <v-progress-linear
            value="33"
            color="red"
          />
        </v-col>
      </v-row>
      <v-row class="d-flex d-md-none">
        <v-col>
          <span class="text-h6">Shopping Cart</span>
        </v-col>
      </v-row>
    </div>

    <v-row v-if="cartItems.length > 0" class="mt-10">
      <v-col md="8" cols="12">
        <div class="text-h5">
          Shopping Cart
        </div>
        <v-divider class="mt-5 mb-10" />
        <v-row v-for="(cartItem, i) in cartItems" :key="'cartItem' + i">
          <v-col>
            <v-row>
              <v-col sm="2" cols="3">
                <v-card outlined>
                  <v-img
                    :src="cartItem.item.image"
                  />
                </v-card>
              </v-col>
              <v-col sm="7" cols="9">
                <div class="mb-2" v-text="cartItem.item.title" />
                <div class="mb-2 short-desc grey--text" v-text="cartItem.item.desc" />
                <div class="red--text text-body-1" style="white-space:pre" v-text="'Rp. ' + Number(cartItem.item.price).toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')" />
              </v-col>
              <v-col sm="3" cols="12">
                <v-text-field
                  v-model="cartItem.quantity"
                  dense
                  readonly
                  class="shrink"
                  type="number"
                  append-outer-icon="mdi-plus-circle"
                  prepend-icon="mdi-minus-circle"
                  @click:append-outer="increment(cartItem.item)"
                  @click:prepend="decrement(cartItem.item)"
                />
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>

      <v-col md="4" cols="12">
        <div class="text-h5">
          Summary
        </div>
        <v-divider class="mt-5 mb-10" />
        <v-text-field placeholder="HAVE A VOUCHER?" append-outer-icon="mdi-arrow-down-drop-circle" />
        <v-divider />
        <v-row>
          <v-col cols="4">
            <span>SUBTOTAL</span>
          </v-col>
          <v-col cols="8">
            <span style="float:right" v-text="formatCurrency(getSubtotal())" />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4">
            <span>TAXES</span>
          </v-col>
          <v-col cols="8">
            <span style="float:right" v-text="formatCurrency(getTaxes())" />
          </v-col>
        </v-row>
        <v-divider class="mt-5 mb-5" />
        <v-row>
          <v-col cols="4">
            <div class="font-weight-bold text-h6">
              TOTAL
            </div>
          </v-col>
          <v-col cols="8">
            <div class="font-weight-bold text-h6" style="float:right" v-text="formatCurrency(getTotal())" />
          </v-col>
        </v-row>
      </v-col>

      <v-col>
        <v-divider class="mt-10 mb-10" />

        <nuxt-link to="/shipping">
          <v-btn large width="150px" class="red">
            NEXT
          </v-btn>
        </nuxt-link>
        <nuxt-link to="/">
          <v-btn large width="150px" class="grey darken-3 ml-2">
            CANCEL
          </v-btn>
        </nuxt-link>
      </v-col>
    </v-row>

    <v-row v-else class="mt-10" style="text-align:center">
      <v-col>
        <div class="text-h5">
          No item to checkout, please go shopping!
        </div>
        <nuxt-link to="/">
          <v-btn large color="red" class="mt-10">
            SHOP NOW
          </v-btn>
        </nuxt-link>
      </v-col>
    </v-row>
  </div>
</template>

<script>

export default {
  computed: {
    cartItems () {
      return this.$store.state.cart.cartItems
    }
  },
  methods: {
    increment (item) {
      this.$store.commit('cart/add', { id: item.id, item, quantity: 1 })
    },
    decrement (item) {
      this.$store.commit('cart/remove', { id: item.id, item, quantity: 1 })
    },
    getSubtotal () {
      let subtotal = 0
      const cartItems = this.$store.state.cart.cartItems
      cartItems.map((cartItem) => {
        subtotal = subtotal + (cartItem.quantity * cartItem.item.price)
      })

      return subtotal
    },
    getTaxes () {
      const subtotal = this.getSubtotal()

      return Number(0.1 * subtotal).toFixed(0)
    },
    getTotal () {
      const subtotal = this.getSubtotal()
      const taxes = this.getTaxes()

      return Number(subtotal) + Number(taxes)
    },
    formatCurrency (value) {
      return 'Rp. ' + Number(value).toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
  }
}
</script>

<style scoped>
.short-desc {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
