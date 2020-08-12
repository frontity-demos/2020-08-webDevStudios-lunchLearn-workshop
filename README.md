# Vintage Vinyl

This repo contains a demo project that shows the use of Custom Post Types in a Frontity Project. This repo was created for the "Lunch & Learn 🍱 The React framework for WP - Frontity" organized by [WebDevStudios](https://webdevstudios.com/)


## Workshop Agenda

### 1️⃣ Part 1: `mars-theme`

#### 1. Create a frontity project from command line → `mars-theme`

- 📕 [Frontity CLI](https://docs.frontity.org/frontity-cli)

#### 2. Review `mars-theme`

- 📕 [`@frontity/mars-theme`](https://docs.frontity.org/frontity-themes/frontity-mars-theme)
- 📺 [Frontity Talks 2020-04 - ES6 topics & mars-theme](https://www.youtube.com/watch?v=e6n1j4gwFjQ&t=1672s)

#### 3. `frontity.settings.js` & Namespaces

- 📕 [Learning Frontity > Settings](https://docs.frontity.org/learning-frontity/settings) 
- 📕 [Learning Frontity > Namespaces](https://docs.frontity.org/learning-frontity/namespaces) 

#### 4. `frontity` global object → `state`

- 📕 [Learning Frontity > State](https://docs.frontity.org/learning-frontity/state)
- 📺 [Frontity Talks 2020-02 - wp-source (state & fetch)](https://www.youtube.com/watch?v=eW5xZlpcqQk&t=1073s)


#### 5. Styled Components

- 📕 [Learning Frontity > Styles](https://docs.frontity.org/learning-frontity/styles)
- 📺 [Frontity Talks 2020-01 - CSS In JS](https://www.youtube.com/watch?v=e-_66W8pfdY&t=1609s)

#### 6. Packages & `wp-source` package

- 📕 [Frontity Packages](https://docs.frontity.org/api-reference-1)
- 📕 [`@frontity/wp-source`](https://docs.frontity.org/api-reference-1/wordpress-source)
- 📺 [Frontity Talks 2020-01 - wp-source](https://www.youtube.com/watch?v=e-_66W8pfdY&t=96s)

- ☝️ Using wordpress.com as a source of data 
    * https://test.frontity.org/wp-json
    * https://public-api.wordpress.com/wp/v2/sites/frontitytest.wordpress.com

### 2️⃣ Part 2: `mars-theme-vintage-vinyl`

#### 7. Using Custom Post Types in a Frontity Project

##### 7.1 Verify Custom Post Type is properly available through the REST API
  - CPT `record` → https://app-5efddb43c1ac181508283e93.closte.com/wp-json/wp/v2/record
  - Taxonomy `record_cat` → https://app-5efddb43c1ac181508283e93.closte.com/wp-json/wp/v2/record_cat


##### 7.2 Define CPT in Frontity Project via [`frontity.settings.js`](https://github.com/frontity-demos/2020-08-webDevStudios-lunchLearn-workshop/blob/ac181704242bed1fb315ded5c246551289715d4a/frontity.settings.js#L53)

**`frontity.settings.js`**
```js
{
  "name": "@frontity/wp-source",
  "state": {
    "source": {
      "api": "https://app-5efddb43c1ac181508283e93.closte.com/wp-json",
      "postTypes": [
        {
          type: "record",
          endpoint: "record",
          archive: "/record_cat"
        }
      ],
      taxonomies: [
        {
          taxonomy: "record_cat",
          endpoint: "record_cat",
          postTypeEndpoint: "record"
        }
      ]

    }
  }
},
```

##### 7.3 Use `frontity.actions.fetch` to check CPT links

`/record/1984/`
`/record_cat/rock/`



##### 7.3 Custom Post Type `record` will use the `<Record>` component to show details of each record (links like `/record/nevermind/`)

**`src/components/index.js`**
```jsx
 <Record when={data.isRecord} />
```
   

4. Custom Taxonomy `record_cat` will use the `<ListRecords>` component to show list of records (links like `/record_cat/rock/`)

**`src/components/index.js`**
```jsx
<ListRecords when={data.isRecordCat || data.isRecordArchive} />
```

---

### Launch a development server

```
npx frontity dev
```

Runs the app in development mode. Open http://localhost:3000 to view it in the browser.

The site will automatically reload if you make changes inside the `packages` folder. You will see the build errors in the console.

> Have a look at our [Quick Start Guide](https://docs.frontity.org/getting-started/quick-start-guide)

### Create your custom theme

```
npx frontity create-package your-custom-theme
```

Use the command `npx frontity create-package` to create a new package that can be set in your `frontity.settings.js` as your theme

> Have a look at our blog post [How to Create a React WordPress Theme in 30 Minutes](https://frontity.org/blog/how-to-create-a-react-theme-in-30-minutes/)

### Create a production-ready build

```
npx frontity build
```

Builds the app for production to the `build` folder.

This will create a `/build` folder with a `server.js` (a [serverless function](https://vercel.com/docs/v2/serverless-functions/introduction)) file and a `/static` folder with all your javascript files and other assets.

Your app is ready to be deployed.

> Get more info about [Frontity's architecture](https://docs.frontity.org/architecture)

### Deploy

With the files generated in the _build_ you can deploy your project

#### As a node app

Use `npx frontity serve` to run it like a normal Node app.

This command generates (and runs) a small web server that uses the generated `server.js` and `/static` to serve your content

#### As a serverless service

Upload your `static` folder to a CDN and your `server.js` file to a serverless service, like Now or Netlify.

> Get more info about [how to deploy](https://docs.frontity.org/deployment) a Frontity project

---


### » Frontity Channels 🌎

We have different channels at your disposal where you can find information about the project, discuss about it and get involved:

- 📖 **[Docs](https://docs.frontity.org)**: this is the place to learn how to build amazing sites with Frontity.
- 👨‍👩‍👧‍👦 **[Community](https://community.frontity.org/)**: use our forum to [ask any questions](https://community.frontity.org/c/dev-talk-questions), feedback and meet great people. This is your place too to share [what are you building with Frontity](https://community.frontity.org/c/showcases)!
- 🐞 **[GitHub](https://github.com/frontity/frontity)**: we use GitHub for bugs and pull requests. Questions are answered in the [community forum](https://community.frontity.org/)!
- 🗣 **Social media**: a more informal place to interact with Frontity users, reach out to us on [Twitter](https://twitter.com/frontity).
- 💌 **Newsletter**: do you want to receive the latest framework updates and news? Subscribe [here](https://frontity.org/)

### » Get involved 🤗

Got questions or feedback about Frontity? We'd love to hear from you. Use our [community forum](https://community.frontity.org) yo ! ❤️

Frontity also welcomes contributions. There are many ways to support the project! If you don't know where to start, this guide might help → [How to contribute?](https://docs.frontity.org/contributing/how-to-contribute)
