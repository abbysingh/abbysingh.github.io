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
  var cardStyles = [styles.work, styles.cardSizing, styles.clickable];
  if (post.frontmatter.isComplete != "true") {
    cardStyles = [styles.work, styles.cardSizing];
  }
  let featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid;
  function openCard() {
    if (post.frontmatter.isComplete == "true") navigate(post.frontmatter.slug);
  }
  return (
    <div
      style={{ background: post.frontmatter.gradient }}
      className={cardStyles.join(" ")}
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
