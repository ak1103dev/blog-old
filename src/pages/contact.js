import React from "react"
import { FaFacebook, FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa"
import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"

const Link = styled.a`
  svg {
    font-size: 100px;
    fill: ${props => props.color || 'black'};
  }
`

const contacts = [{
  link: 'https://github.com/ak1103dev',
  icon: FaGithub,
  color: 'black',
}, {
  link: 'https://www.facebook.com/aphichan.chaiyutthasart',
  icon: FaFacebook,
  color: '#4367B2',
}, {
  link: 'https://twitter.com/ak1103dev',
  icon: FaTwitter,
  color: '#1CA1F1',
}, {
  link: 'https://www.linkedin.com/in/apichan-chaiyutthasat-897172171/',
  icon: FaLinkedin,
  color: '#0177B5',
}]

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <h1>Contact</h1>
    {
      contacts.map(({ icon: Icon, link, color }) => (
        <Link key={link} href={link} target="_blank" color={color}>
          <Icon />
        </Link>
      ))
    }
  </Layout>
)

export default ContactPage
