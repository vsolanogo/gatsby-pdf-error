require("dotenv").config({
  path: `.env`,
})

const prod = process.env.GATSBY_PROD
const isBuild = process.argv.includes("build")

console.log({ isBuild })
console.log({ prod })

module.exports = {
  siteMetadata: {
    title: `1`,
    description: `2`,
    author: `3`,
    siteUrl: `https://google.com`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },

    `gatsby-transformer-remark`,
    `gatsby-plugin-emotion`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ].filter(Boolean),
}
