export { ACCOUNTS, CHATS, MESSAGES, JVICTOR_JS_TEXT_MENTION_HTML };

const JVICTOR_JS_TEXT_MENTION_HTML = '<a href="https://github.com/jvictorjs" target="_blank"><strong class="blue--text">@jvictorjs</strong></a>';

const ACCOUNTS = [
  { id: 0, name: "test author", img_src: "blank.png", fontColor: "orange", url: "github.com/jvictorjs", tw: "jvictor_js" },
  { id: 1, name: "jvictorjs", img_src: "jvictorjs.jpg", fontColor: "blue", url: "github.com/jvictorjs", tw: "jvictor_js" },
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
  { id: 5, title: "jvictorjs", type: "private", img_type: "pic", img_src: "jvictorjs.jpg", unreadMsgs: true },
  { id: 6, title: "Experience", type: "group", img_type: "icon", img_src: "mdi-briefcase", unreadMsgs: true },
  { id: 7, title: "Course", type: "group", img_type: "icon", img_src: "mdi-account-school", unreadMsgs: true }, // mdi-school mdi-account-school mdi-code-tags
  { id: 8, title: "Skills", type: "group", img_type: "icon", img_src: "mdi-code-tags", unreadMsgs: true }, // mdi-tool mdi-toolbox mdi-code-tags
];

const MESSAGES = {
  1: [
    // "private test chat 1"
    { chat_id: 1, from: "service-msg", text: "Jul 07", created_at: new Date(new Date() - 530000) },
    { chat_id: 1, from: 0, text: "text1", created_at: new Date() - 500000 },
    {
      chat_id: 1,
      from: 0,
      img_src: "jvictorjs2.png",
      text: "image text test image text test image text test image text test image text test image text test",
      created_at: new Date(new Date() - 8000),
    },
    { chat_id: 1, from: 0, audio_src: "test_audio.ogg", text: "audio text test", created_at: new Date(new Date() - 7000) },
  ],
  2: [
    // "group test chat 2"
    { chat_id: 2, from: "service-msg", text: "Jul 07", created_at: new Date(new Date() - 530000) },
    { chat_id: 2, from: "service-msg", text: "jvictorjs added you", created_at: new Date(new Date() - 520000) },
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
      img_src: "jvictorjs2.png",
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
    { chat_id: 3, from: "service-msg", text: "jvictorjs added you", created_at: new Date(new Date() - 520000) },
    { chat_id: 3, from: 0, text: "text3", created_at: new Date(new Date() - 10000) },
    { chat_id: 3, from: 0, text: "text3", created_at: new Date(new Date() - 10000) },
  ],
  4: [
    // "private test chat 4"
    { chat_id: 4, from: "service-msg", text: "Jul 07", created_at: new Date(new Date() - 530000) },
    { chat_id: 4, from: "service-msg", text: "jvictorjs added you", created_at: new Date(new Date() - 520000) },
    { chat_id: 4, from: "self", text: "text4", created_at: new Date(new Date() - 10000) },
    { chat_id: 4, from: 0, text: "text4", created_at: new Date(new Date() - 10000) },
    { chat_id: 4, from: 0, text: "text4", created_at: new Date(new Date() - 10000) },
    { chat_id: 4, from: "self", text: "text4", created_at: new Date(new Date() - 10000) },
    { chat_id: 4, from: 0, text: "text4 text4 text4", created_at: new Date(new Date() - 10000) },
  ],
  5: [
    // "jvictorjs"
    { chat_id: 5, from: "service-msg", text: "Jul 07", created_at: new Date(new Date() - 530000) },
    {
      chat_id: 5,
      from: 1,
      text: `
      Hello! This is João Victor and welcome to my personal chat website (telegram clone). 
      <br><br>Feel free to interact with the page and send me a message anytime.
      `,
      created_at: new Date(new Date() - 10000),
    },
    { chat_id: 5, from: 1, audio_src: "test_audio.ogg", text: "audio text test", created_at: new Date(new Date() - 7000) },
    {
      chat_id: 5,
      from: 1,
      text: `
      <b>Any text message send here will be recieved in my real Telegram account.</b>
      `,
      created_at: new Date(new Date() - 6000),
    },
  ],
  6: [
    // "Experience"
    { chat_id: 6, from: "service-msg", text: "March 17, 1989", created_at: new Date(1989, 2, 17, 0, 0, 0, 0) },
    { chat_id: 6, from: 1, text: "Hello World!", created_at: new Date(1989, 2, 17, 10, 0, 0, 0) },
    { chat_id: 6, from: "service-msg", text: "September, 2007", created_at: new Date(2007, 8, 17, 0, 0, 0, 0) },
    {
      chat_id: 6,
      from: 2,
      text: JVICTOR_JS_TEXT_MENTION_HTML + " be welcome to the Computer Science Bachelor Degree! Wish you really really Good luck!",
      created_at: new Date(2007, 8, 17, 10, 0, 0, 0),
    },
    { chat_id: 6, from: "service-msg", text: "April, 2014", created_at: new Date(2014, 3, 10, 0, 0, 0, 0) },
    {
      chat_id: 6,
      from: 3,
      text: JVICTOR_JS_TEXT_MENTION_HTML + " be welcome to the team! You are going to work with...",
      created_at: new Date(2014, 3, 10, 10, 0, 0, 0),
    },
    { chat_id: 6, from: 1, img_src: "ufpe.png", text: "image test", created_at: new Date(new Date() - 8000) },
    { chat_id: 6, from: 1, text: "And that is it (remove this msg later)", created_at: new Date() },
  ],
  7: [
    // "Course"
    { chat_id: 7, from: "service-msg", text: "September, 2020", created_at: new Date(1989, 2, 17, 0, 0, 0, 0) },
    {
      chat_id: 7,
      from: 1,
      text: "Released my first YouTube Tutorial... I have a course page that has still some lessons to be released...",
      created_at: new Date(1989, 2, 17, 10, 0, 0, 0),
    },
    { chat_id: 7, from: 1, text: "And that is it (remove this msg later)", created_at: new Date() },
  ],
  8: [
    // "Skills"
    { chat_id: 8, from: "service-msg", text: "September, 2020", created_at: new Date(1989, 2, 17, 0, 0, 0, 0) },
    {
      chat_id: 8,
      from: 1,
      text: "Released my first YouTube Tutorial... I have a course page that has still some lessons to be released...",
      created_at: new Date(1989, 2, 17, 10, 0, 0, 0),
    },
    { chat_id: 8, from: 1, text: "And that is it (remove this msg later)", created_at: new Date() },
  ],
};
