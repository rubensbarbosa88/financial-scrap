<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
  export default {
    created () {
      window.electron.ipcRenderer.on('navigate', this.navigateTo)
    },
    methods: {
      navigateTo (evt, name) {
        console.log(name)
        this.$router.replace({ name })
      }
    }
  }
</script>
