import React from "react"
import { Link } from "gatsby"
import { Formik, Form } from 'formik'
import axios from 'axios'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Input from "../components/input"
import Button from "../components/button"

const DonationPage = () => (
  <Layout>
    <SEO title="Donation" />
    <h1>Donation</h1>
    <h2>Confirm Payment</h2>
    <Formik
      onSubmit={(values, { setSubmitting }) => {
        axios.post('https://localhost:9999/api/post', values)
      }}
    >
      {() => (
        <Form>
          <Input placeholder="First Name" />
          <Input placeholder="Last Name" />
          <Button type="submit">
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  </Layout>
)

export default DonationPage