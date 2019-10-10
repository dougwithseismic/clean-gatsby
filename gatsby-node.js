const path = require(`path`)

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Query for markdown nodes to use in creating pages.
  const result = await graphql(
    `
    {
        gcms {
          merchantsConnection {
            edges {
              node {
                id
                slug
                status
              }
            }
          }
        }
      }
      
      
      `
  )

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  // Create pages for each markdown file.
  const merchantPageTemplate = path.resolve(`src/templates/MerchantPage/index.js`)
  result.data.gcms.merchantsConnection.edges.forEach(({ node }) => {
    const slug = node.slug
    if (node.status !== 'DRAFT') {
      createPage({
        path: slug,
        component: merchantPageTemplate,
        // In your blog post template's graphql query, you can use path
        // as a GraphQL variable to query for data from the markdown file.
        context: {
          slug
        }
      })
    }
  })
}

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions
  // page.matchPath is a special key that's used for matching pages
  // only on the client.
  if (page.path.match(/^\/out/)) {
    page.matchPath = `/out/*`

    console.log('SHOW ME')

    // Update the page.
    createPage(page)
  }
}
