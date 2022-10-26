export { ACCOUNTS, CHATS, MESSAGES, JVICTOR_JS_TEXT_MENTION_HTML };

const JVICTOR_JS_TEXT_MENTION_HTML = '<a href="https://github.com/jvictorjs" target="_blank"><strong class="blue--text">@jvictorjs</strong></a>';

const parseDateToString = (date) => {
  const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return MONTHS[date.getMonth()] + " " + date.getDate();
};

const ACCOUNTS = [
  { id: 0, name: "test author", img_src: "blank.png", fontColor: "orange", url: "github.com/jvictorjs", tw: "jvictor_js" },
  { id: 1, name: "JVictor", img_src: "jvictorjs.jpg", fontColor: "blue", url: "github.com/jvictorjs", tw: "jvictor_js" },
  { id: 2, name: "Federal University of Pernambuco (UFPE)", img_src: "ufpe.png", fontColor: "green", url: "portal.cin.ufpe.br", tw: "CInUFPE" },
  {
    id: 3,
    name: "Brazil's Ministry of Economy",
    img_src: "ministryofeconomy.jpg",
    fontColor: "orange",
    url: "www.gov.br/economia",
    tw: "MinEconomia",
  },
];

const CHATS = [
  { id: 1, title: "private test chat 1", type: "private", img_type: "pic", img_src: "blank.png", unreadMsgs: true },
  { id: 2, title: "group test chat 2", type: "group", img_type: "icon", img_src: "mdi-account-multiple", unreadMsgs: true },
  { id: 3, title: "private test chat 3", type: "private", img_type: "icon", img_src: "mdi-account", unreadMsgs: true },
  { id: 4, title: "private test chat 4", type: "private", img_type: "pic", img_src: "blank.png", unreadMsgs: true },
  { id: 5, title: "JVictor", type: "private", img_type: "pic", img_src: "jvictorjs.jpg", unreadMsgs: true },
  { id: 6, title: "Experience", type: "group", img_type: "icon", img_src: "mdi-briefcase", unreadMsgs: true },
  { id: 7, title: "My Course", type: "group", img_type: "icon", img_src: "mdi-account-school", unreadMsgs: true }, // mdi-school mdi-account-school mdi-code-tags
  { id: 8, title: "Skills", type: "group", img_type: "icon", img_src: "mdi-code-tags", unreadMsgs: true }, // mdi-tool mdi-toolbox mdi-code-tags
  { id: 9, title: "Projects", type: "group", img_type: "icon", img_src: "mdi-monitor-cellphone", unreadMsgs: true }, // mdi-tool mdi-toolbox mdi-code-tags // monitor-cellphone
];

const MESSAGES = {
  1: [
    // "private test chat 1"
    { chat_id: 1, from: "service-msg", text: "Jul 07", created_at: new Date(new Date() - 530000) },
    { chat_id: 1, from: 0, text: "text1", created_at: new Date() - 500000 },
    {
      chat_id: 1,
      from: 0,
      img_src: "/profile/jvictorjs2.png",
      text: "image text test image text test image text test image text test image text test image text test",
      created_at: new Date(new Date() - 8000),
    },
    { chat_id: 1, from: 0, audio_src: "test_audio.ogg", text: "audio text test", created_at: new Date(new Date() - 7000) },
  ],
  2: [
    // "group test chat 2"
    { chat_id: 2, from: "service-msg", text: "Jul 07", created_at: new Date(new Date() - 530000) },
    { chat_id: 2, from: "service-msg", text: "JVictor added you", created_at: new Date(new Date() - 520000) },
    { chat_id: 2, from: "self", text: "text1", created_at: new Date(new Date() - 510000) },
    { chat_id: 2, from: "self", text: "text2", created_at: new Date(new Date() - 500000) },
    { chat_id: 2, from: "self", text: "text3", created_at: new Date(new Date() - 490000) },
    { chat_id: 2, from: "self", text: "text4", created_at: new Date(new Date() - 480000) },
    { chat_id: 2, from: "self", text: "text5", created_at: new Date(new Date() - 470000) },
    { chat_id: 2, from: "self", text: "text6", created_at: new Date(new Date() - 460000) },
    { chat_id: 2, from: "self", text: "text7", created_at: new Date(new Date() - 450000) },
    { chat_id: 2, from: "self", text: "text8", created_at: new Date(new Date() - 44000) },
    { chat_id: 2, from: "self", text: "text9", created_at: new Date(new Date() - 43000) },
    { chat_id: 2, from: "self", text: "text10", created_at: new Date(new Date() - 42000) },
    { chat_id: 2, from: "self", text: "text11", created_at: new Date(new Date() - 41000) },
    { chat_id: 2, from: "self", text: "text12", created_at: new Date(new Date() - 40000) },
    { chat_id: 2, from: "self", text: "text13", created_at: new Date(new Date() - 39000) },
    { chat_id: 2, from: 0, text: "text17", created_at: new Date(new Date() - 20000) },
    { chat_id: 2, from: "self", text: "text18", created_at: new Date(new Date() - 15000) },
    { chat_id: 2, from: 0, text: "text19", created_at: new Date(new Date() - 13000) },
    { chat_id: 2, from: "self", text: "text20 text20 text20", created_at: new Date(new Date() - 10000) },
    {
      chat_id: 2,
      from: 0,
      img_src: "/profile/jvictorjs2.png",
      text: `
      <i>image text test with HTML tags</i> 
      <br><strong>image text test with HTML tags</strong> 
      `,
      created_at: new Date(new Date() - 8000),
    },
    {
      chat_id: 2,
      from: 0,
      audio_src: "test_audio.ogg",
      text: `
    <i>audio text test with HTML tags</i> 
    <br><strong>audio text test with HTML tags</strong> 
    `,
      created_at: new Date(new Date() - 7000),
    },
  ],
  3: [
    // "private test chat 3"
    { chat_id: 3, from: "service-msg", text: "Jul 07", created_at: new Date(new Date() - 530000) },
    { chat_id: 3, from: "service-msg", text: "JVictor added you", created_at: new Date(new Date() - 520000) },
    { chat_id: 3, from: 0, text: "text3", created_at: new Date(new Date() - 10000) },
    { chat_id: 3, from: 0, text: "text3", created_at: new Date(new Date() - 10000) },
  ],
  4: [
    // "private test chat 4"
    { chat_id: 4, from: "service-msg", text: "Jul 07", created_at: new Date(new Date() - 530000) },
    { chat_id: 4, from: "service-msg", text: "JVictor added you", created_at: new Date(new Date() - 520000) },
    { chat_id: 4, from: "self", text: "text4", created_at: new Date(new Date() - 10000) },
    { chat_id: 4, from: 0, text: "text4", created_at: new Date(new Date() - 10000) },
    { chat_id: 4, from: 0, text: "text4", created_at: new Date(new Date() - 10000) },
    { chat_id: 4, from: "self", text: "text4", created_at: new Date(new Date() - 10000) },
    { chat_id: 4, from: 0, text: "text4 text4 text4", created_at: new Date(new Date() - 10000) },
  ],
  5: [
    // "JVictor"
    { chat_id: 5, from: "service-msg", text: parseDateToString(new Date(new Date() - 530000)), created_at: new Date(new Date() - 530000) },
    {
      chat_id: 5,
      from: 1,
      audio_src: "introduction_audio.ogg",
      text: `
      Hi! I am João Victor and this is my <b>interactive resume</b>. Here you will find informations about my skills, projects and experience. This interface was inspired by the web version of Telegram messaging app. Feel free to connect with me on social media:
      <br>
      <a href="https://twitter.com/jvictor_js" target="_blank">Twitter</a><br>
      <a href="https://t.me/jvictorjs" target="_blank">Telegram</a><br>
      <a href="https://www.youtube.com/user/jvwrCIN" target="_blank">YouTube channel</a><br>
      <a href="https://www.linkedin.com/in/jo%C3%A3o-victor-ramos-6570a21b7/" target="_blank">Linkedin</a><br>
      <a href="https://github.com/jvictorjs" target="_blank">GitHub</a><br>
      `,
      created_at: new Date(new Date() - 10000),
    },
    {
      chat_id: 5,
      from: 1,
      text: `<a href="./assets/jvictor-resume.pdf" target="_blank">Download Resume (PDF version)</a>`,
      created_at: new Date(new Date() - 9000),
    },
    /*
    {
      chat_id: 5,
      from: 1,
      text: `Other personal pages:
      <br><a href="https://skills.jvictor.com.br" target="_blank">skills.jvictor.com.br</a>
      <br><a href="https://portfolio.jvictor.com.br" target="_blank">portfolio.jvictor.com.br</a>
      `,
      created_at: new Date(new Date() - 8000),
    },
    */
    {
      chat_id: 5,
      from: 1,
      text: `
      <b><i>Any text message you send here will be received in my real Telegram account.</i></b>
      `,
      created_at: new Date(new Date() - 7000),
    },
  ],
  6: [
    // "Experience"
    { chat_id: 6, from: "service-msg", text: "March 17, 1989", created_at: new Date(1989, 1, 17, 0, 0, 0, 0) },
    { chat_id: 6, from: 1, text: "<b>👶🏻Hello World!</b>", created_at: new Date(1989, 2, 17, 0, 0, 0, 0) },
    { chat_id: 6, from: "service-msg", text: "1995", created_at: new Date(1995, 1, 17, 0, 0, 0, 0) },
    { chat_id: 6, from: 1, text: "My father bought the <b>first computer</b> of my family.", created_at: new Date(1995, 2, 17, 0, 0, 0, 0) },
    { chat_id: 6, from: "service-msg", text: "2007", created_at: new Date(2007, 7, 17, 0, 0, 0, 0) },
    {
      chat_id: 6,
      from: 2,
      text: JVICTOR_JS_TEXT_MENTION_HTML + " be welcome to the Computer Science bachelor degree",
      created_at: new Date(2007, 8, 17, 0, 0, 0, 0),
    },
    { chat_id: 6, from: "service-msg", text: "2012", created_at: new Date(2012, 7, 17, 0, 0, 0, 0) },
    {
      chat_id: 6,
      from: 2,
      text: JVICTOR_JS_TEXT_MENTION_HTML + " congratulations on getting your <b>Computer's Science bachelor's degree.</b>",
      created_at: new Date(2012, 8, 17, 0, 0, 0, 0),
    },
    { chat_id: 6, from: "service-msg", text: "2014", created_at: new Date(2014, 2, 10, 0, 0, 0, 0) },
    {
      chat_id: 6,
      from: 3,
      text: JVICTOR_JS_TEXT_MENTION_HTML + " be welcome to the team!",
      created_at: new Date(2014, 3, 10, 0, 0, 0, 0),
    },
    /*
    {
      chat_id: 6,
      from: 1,
      text: "Comecei a trabalhar no Ministério da Economia com prospecção de projetos de TI para atendimento de demandas do órgão como (aquisição de software antivirus, equipamentos de redes, etc). Gestão, fiscalização e pagamentos de contratos nesta área.",
      created_at: new Date(2014, 10, 17, 0, 0, 0, 0),
    },
    */
    { chat_id: 6, from: "service-msg", text: "2016", created_at: new Date(2016, 2, 17, 0, 0, 0, 0) },
    {
      chat_id: 6,
      from: 3,
      text: JVICTOR_JS_TEXT_MENTION_HTML + " be welcome to your new position: <b>Data Engineer</b>",
      created_at: new Date(2016, 10, 17, 0, 0, 0, 0),
    },
    /*
    { chat_id: 6, from: "service-msg", text: "2017", created_at: new Date(2017, 2, 17, 0, 0, 0, 0) },
    {
      chat_id: 6,
      from: 1,
      text: "Created my first telegram bot using Javascript and Google Apps Script.",
      created_at: new Date(2017, 10, 17, 0, 0, 0, 0),
    },
    */
    { chat_id: 6, from: "service-msg", text: "2019", created_at: new Date(2019, 2, 17, 0, 0, 0, 0) },
    {
      chat_id: 6,
      from: 1,
      text: "Started a <b>career shift to Software Development</b> with JavaScript.",
      created_at: new Date(2019, 10, 17, 0, 0, 0, 0),
    },
    { chat_id: 6, from: "service-msg", text: "2020", created_at: new Date(2020, 2, 17, 0, 0, 0, 0) },
    {
      chat_id: 6,
      from: 1,
      text: `Nasa Space Apps Hackathon 2nd place award - Recife. I was in charge of building the 
      <a href="https://github.com/jvictorjs/nasa_space_apps_2020" target="_blank">mobile app prototype.</a>`,
      created_at: new Date(2020, 10, 17, 0, 0, 0, 0),
    },
    {
      chat_id: 6,
      from: 1,
      text: `Created my <b>first REST API</b>: <a href="https://github.com/jvictorjs/tremdgol-backend" target="_blank">api.tremdgol.com </a>`,
      created_at: new Date(2020, 10, 17, 0, 0, 0, 0),
    },
    { chat_id: 6, from: "service-msg", text: "2021", created_at: new Date(2021, 2, 17, 0, 0, 0, 0) },
    {
      chat_id: 6,
      from: 1,
      text: `Released my <b>first Android app on Google Play Store</b>: <a href="https://play.google.com/store/apps/details?id=com.bolanarede.tremdgol_free" target="_blank">TremdGol</a>`,
      created_at: new Date(2021, 4, 17, 0, 0, 0, 0),
    },
    { chat_id: 6, from: "service-msg", text: "2022", created_at: new Date(2022, 0, 17, 0, 0, 0, 0) },
    {
      chat_id: 6,
      from: 1,
      text: `Created a <a href="https://courses.jvictor.com.br" target="_blank">course platform</a> for my video lessons.`,
      created_at: new Date(2022, 5, 17, 0, 0, 0, 0),
    },
    {
      chat_id: 6,
      from: 3,
      text:
        JVICTOR_JS_TEXT_MENTION_HTML +
        ` congratulations on finish the <a href="https://avalia.economia.gov.br/" target="_blank">Avalia ME</a> project.`,
      created_at: new Date(2021, 10, 17, 0, 0, 0, 0),
    },
    { chat_id: 6, from: "service-msg", text: parseDateToString(new Date(new Date() - 53000)), created_at: new Date(new Date() - 53000) },
    //{ chat_id: 6, from: "service-msg", text: "JVictor added you", created_at: new Date(new Date() + 20000) },
  ],
  7: [
    // "Course"
    { chat_id: 7, from: "service-msg", text: "2020", created_at: new Date(2020, 9, 10, 0, 0, 0, 0) },
    {
      chat_id: 7,
      from: 1,
      text: "Released my first YouTube Tutorial for beginners programmers: <br>How to create a Telegram Bot using Google Sheets | My First Robot",
      created_at: new Date(2020, 10, 10, 0, 0, 0, 0),
    },
    { chat_id: 7, from: "service-msg", text: "2022", created_at: new Date(2022, 9, 10, 0, 0, 0, 0) },
    {
      chat_id: 7,
      from: 1,
      img_src: "/projects/project-my-course-platform.png",
      text: `Created a course platform site for my video lessons: <a href="https://courses.jvictor.com.br" target="_blank">courses.jvictor.com.br</a>`,
      created_at: new Date(2022, 9, 17, 0, 0, 0, 0),
    },
    { chat_id: 7, from: "service-msg", text: parseDateToString(new Date(new Date() - 53000)), created_at: new Date(new Date() - 53000) },
    //{ chat_id: 7, from: "service-msg", text: "JVictor added you ", created_at: new Date(new Date() + 45000) },
  ],
  8: [
    // "Skills"
    { chat_id: 8, from: "service-msg", text: "2003", created_at: new Date(2003, 2, 17, 0, 0, 0, 0) },
    {
      chat_id: 8,
      from: 1,
      text: "Created my first website with <b>HTML<b>.",
      created_at: new Date(2003, 3, 17, 0, 0, 0, 0),
    },
    { chat_id: 8, from: "service-msg", text: "2007", created_at: new Date(2007, 2, 17, 0, 0, 0, 0) },
    {
      chat_id: 8,
      from: 1,
      text: "<b>Starting my CS degree</b> I had my first steps with: <br><b>Ubuntu Linux</b> <br><b>PuTTy</b><br><b>SSH</b>",
      created_at: new Date(2007, 9, 17, 0, 0, 0, 0),
    },
    { chat_id: 8, from: "service-msg", text: "2012", created_at: new Date(2012, 2, 17, 0, 0, 0, 0) },
    {
      chat_id: 8,
      from: 1,
      text: "<b>Final CS Degree project:</b> web app with <br><b>Python</b><br><b>Django</b>",
      created_at: new Date(2012, 10, 17, 0, 0, 0, 0),
    },
    { chat_id: 8, from: "service-msg", text: "2016", created_at: new Date(2016, 2, 17, 0, 0, 0, 0) },
    {
      chat_id: 8,
      from: 1,
      text: "Started working with <b>Data Analysis</b> and <b>Data Engeneeginr</b> using these tools: <br><b>Pentaho Data Integration</b>, <br><b>Qlik View</b> <br><b>Qlik Sense</b>",
      created_at: new Date(2016, 10, 17, 0, 0, 0, 0),
    },
    {
      chat_id: 8,
      from: 1,
      text: "Improved <b>SQL</b> skills.",
      created_at: new Date(2016, 11, 17, 0, 0, 0, 0),
    },
    { chat_id: 8, from: "service-msg", text: "2017", created_at: new Date(2017, 2, 17, 0, 0, 0, 0) },
    {
      chat_id: 8,
      from: 1,
      text: "Created my first <b>Telegram Bot</b> using: <br><b>JavaScript</b> <br><b>Google Apps Script</b> <br><b>Google Sheets</b>.",
      created_at: new Date(2017, 10, 17, 0, 0, 0, 0),
    },
    { chat_id: 8, from: "service-msg", text: "2020", created_at: new Date(2020, 2, 17, 0, 0, 0, 0) },
    {
      chat_id: 8,
      from: 1,
      text: `Created the <a href="https://github.com/jvictorjs/nasa_space_apps_2020" target="_blank">Firesafe (hackathon project)</a>: <br><b>React Native</b> <br><b>Expo</b>`,
      created_at: new Date(2020, 4, 17, 0, 0, 0, 0),
    },
    { chat_id: 8, from: "service-msg", text: "2021", created_at: new Date(2021, 2, 17, 0, 0, 0, 0) },
    {
      chat_id: 8,
      from: 1,
      text: `Created the <a href="https://bolanarede.net.br/" target="_blank">Bola na Rede</a> web app using: <br><b>Angular</b> <br><b>TypeScript</b> <br><b>Chart.js</b>`,
      created_at: new Date(2021, 3, 17, 0, 0, 0, 0),
    },
    {
      chat_id: 8,
      from: 1,
      text: `Created the <a href="https://github.com/jvictorjs/tremdgol-app" target="_blank">Tremdgol App</a> using: <br><b>React Native</b> <br><b>Expo</b> <br><b>React Native SVG Charts</b>`,
      created_at: new Date(2021, 3, 17, 0, 0, 0, 0),
    },
    {
      chat_id: 8,
      from: 1,
      text: `I am a <b>software developer</b> and a big fan of practical-based approach when it comes to learning. In other words, I like to <b>learn by doing</b>.
<br><br>
      For the past six years I’ve been working as a Data Engineer, maintaining and transforming data into useful information and creating BI Dashboards. Additionally, in the last three years, I dedicated myself to build web and mobile apps, as part of my work as well as side projects.
    <br><br>  
      I'm looking to collaborate on <b>web and mobile development</b>.
      <br>
      I am able to develop a fullstack system, including the server configuration in the cloud (this website, for example).
      <br><br>
      I <b>love chatbots</b>: it is a powerful tool to help everyone with all varieties of tasks.
      <br><br>
      <b>React, Vue, Google Apps Script and Telegram Bots</b> are my current favorite tools to work with.`,
      created_at: new Date(2022, 5, 17, 0, 0, 0, 0),
    },
    { chat_id: 8, from: "service-msg", text: "2022", created_at: new Date(2022, 2, 17, 0, 0, 0, 0) },
    {
      chat_id: 8,
      from: 1,
      text: `Built 3 web apps:
      <br><a href="https://github.com/jvictorjs/tremdgol" target="_blank">TremdGol.com</a>
      <br><a href="https://github.com/jvictorjs/skills-word-cloud" target="_blank">My Skills</a>
      <br><a href="https://github.com/jvictorjs/telegram-clone" target="_blank">Telegram Clone</a>
      <br>All of them using: <br><b>Vue</b> <br><b>Vuetify</b> <br><b>Material Design Icons</b>
      `,
      created_at: new Date(2022, 4, 17, 0, 0, 0, 0),
    },
    {
      chat_id: 8,
      from: 1,
      text: `Built <a href="https://github.com/jvictorjs/courses-platform" target="_blank">My Course Platform</a> using: <br><b>React</b> <br><b>Tailwind CSS</b> <br><b>GraphQL</b> <br><b>Vite</b>
      `,
      created_at: new Date(2022, 5, 17, 0, 0, 0, 0),
    },
    /*
    {
      chat_id: 8,
      from: 1,
      img_src: "/projects/project-skills.png",
      text: `My skills web page: <a href="https://skills.jvictor.com.br" target="_blank">skills.jvictor.com.br</a>`,
      created_at: new Date(2022, 3, 17, 0, 0, 0, 0),
    },
    */
    { chat_id: 8, from: "service-msg", text: parseDateToString(new Date(new Date() - 53000)), created_at: new Date(new Date() - 53000) },
    //{ chat_id: 8, from: "service-msg", text: "JVictor added you", created_at: new Date(new Date() + 30000) },
  ],

  9: [
    // "Projects"
    { chat_id: 9, from: "service-msg", text: "2019", created_at: new Date(2019, 2, 17, 0, 0, 0, 0) },
    {
      chat_id: 9,
      from: 1,
      img_src: "/projects/project-medicine-reminder.jpg",
      text: `<b>Medicine Reminder</b>
      <br>Google Apps Script ● Telegram Bot
      <br><i>A useful chatbot that reminds you when it is time to take that pill. This is one of the many Telegram Bots I created.</i>
      <br><a href="https://www.youtube.com/shorts/KbZ9CUsmLcI" target="_blank">YouTube demo</a>
      <br><a href="https://github.com/jvictorjs/medicine-reminder-telegram-chatbot" target="_blank">GitHub repository</a>
      <br><span class="blue--text">#GoogleAppsScript #JavaScript #TelegramBotAPI</span>
      `,
      created_at: new Date(2019, 2, 17, 0, 0, 0, 0),
    },
    { chat_id: 9, from: "service-msg", text: "2020", created_at: new Date(2020, 2, 17, 0, 0, 0, 0) },
    {
      chat_id: 9,
      from: 1,
      img_src: "/projects/project-firesafe.jpg",
      text: `<b>Firesafe</b> (hackathon prototype)
      <br>React Native ● Mobile
      <br><i>Hackathon project for 2020 Nasa Space Apps Challenge - Location: Recife (2nd place award).</i>
      <br><a href="https://github.com/jvictorjs/nasa_space_apps_2020" target="_blank">GitHub repository</a>
      <br><span class="blue--text">#React #ReactNative #Expo</span>
      `,
      created_at: new Date(2020, 2, 17, 0, 0, 0, 0),
    },
    {
      chat_id: 9,
      from: 1,
      img_src: "/projects/project-tremdgol-backend2.png",
      text: `<b>TremdGol Backend</b> (Soccer Stats API)
      <br>Node.js ● REST API ● <a href="https://api.tremdgol.com/" target="_blank">api.tremdgol.com</a>
      <br><i>REST API that provides soccer matches statistics to other applications.</i>
      <br><a href="https://github.com/jvictorjs/tremdgol-backend" target="_blank">GitHub repository</a>
      <br><span class="blue--text">#JSONserver #DigitalOcean</span>
      `,
      created_at: new Date(2020, 3, 17, 0, 0, 0, 0),
    },
    { chat_id: 9, from: "service-msg", text: "2021", created_at: new Date(2021, 2, 17, 0, 0, 0, 0) },
    {
      chat_id: 9,
      from: 1,
      img_src: "/projects/project-painel-fundo-a-fundo.png",
      text: `<b>Fundo a Fundo Dashboard</b>
      <br>Qlik Sense ● Web ● <a href="https://painelfundoafundo.economia.gov.br/" target="_blank">painelfundoafundo.economia.gov.br</a>
      <br><i>BI Dashboard created to present data from the Brazil's Ministry of Economy.</i>
      <br><a href="https://www.youtube.com/watch?v=xm1f4tRW0Sg" target="_blank">YouTube demo</a>
      <br><span class="blue--text">#QlikSense #JavaScript #HTML #CSS</span>
      `,
      created_at: new Date(2021, 3, 17, 0, 0, 0, 0),
    },
    {
      chat_id: 9,
      from: 1,
      img_src: "/projects/project-portfolio.png",
      text: `<b>Portfolio page</b>
      <br>Angular ● Web ● <a href="https://portfolio.jvictor.com.br/" target="_blank">portfolio.jvictor.com.br</a>
      <br><i>Personal portfolio page gathering basic professional informations with also some built-in small applications.</i>
      <br><a href="https://github.com/jvictorjs/portfolio" target="_blank">GitHub repository</a>
      <br><span class="blue--text">#Angular #TypeScript #Socket.io</span>
      `,
      created_at: new Date(2021, 4, 17, 0, 0, 0, 0),
    },
    {
      chat_id: 9,
      from: 1,
      img_src: "/projects/project-bolanarede.png",
      text: `<b>Bola na Rede</b>
      <br>Angular ● Web ● <a href="https://bolanarede.net.br/" target="_blank">bolanarede.net.br</a>
      <br><i>Web page created to present live soccer games statistics.</i>
      <br><a href="https://youtu.be/K4GuKwINolQ" target="_blank">YouTube demo</a>
      <br><a href="https://github.com/jvictorjs/bolasite" target="_blank">GitHub repository</a>
      <br><span class="blue--text">#Angular #TypeScript #Chart.js</span>
      `,
      created_at: new Date(2021, 6, 17, 0, 0, 0, 0),
    },
    {
      chat_id: 9,
      from: 1,
      img_src: "/projects/playstore-tremdgol-free-screenshot.png",
      text: `<b>TremdGol</b>
      <br>React Native ● Mobile ● <a href="https://play.google.com/store/apps/details?id=com.bolanarede.tremdgol_free" target="_blank">Google Play Store download</a>
      <br><i>Live soccer matches statistics mobile app for Android.</i>
      <br><a href="https://www.youtube.com/watch?v=knUdqEsFIg4" target="_blank">YouTube demo</a>
      <br><a href="https://github.com/jvictorjs/tremdgol-app" target="_blank">GitHub repository</a>
      <br><span class="blue--text">#React #ReactNative #Expo</span>
      `,
      created_at: new Date(2021, 8, 17, 0, 0, 0, 0),
    },
    {
      chat_id: 9,
      from: 1,
      img_src: "/projects/project-avalia-me.png",
      text: `<b>Avalia ME</b>
      <br>Vue ● Web ● <a href="https://avalia.economia.gov.br/" target="_blank">avalia.economia.gov.br</a>
      <br><i>Employee Performance Evaluation web site of Brazil's Ministry of Economy. It has more than 10.000 active users.</i>
      <br><a href="https://www.youtube.com/watch?v=B3hnfrcYefw" target="_blank">YouTube demo</a>
      <br><span class="blue--text">#Vue #Vuetify</span>
      `,
      created_at: new Date(2021, 9, 17, 0, 0, 0, 0),
    },
    { chat_id: 9, from: "service-msg", text: "2022", created_at: new Date(2022, 2, 17, 0, 0, 0, 0) },
    {
      chat_id: 9,
      from: 1,
      img_src: "/projects/project-telegram-clone.png",
      text: `<b>Telegram Web Clone</b>
      <br>Vue ● Web ● <a href="https://jvictor.com.br/" target="_blank">jvictor.com.br</a>
      <br><i>Personal web page that simulates a message app interface to present my professional skills and experience.</i>
      <br><a href="https://youtu.be/Nm9cWR95-hY" target="_blank">YouTube demo</a>
      <br><a href="https://github.com/jvictorjs/telegram-clone" target="_blank">GitHub repository</a>
      <br><span class="blue--text">#Vue #Vuetify</span>
      `,
      created_at: new Date(2022, 3, 17, 0, 0, 0, 0),
    },
    {
      chat_id: 9,
      from: 1,
      img_src: "/projects/project-my-course-platform.png",
      text: `<b>My Course Platform</b>
      <br>React ● Web ● <a href="https://courses.jvictor.com.br/" target="_blank">courses.jvictor.com.br</a>
      <br><i>Online course platform for my coding video lessons.</i>
      <br><a href="https://github.com/jvictorjs/courses-platform" target="_blank">GitHub repository</a>
      <br><span class="blue--text">#React #TailwindCSS #GraphQL #Vite</span>
      `,
      created_at: new Date(2022, 5, 17, 0, 0, 0, 0),
    },
    {
      chat_id: 9,
      from: 1,
      img_src: "/projects/project-tremdgol.com.png",
      text: `<b>TremdGol.com</b>
      <br>Vue ● Web ● <a href="https://tremdgol.com/" target="_blank">tremdgol.com</a>
      <br><i>Live soccer games statistics with a interactive virtual field (canvas).</i>
      <br><a href="https://www.youtube.com/watch?v=2kQNpB26RIQ" target="_blank">YouTube demo</a>
      <br><a href="https://github.com/jvictorjs/tremdgol" target="_blank">GitHub repository</a>
      <br><span class="blue--text">#Vue #Vuetify</span>
      `,
      created_at: new Date(2022, 6, 17, 0, 0, 0, 0),
    },
    {
      chat_id: 9,
      from: 1,
      img_src: "/projects/project-skills.png",
      text: `<b>Skills page</b>
      <br>Vue ● Web ● <a href="https://skills.jvictor.com.br/" target="_blank">skills.jvictor.com.br</a>
      <br><i>Web page to present the technologies and tools that are in my area of expertise.</i>
      <br><a href="https://github.com/jvictorjs/skills-word-cloud" target="_blank">GitHub repository</a>
      <br><span class="blue--text">#Vue #Vuetify</span>
      `,
      created_at: new Date(2022, 8, 17, 0, 0, 0, 0),
    },
    { chat_id: 9, from: "service-msg", text: parseDateToString(new Date(new Date() - 53000)), created_at: new Date(new Date() - 53000) },
    //{ chat_id: 9, from: "service-msg", text: "JVictor added you ", created_at: new Date(new Date() + 40000) },
  ],
};
