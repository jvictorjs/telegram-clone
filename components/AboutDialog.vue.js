const AboutDialog = {
  name: "AboutDialog",
  template: `
  <v-dialog v-model="dialog" width="500">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="grey lighten-3" v-bind="attrs" small v-on="on"> ABOUT </v-btn>
    </template>
    <v-card>
      <v-card-title class="text-h5 grey lighten-2"> About this app</v-card-title>

      <v-card-text>
        <v-sheet class="mt-5 mx-5 text-wrap text-center text-caption text--secondary">
          Responsive web page built from scratch with <b>VUE.JS</b>, using <b>JAVASCRIPT</b>, <b>HTML</b> and <b>CSS</b>. In addition, to faster and beauty
          design I used <b>VUETIFY</b> UI library and some <b>MATERIAL DESIGN ICONS</b>. Hosted in a Linux <b>UBUNTU</b> dedicated server at
          <b>DIGITALOCEAN</b> cloud infraestructure. Version control by <b>GIT</b> and <b>GITHUB</b>. Reverse proxy with <b>NGINX</b>.
          <b>SSL</b> certification with <b>CERTBOT</b>. | Screen res:
          {{ $vuetify.breakpoint.width }}x{{ $vuetify.breakpoint.height }} <br />
        </v-sheet>
        <v-sheet class="mt-3 text-caption text-center"> 2022 <a href="https://github.com/jvictorjs" target="_blank">@jvictorjs</a> </v-sheet>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="dialog = false"> Close </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
  `,
  data() {
    return {
      dialog: false,
    };
  },
};

export { AboutDialog };