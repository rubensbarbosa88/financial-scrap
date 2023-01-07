<template>
  <v-container
    fluid
    class="h-100 d-flex align-center justify-center">
    <div class="w-100 px-6">
      <v-row>
        <v-col
          v-for="(card, index) in cards"
          :key="index"
          cols="12"
          sm="3">
          <v-btn
            block
            elevation="8"
            height="150"
            class="pa-10"
            :to="card.to"
            :color="card.color">
            <v-icon
              size="80"
              color="blue">
              {{ card.icon }}
            </v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  computed: {
    cards () {
      return [
        {
          name: 'Produtos',
          icon: 'mdi-dropbox',
          color: '#FAFAFA',
          to: { name: 'RegisterProducts' }
        }
      ]
    }
  }
}
</script>
