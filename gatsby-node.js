exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions
  
    const blogPostTemplate = require.resolve(`./src/templates/blogTemplate.js`)
  
    const result = await graphql(`
      query {
        allMdx {
          edges {
            node {
              frontmatter {
                title
                slug
                date(formatString: "MMMM DD, YYYY")
              }
            }
          }
        }
      }
    `)
  
    // Handle errors
    if (result.errors) {
      reporter.panicOnBuild(`Error while running GraphQL query.`)
      return
    }
  
    result.data.allMdx.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.slug,
        component: blogPostTemplate,
        context: {
          // additional data can be passed via context
          slug: node.frontmatter.slug,
        },
      })
    })
  }