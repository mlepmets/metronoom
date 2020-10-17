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
      <v-btn @click="play">Play metronome</v-btn>
      <!-- <v-btn @click="stop">Stop metronome</v-btn> -->
      <v-btn @click="playTest">Play TEST metronome</v-btn>
      <v-btn @click="stopTest">Stop TEST metronome</v-btn>
    </v-main>
  </v-app>
</template>

<script>
import axios from 'axios';
import { mapState } from 'vuex';
export default {
  name: 'App',
  components: {
    
  },
  methods: {
    play() {
      // console.log(this);
      if (!this.audioCtx) {
        try {
          this.audioCtx = new AudioContext();
          this.getArrayBuffer('normal')
            .then((arrayBuffer) => {
              this.audioCtx.decodeAudioData(arrayBuffer)
              .then((audioBuffer) =>{
                console.log(audioBuffer)
                this.normalClickBuffer = audioBuffer;
                console.log(this.$data.normalClickBuffer);
                var source = this.audioCtx.createBufferSource();
                source.buffer = this.normalClickBuffer;
                source.connect(this.audioCtx.destination);
                source.start(0);
              });
            });
        } catch (error) {
          console.log(error);
        }
      }
    },
    playTest() {
      this.$store.dispatch('setPlayingStatus', true);
      let delay = 1000;
      setInterval(() => {
        if (this.playing) {
          this.normalSoundTest.play();
        }
      }, delay);
    },
    stopTest() {
      this.$store.dispatch('setPlayingStatus', false);
    },
    async getArrayBuffer(fileName) {
      const response = await axios({
        url: `http://localhost:8080/sounds/${fileName}.wav`,
        method: 'GET',
        responseType: 'arraybuffer',
      });
      return response.data;
    },
  },
  data: function() {
    return {
        // Variables for sound buffers;
      normalClickBuffer: '',
      // Create Web Audio context object
      //emphasisClickBuffer: '',
      // Variables for TEST sounds;
      normalSoundTest: new Audio('/sounds/normal.wav'),
    }
  },
  computed: mapState(['playing', 'barLength', 'rhythm']),
};
</script>
