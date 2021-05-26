import React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import Header from "../components/header";
import PostLink from "../components/post-link";
import Container from "../components/container";
import BWCard from "../components/bwcard";

export const pageQuery = graphql`
  query {
    allMdx(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
            gradient
            isComplete
            subtitle
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 800, fit: CONTAIN) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default function Home({
  data: {
    allMdx: { edges },
  },
}) {
  const Posts = edges
    .filter((edge) => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map((edge) => <PostLink key={edge.node.id} post={edge.node} />);

  return (
    <Container>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Abheyraj Singh</title>
        <meta name="title" content="Abheyraj Singh" />
        <meta
          name="description"
          content="Hi, I'm Abheyraj, a product designer who knows how to code."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io/" />
        <meta property="og:title" content="Abheyraj Singh" />
        <meta
          property="og:description"
          content="Hi, I'm Abheyraj, a product designer who knows how to code."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dzrqeyspq/image/upload/v1621934279/socialimage_cawhqz.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta property="twitter:title" content="Abheyraj Singh" />
        <meta
          property="twitter:description"
          content="Hi, I'm Abheyraj, a product designer who knows how to code."
        />
        <meta
          property="twitter:image"
          content="https://res.cloudinary.com/dzrqeyspq/image/upload/v1621934279/socialimage_cawhqz.png"
        />
        <link rel="canonical" href="https://abheyraj.com" />
      </Helmet>
      <Header />
      {Posts}
      <BWCard>
        <h1>Additionally,</h1>
        <p>
          Since 2020, I've been mentoring budding product designers at the{" "}
          <a
            href="https://www.10kdesigners.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            10k Designers Masterclass.
          </a>
        </p>
        <p>
          In 2017, I worked at{" "}
          <a
            href="https://lazyeight.in"
            target="_blank"
            rel="noopener noreferrer"
          >
            lazyeight.in.
          </a>
        </p>
        <p>
          In 2015, I designed and developed a neighbourhood app prototype for
          both iOS and Android for housing.com. Take a{" "}
          <a
            href="https://gfycat.com/kindopendegu"
            target="_blank"
            rel="noopener noreferrer"
          >
            peek here.
          </a>
        </p>
        <p>
          In 2014, I was one of the initial iOS developers for{" "}
          <a
            href="https://apps.apple.com/in/app/wynk-music-songs-podcasts/id845083955"
            target="_blank"
            rel="noopener noreferrer"
          >
            Wynk Music
          </a>
          , helping it scale from zero to one million users.
        </p>
      </BWCard>
      <BWCard>
        <h1>🎧🗣</h1>
        <p>
          In 2020, I did a podcast interview with{" "}
          <a
            href="https://www.youtube.com/watch?v=-QMc0acKX7Q"
            target="_blank"
            rel="noopener noreferrer"
          >
            Whiteboard FM.
          </a>
        </p>
        <p>
          Back in 2018, I talked to my friend and ex-cofounder at Lisn, Abhinav
          Chikkara about{" "}
          <a
            href="https://www.youtube.com/watch?v=agXAcxQvAxI"
            target="_blank"
            rel="noopener noreferrer"
          >
            my journey into product design.
          </a>
        </p>
      </BWCard>
      <BWCard noBorder>
        <h1>✌🏽</h1>
        <p>Thanks for reading.</p>
        <p>
          Get in touch with me via{" "}
          <a href="mailto:someone@yoursite.com">email</a>,{" "}
          <a
            href="https://www.twitter.com/abbysingh"
            target="_blank"
            rel="noopener noreferrer"
          >
            twitter
          </a>{" "}
          or{" "}
          <a
            href="https://www.linkedin.com/in/abheyraj/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.
          </a>
        </p>
        <p style={{ fontSize: "12px" }}>
          Handcrafted with ❤️ using Figma and Gatsby.
        </p>
      </BWCard>
    </Container>
  );
}
