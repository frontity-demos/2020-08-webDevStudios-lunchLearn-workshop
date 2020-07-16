const settings = {
  "name": "vintage-vinyl",
  "state": {
    "frontity": {
      "url": "https://test.frontity.org",
      "title": "Test Frontity Blog",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "Rock",
              "/record_cat/rock/"
            ],
            [
              "Punk",
              "/record_cat/punk/"
            ],
            [
              "Grunge",
              "/record_cat/grunge/"
            ],
            [
              "About Us",
              "/about-us/"
            ]
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "https://app-5efddb43c1ac181508283e93.closte.com/wp-json",
          "postTypes": [
            {
              type: "record",
              endpoint: "record"
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
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
