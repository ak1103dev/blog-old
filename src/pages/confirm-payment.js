import React from "react"
import { Formik, Form } from 'formik'
import axios from 'axios'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Input from "../components/input"
import Button from "../components/button"

const ConfirmPaymentPage = () => (
  <Layout>
    <SEO title="Confirm Payment" />
    <h1>Confirm Payment</h1>
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

export default ConfirmPaymentPage
