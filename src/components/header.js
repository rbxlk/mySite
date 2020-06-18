import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const Header = ({ siteTitle }) => (
  <Container style={{
    background: `#900C3F`,
    padding: `1rem`
  }}>
    <Row>
      <Col>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </Col>
    </Row>
  </Container>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
