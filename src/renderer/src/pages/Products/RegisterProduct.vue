<template>
  <v-container fluid>
    <div class="w-100 px-6">
      <v-row>
        <v-col
          cols="12"
          sm="4">
          <v-text-field
            label="Código"
            v-model="form.code"
            :rules="[rules.required]"
            variant="outlined"
          />
        </v-col>
        <v-col
          cols="12"
          sm="8">
          <v-text-field
            label="Descrição"
            v-model="form.description"
            :rules="[rules.required]"
            variant="outlined"
          />
        </v-col>
        <v-col
          cols="12"
          sm="2">
          <v-select
            v-model="form.type"
            :items="['UN', 'KG']"
            :rules="[rules.required]"
            label="UN"
            variant="outlined"
          />
        </v-col>
        <v-col
          cols="12"
          sm="2">
          <v-text-field
            label="Preço de compra"
            v-model="form.price"
            :rules="[rules.required]"
            variant="outlined"
          />
        </v-col>
        <v-col
          cols="12"
          sm="2">
          <v-text-field
            label="Margem/Markup"
            v-model="form.markup"
            :rules="[rules.required]"
            variant="outlined"
          />
        </v-col>
        <v-col
          cols="12"
          sm="2">
          <v-text-field
            label="Lucro (vlr venda)"
            v-model="form.gain"
            :rules="[rules.required]"
            variant="outlined"
          />
        </v-col>
        <v-col
          cols="12"
          sm="2">
          <v-text-field
            label="Preço de venda"
            v-model="form.salePrice"
            :rules="[rules.required]"
            variant="outlined"
          />
        </v-col>
        <v-col
          cols="12"
          sm="2">
          <v-text-field
            label="Preço aPrazo/Atacado"
            v-model="form.deadlinePrice"
            :rules="[rules.required]"
            variant="outlined"
          />
        </v-col>
        <v-col
          cols="12"
          sm="3">
          <v-select
            v-model="form.group"
            :items="['grupo1', 'grupo2']"
            :rules="[rules.required]"
            label="Grupo"
            variant="outlined"
          />
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    form: {},
    rules: {
      required: v => !!v || 'Campo obrigatório'
    }
  })
}
</script>

<style>

</style>
