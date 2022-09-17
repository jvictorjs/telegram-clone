const AccountDetails = {
  name: "AccountDetails",
  template: `
    <v-dialog width="320">
        <template v-slot:activator="{ on, attrs }">
            <v-sheet class="elevation-0 transparent d-flex align-end justify-center py-1">
                <v-avatar class="mx-1 transparent elevation-2 rounded-circle d-flex align-center justify-center" width="52" height="52" v-bind="attrs" v-on="on"
                    v-ripple>
                    <v-sheet class="d-flex flex-column align-center justify-center elevation-0 rounded-circle" width="100%" height="100%">
                        <v-img :src="'./img/profile/sm_'+account.img_src" transition="fade-transition" />
                    </v-sheet>
                </v-avatar>
            </v-sheet>
        </template>
        <template>
            <v-card class="white">
                <v-sheet class="d-flex flex-column align-center justify-center elevation-2" width="320" height="320">
                    <v-img :src="'./img/profile/'+account.img_src" transition="scale-transition" width="100%" />
                </v-sheet>
                <v-sheet class="white pa-1">
                    <v-hover v-slot="{ hover }">
                        <a :href="'https://'+account.url" target="_blank">
                            <v-sheet :class="'py-2 my-1 rounded-lg d-flex flex-row'  + (hover ? ' grey lighten-2 ' : '')" v-ripple>
                                <v-sheet class="d-flex flex-column justify-center mx-5 transparent">
                                    <v-icon color="grey" size="33">mdi-web</v-icon>
                                </v-sheet>
                                <v-sheet class="d-flex flex-column justify-center transparent">
                                    <h3>{{account.url}}</h3>
                                    <h5 class="grey--text">website </h5>
                                </v-sheet>
                            </v-sheet>
                        </a>
                    </v-hover>
                    <v-hover v-slot="{ hover }">
                        <a :href="'https://twitter.com/'+account.tw" target="_blank">
                            <v-sheet :class="'py-2 my-1 rounded-lg d-flex flex-row'  + (hover ? ' grey lighten-2 ' : '')" v-ripple>
                                <v-sheet class="d-flex flex-column justify-center mx-5 transparent">
                                    <v-icon color="grey" size="33">mdi-twitter</v-icon>
                                </v-sheet>
                                <v-sheet class="d-flex flex-column justify-center transparent">
                                    <h3>@{{account.tw}}</h3>
                                    <h5 class="grey--text">twitter</h5>
                                </v-sheet>
                            </v-sheet>
                        </a>
                    </v-hover>
                </v-sheet>
            </v-card>
        </template>
    </v-dialog>
    `,
  props: ["account"],
  data() {
    return {};
  },
};

export { AccountDetails };
