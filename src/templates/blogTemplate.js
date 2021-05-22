import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { MDXRenderer } from "gatsby-plugin-mdx"
import "./blogTemplate.css"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {  
  const body = data.mdx.body
  const frontmatter = data.mdx.frontmatter
  let featuredImgFluid = frontmatter.featuredImage.childImageSharp.fluid
  return (
    <div className="blog-post-border" style={{background: frontmatter.gradient}}>
      <Link className="backButton" to="/"><img src={'/backbutton.svg'}/></Link>
      <div className="blog-post-container">
        <div className="blog-post-header">
          <Img fluid={featuredImgFluid} 
            className="blog-post-header-image"
            imgStyle={{ objectFit: 'contain'}}  
          />
          <div className = "blog-post-header-text-container">
            <h1>{frontmatter.title}</h1>
            <p className="blog-post-subtitle">{frontmatter.subtitle}</p>
          </div>
        </div>
        <div
          className="blog-post-content"
          // dangerouslySetInnerHTML={{ __html: html }}
        ><MDXRenderer images={data.mdx.frontmatter.images}>{body}</MDXRenderer></div>
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      body
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        subtitle
        gradient
        images{
          publicURL
        }
        featuredImage{
          childImageSharp {
            fluid(maxWidth: 800, fit: CONTAIN) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`