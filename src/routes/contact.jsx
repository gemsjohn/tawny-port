import { Container, Form, Button, Col, Card } from 'react-bootstrap';
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
  const styles = {
    card: {
      backgroundColor: '#b7e0f2a9',
      borderRadius: 25,
      padding: '1rem'
    }
  }
    return (
      <div className="backdrop">
        <Header />
        <Container>
          <div className="App extra-spacing">
          <Card style={styles.card}>
            <Card.Header as="h5" style={styles.card}>Contact Me!</Card.Header>
            <Card.Body>
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
                            <Form.Label className="form-style">Name</Form.Label>
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
                            <Form.Label className="form-style">Email</Form.Label>
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
                            <Form.Label className="form-style">Message</Form.Label>
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
                          <Button className="contact-card-button" type="submit" href={"mailto:" + values.email}>
                            Submit
                          </Button>
                      </Form>
                    )}
                </Formik>
            </Card.Body>
          </Card>
            
          </div>
        </Container>
        <Footer />
      </div>
    );
  }