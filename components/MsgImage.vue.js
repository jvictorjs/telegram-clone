const MsgImage = {
  name: "MsgImage",
  template: `
    <v-dialog v-model="dialog" overlay-opacity="1" fullscreen>
        <template v-slot:activator="{ on, attrs }">
            <v-sheet class=" pb-0 message-other rounded-lg rounded-bl-0 elevation-0" max-width="400" width="50%">
                <v-sheet v-if="isNameVisible"
                    :class="'mx-2 mt-1 mb-n1 d-flex align-self-start rounded-lg transparent font-weight-bold text--lighten-1 ' + account.fontColor+'--text'">
                    {{account.name}}
                </v-sheet>
                <v-sheet class="ma-2 elevation-0 rounded-lg" v-bind="attrs" v-on="on" >
                    <v-img :src="'./img/profile/'+message.img_src" class="rounded-lg" transition="scale-transition" />
                </v-sheet>
                <v-sheet class="px-2 mt-n1 transparent text-pre-wrap">{{i}} - <strong v-if="message.text.includes('@jvictorjs ')"
                        class="blue--text">@jvictorjs</strong>{{message.text.replace('@jvictorjs ',' ')}}</v-sheet>
                <v-sheet class="d-flex flex-row transparent justify-end">
                    <v-sheet
                        :class="'mt-n1 mb-0 mr-1 d-flex flex-row align-center justify-center text-center transparent elevation-0 transparent text-caption font-weight-medium grey--text'"
                        width="50">
                        {{new Date(message.created_at).toString().substring(15,21)}}
                    </v-sheet>
                </v-sheet>
            </v-sheet>
        </template>
        <v-card class="" color="rgb(0, 0, 0, 0.87)">
            <v-card-text class=" transparent" height="100%">
                <v-sheet class="pt-13 d-flex flex-column align-center justify-center transparent" :height="$vuetify.breakpoint.height -30"
                    @click="dialog = false">
                    <v-sheet class="d-flex flex-column align-center justify-center transparent relative" width="100%">
                        <v-img :src="'./img/profile/'+message.img_src" transition="scale-transition" />
                    </v-sheet>
                    <v-sheet class="d-flex flex-column align-center transparent white--text pa-2">
                        <v-sheet class="text-center white--text transparent" width="500">
                            {{message.text}}
                        </v-sheet>
                    </v-sheet>
                </v-sheet>
            </v-card-text>
        </v-card>
    </v-dialog>
    `,
  props: ["account", "message", "i", "isNameVisible"],
  data() {
    return {
      dialog: false,
    };
  },
};

export { MsgImage };
