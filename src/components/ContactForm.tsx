import React from 'react';
import { Button, Form } from 'react-bootstrap';
import '../sass/contact-form.scss';
import { useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup.object().shape({
  yourName: yup.string()
    .required("Vennligst skriv ditt navn")
    .min(2, 'Innlegget ditt er for kort - skal være minst 2 tegn.'),
  email: yup.string()
    .email("Dette er ikke en gyldig e-postadresse.")
    .required("Vennligst skriv din e-postadresse."),
  message: yup.string()
    .required("Vennligst gi oss dine tilbakemeldinger.")
    .min(10, 'Innlegget ditt er for kort - skal være minst 10 tegn.')
});

function ContactForm() {
  const { register, handleSubmit, errors } = useForm({
		validationSchema: schema
	});

  function onSubmit(data: any) {
      console.log("data", data);
  }

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group>
          <Form.Label>Navn</Form.Label>
          <Form.Control type="text" name="yourName" placeholder="Skriv ditt navn her." ref={register} />
          {errors.yourName && <p className="text-danger"><small>{errors.yourName.message}</small></p>}
        </Form.Group>

        <Form.Group>
          <Form.Label>E-post</Form.Label>
          <Form.Control type="email" name="email" placeholder="Skriv din e-post her." ref={register} />
          {errors.email && <p className="text-danger"><small>{errors.email.message}</small></p>}
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Tilbakemelding</Form.Label>
          <Form.Control as="textarea" name="message" rows={3} placeholder="Skriv din tilbakemelding her." ref={register} />
          {errors.message && <p className="text-danger"><small>{errors.message.message}</small></p>}
        </Form.Group>

        <Button type="submit">
          SEND INN
        </Button>
      </Form>
    </>
  );
}

export default ContactForm;