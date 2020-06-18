import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Container from "react-bootstrap/Container"
const IndexPage = () => (
  <Layout>
    <Container style={{
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <SEO title="Home" />
      <h1>Welcome to my website!</h1>
      <p>Currently under construction</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
      </Container>
  </Layout>
)

export default IndexPage
