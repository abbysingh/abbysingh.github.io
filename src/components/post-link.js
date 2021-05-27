import React from "react";
import * as styles from "./post-link.module.css";
import { Link, navigate } from "gatsby";
import Img from "gatsby-image";

export default function PostLink({ post }) {
  var readMore;
  if (post.frontmatter.isComplete == "true") {
    readMore = "READ MORE →";
  } else {
    readMore = "COMING SOON";
  }
  let featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid;
  function openCard() {
    if (post.frontmatter.isComplete == "true") navigate(post.frontmatter.slug);
  }
  return (
    <div
      style={{ background: post.frontmatter.gradient }}
      className={[styles.work, styles.cardSizing].join(" ")}
      onClick={() => openCard()}
    >
      <Img
        fluid={featuredImgFluid}
        className="featuredImage"
        alt="project featured image"
        imgStyle={{ objectFit: "contain" }}
      />
      <h3 className={styles.previewTitle}>{post.frontmatter.title}</h3>
      <p className={styles.previewSubtitle}>{post.frontmatter.subtitle}</p>
      <p className={styles.readMore}>{readMore}</p>
    </div>
  );
}
