import React from "react"
import { graphql } from "gatsby"
import { withMixpanel } from 'gatsby-plugin-mixpanel'

import Layout from "../components/layout"

class BlogPost extends React.Component {
  componentDidMount() {
    const { mixpanel, uri } = this.props
    mixpanel.track('view', {
      uri
    });
  }
  render() {
    const post = this.props.data.markdownRemark
    return (
      <Layout>
        <div>
          <h1>{post.frontmatter.title}</h1>
          <p>published on {post.frontmatter.date}</p>
          <hr />
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </Layout>
    )
  }
}

export default withMixpanel()(BlogPost)

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
      }
    }
  }
`
