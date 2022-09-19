const MsgAudio = {
  name: "MsgAudio",
  template: `
    <v-sheet class=" pb-0 message-other rounded-lg rounded-bl-0 elevation-0" max-width="400" width="50%">
        <v-sheet v-if="isNameVisible"
            :class="'mx-2 mt-1 mb-n1 d-flex align-self-start rounded-lg transparent font-weight-bold text--lighten-1 ' + account.fontColor+'--text'">
            {{account.name}}
        </v-sheet>
        <v-sheet class="mx-2 my-1 elevation-0 rounded-lg">
            <audio style="display: none;" controls id="audio-player" :src="'./audio/'+message.audio_src" type="audio/mp3"></audio>
            <v-sheet class="d-flex flex-row elevation-0">
                <v-sheet class="transparent d-flex align-end justify-center py-1">
                    <v-avatar class="mx-1 telegram-color elevation-2 rounded-circle d-flex align-center justify-center" width="52" height="52" v-ripple>
                        <v-icon v-if="isAudioPlaying" dark size="33" @click="actionPause"> mdi-pause </v-icon>
                        <v-icon v-else dark size="33" @click="actionPlay"> mdi-play </v-icon>
                    </v-avatar>
                </v-sheet>
                <v-sheet class="d-flex flex-column justify-space-between elevation-0" width="100%">
                    <v-sheet class="my-auto pl-2 pt-3 mx-auto elevation-0" width="100%" height="5">
                        <v-progress-linear class="rounded-lg" :value="audioProgress" height=5></v-progress-linear>
                    </v-sheet>
                    <span class="mx-2 text-subtitle-2 grey--text font-weight-bold">{{audioCurrentTime+' / '+audioDuration}}</span>
                </v-sheet>
            </v-sheet>
        </v-sheet>
        <v-sheet class="px-2 mt-1 transparent text-wrap" v-html="message.text"></v-sheet>
        <v-sheet class="d-flex flex-row transparent justify-end">
            <v-sheet
                :class="'mt-n1 mb-0 mr-1 d-flex flex-row align-center justify-center text-center transparent elevation-0 transparent text-caption font-weight-medium grey--text'"
                width="50">
                {{new Date(message.created_at).toString().substring(15,21)}}
            </v-sheet>
        </v-sheet>
    </v-sheet>
    `,
  props: ["account", "message", "i", "isNameVisible"],
  data() {
    return {
      audio: undefined,
      isAudioPlaying: false,
      audioDuration: "0:00",
      audioCurrentTime: "0:00",
      audioProgress: 0,
    };
  },
  mounted() {
    //console.warn("audio mounted");
    this.setAudioEventHandlers();
  },
  methods: {
    setAudioEventHandlers() {
      if (!this.audio) {
        // STACKOVERFLOW https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/loadeddata_event
        this.audio = document.getElementById("audio-player");
        this.audio.onloadeddata = (event) => {
          this.audioDuration = "0:" + (this.audio.duration < 10 ? "0" : "") + Math.floor(this.audio.duration);
          //console.log("loadeddata | " + this.audioDuration);
        };
        this.audio.ontimeupdate = (event) => {
          this.audioCurrentTime = "0:" + (this.audio.currentTime < 10 ? "0" : "") + Math.floor(this.audio.currentTime);
          this.audioProgress = (this.audio.currentTime / this.audio.duration) * 100;
        };
        this.audio.onpause = (event) => {
          console.log("pause: " + this.audioCurrentTime);
          this.isAudioPlaying = false;
        };
        this.audio.onplay = (event) => {
          console.log("play: " + this.audioCurrentTime);
        };
        this.audio.onended = (event) => {
          console.log("ended: " + this.audio.currentTime);
          this.isAudioPlaying = false;
        };
      }
    },
    actionPlay() {
      this.audio.play();
      this.isAudioPlaying = true;
    },
    actionPause() {
      this.audio.pause();
    },
  },
};

export { MsgAudio };
