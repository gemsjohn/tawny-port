import { Container, Form, Button, Col, Row, InputGroup } from 'react-bootstrap';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useState } from 'react';
import { Footer } from '../footer';
import { Header } from '../header';

export default function Contact() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  }
  const schema = yup.object().shape({
    name: yup.string().required('Name Required'),
    email: yup.string().email('Invalid Email').required('Email Required'),
    message: yup.string().required('Message Required')
  });
    return (
      <>
      <Header />
      <Container>
      <div className="App">
        <h3 className="extra-spacing">Contact Me!</h3>
      <Formik
      validationSchema={schema}
      initialValues={{
          name: '',
          email: '',
          message: ''
        }}
      >
        {({
          handleChange,
          values,
          touched,
          errors,
        }) => (
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Group className="mb-3" as={Col} md="4" controlId="validationFormik01">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Enter name"
                  value={values.name}
                  onChange={handleChange}
                  // isValid={touched.name && !errors.name}
                  isInvalid={!!errors.name}
                />
              </Form.Group>
              <Form.Group className="mb-3" as={Col} md="4" controlId="validationFormik02">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Email address"
                  value={values.email}
                  onChange={handleChange}
                  isInvalid={!!errors.email}
                />
                 <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" as={Col} md="4" controlId="validationFormik03">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  type="text"
                  name="message"
                  placeholder="Enter message"
                  value={values.message}
                  onChange={handleChange}
                  isInvalid={!!errors.message}
                />
                 <Form.Control.Feedback type="invalid">
                  {errors.message}
                </Form.Control.Feedback>
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
          </Form>
        )}
    </Formik>
        {/* <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control 
              required
              type="text" 
              placeholder="Enter name" 
            />
            <Form.Control.Feedback type="invalid">
              Please enter your name.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control 
              required
              type="email" 
              placeholder="Enter email" 
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Message</Form.Label>
            <Form.Control 
              required
              type="text" 
              placeholder="Enter message" 
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form> */}
      </div>
      </Container>
      <Footer />
      </>
    );
  }