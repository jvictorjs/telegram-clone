# telegram-clone

Personal web page that simulates a message app interface to present my professional skills and experience.

Emulates the Telegram WebK version. No account needed. Send real messages.

![alt text](https://github.com/jvictorjs/telegram-clone/blob/main/screenshots/Screenshot%202022-09-19%20004305.png?raw=true)

### Language

English

## Techs

- [Vue](https://vuejs.org/)
- [Vuetify](https://vuetifyjs.com/en/)
- [Material Design Icons](https://materialdesignicons.com/)

## Motivation

After I got bored with my default portfolio web page, I came up with the idea of making something different that really represents me. And everyone close to me knows that <b>I am a Telegram messaging app fan</b>.

I wanted to build something original. So anyone could say: "Wow, this is cool!".

<b>Most of the personal pages and portfolios are the same</b>. [I already have a page like that.](https://portfolio.jvictor.com.br/)

This app put together:

- Something that shows my skills, creativity and best interests,
- Techs and tools I am more comfortable right now,
- The stack I use in my own projects so I can rapidly finish the development.

And that is the result: an interactive and useful web app.

## Why use Vue from a CDN?

https://vuetifyjs.com/en/getting-started/installation/#usage-with-cdn

If you want to build a quick demo project, this app is a good example of how a simple Vue setup from CDN can be used.

The idea of creating an app with Vue directly from a CDN is based on:

- No need for specific setup to build: you can use Vue from anywhere
- Focus on simplicity and speed to create a quick MVP that demonstrate the usage of HTML, CSS and JS
- Everything is portable: others can easily change stuff
- It is a simple page with no such complex functionalities.

Sometimes a simple solution is enough.

Beyond "hello world": using the power of Vue.js and Vuetify this app can make http requests to external services.

All of this works within a single HTML page and some JS files.

## About Telegram

Telegram is one of the most used messaging apps in the World. https://www.statista.com/statistics/258749/most-popular-global-mobile-messenger-apps/

As of September 2022, it has surpassed 700 million users.
It is open source and has really good API documentation.

> "Telegram has public APIs with which developers can access the same functionality as Telegram's official apps to build their own messaging applications.
> ...
> Telegram also offers an API that allows developers to create bots, which are accounts controlled by programs. Such bots are used, among other things, to emulate and play old games in the app and inform users about vaccine availability for COVID-19.
> In addition, Telegram offers functions for making payments directly within the platform, alongside an external service such as Stripe."
> https://en.wikipedia.org/wiki/Telegram_(software)

## It is online!

https://jvictor.com.br

https://user-images.githubusercontent.com/28718999/190947366-727967c4-ff9e-4846-a71a-4073b2622779.mp4

> Responsive web page built from scratch with <b>VUE.JS</b>, using <b>JAVASCRIPT</b>, <b>HTML</b> and <b>CSS</b>. To faster and beauty design I used <b>VUETIFY</b> UI library and some <b>MATERIAL DESIGN ICONS</b>. Hosted in a Linux <b>UBUNTU</b> dedicated server at <b>DIGITALOCEAN</b> cloud infrastructure. Version control by <b>GIT</b> and <b>GITHUB</b>. Reverse proxy with <b>NGINX</b>. SSL certification with <b>CERTBOT</b>.

## TODO (changelog + backlog)

- ✅ Settings > Messages background opacity slider control [v.0.1.3]
- ✅ Notification sound [v0.1.4]
- ✅ Chat input/send message container [v0.1.5]
- ✅ Chat service message [v0.1.6]
- ✅ Message small triangle border pointer [v0.1.7]
- ✅ Settings > On/off notification sound switch [v0.1.8]
- ✅ Accounts with profile pics [v0.2.0]
- ✅ Group messages sender pic with account details [v0.2.1]
- ✅ Data.js module (accounts, chats, messages) [v0.2.2]
- ✅ Project getting big: css moved to index.css [v0.3.0]
- ✅ First Vue component: AboutDialog.vue [v0.3.1]
- ✅ Telegram WebK version style/responsiveness adjustments [v0.4.0]
- ✅ Scrollable chat list (overflow-y) [v0.4.1]
- ✅ Image messages with viewer component [v0.4.2]
- ✅ Loading page (while downloading assets in background) [v0.4.3]
- ✅ Audio messages player component [v0.4.4]
- ✅ Change page title and icon [v0.4.5]
- ✅ Send real messages to Telegram account [v0.5.0]
- ✅ Message body HTML tags support using the v-html directive [v0.5.1]
- ✅ Mobile screen alert: ask to rotate screen [v0.6.0]
- ✅ README.md full project description details with demo video [v1.0.0]
- Chat title/pic bar in the top of messages container
- Chat search (by title only)
- Chat details with Group chat members list with pic
- Audio player playback speed rate selector

## Installation instructions:

1. git clone the repository
2. setup your proxy/server/DNS to the index.html file
3. if you want to send real telegram messages, add your GOOGLE_APPS_SCRIPTS_ID to vue data variables (index.html)
4. set the vue data variable isProductionMode to TRUE and isStartButtonClicked to FALSE (index.html)
