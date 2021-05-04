import React from "react"
import { Link, navigate } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Img from "gatsby-image"

export default function PostLink({ post }) { 
  let featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid
  function openCard(){
    navigate(post.frontmatter.slug)
  }
  return (
  <div style={{background: post.frontmatter.gradient}} className="work cardSizing" onClick={() => openCard()}>
    <Img fluid={featuredImgFluid} 
      className="featuredImage"
      imgStyle={{ objectFit: 'contain'}}  
    />
    <h3 className="previewTitle">{post.frontmatter.title}</h3>
    <p className="previewSubtitle">{post.frontmatter.subtitle}</p>
    <p className="readMore">READ MORE →</p>
    {/* <Link to={post.frontmatter.slug}>
      {post.frontmatter.title} ({post.frontmatter.date} {post.frontmatter.gradient})
    </Link> */}
  </div>
  )
}


console.log(PostLink)