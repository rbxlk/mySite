import React from "react"
import PropTypes from "prop-types"


const Footer = ({ siteAuthor }) => (
    <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a> by {siteAuthor}.
    </footer>
)

Footer.propTypes = {
    siteAuthor: PropTypes.string
}

Footer.defaultProps = {
    siteAuthor: '',
}

export default Footer