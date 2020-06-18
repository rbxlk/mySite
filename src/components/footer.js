import React from "react"
import PropTypes from "prop-types"
import Container from "react-bootstrap/Container"


const Footer = ({ siteAuthor }) => (
    <Container fluid>
        © {new Date().getFullYear()}, Built with
        {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a> by {siteAuthor}.
    </Container>
)

Footer.propTypes = {
    siteAuthor: PropTypes.string
}

Footer.defaultProps = {
    siteAuthor: '',
}

export default Footer