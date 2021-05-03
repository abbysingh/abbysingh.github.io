import React from "react"
import { Link } from "gatsby"

const PostLink = ({ post }) => (
  <div style={{background: post.frontmatter.gradient}} className="work">
    {/* <img className="previewImage" src={post.frontmatter.featuredImage}/> */}
    <h2 className="previewTitle">{post.frontmatter.title}</h2>
    <p className="previewSubtitle">{post.frontmatter.subtitle}</p>
    <Link to={post.frontmatter.slug}>
      {post.frontmatter.title} ({post.frontmatter.date} {post.frontmatter.gradient})
    </Link>
  </div>
)
export default PostLink
console.log(PostLink)