<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
    </v-app-bar>

    <v-main>
      <h2>Hello</h2>
    </v-main>
  </v-app>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'App',

  components: {
    
  },
  methods: {
    play() {

    }
  },
  data: () => ({
    //
  }),
  computed: {
    ...mapState(['playing, barLength, rhythm'])
  }
};
</script>
