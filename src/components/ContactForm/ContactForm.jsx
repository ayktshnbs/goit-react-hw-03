import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./ContactForm.module.css"
import { nanoid } from "nanoid";

const validationSchema = Yup.object().shape({
    name: Yup.string().trim().required("Name is required").min(2, "Name is too short"),
    number: Yup.string().trim().required("Number is required").min(3, "Number is too short"),
});

export default function ContactForm({ onAddContact }) {
    return (
        <div classname ={styles.wrapper}>
        <Formik
            initialValues={{ name: "", number: "" }}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
                const newContact = {
                    id: nanoid(),
                    name: values.name.trim(),
                    number: values.number.trim(),
                };
                const added = onAddContact(newContact);
                if (added) resetForm();
            }}
        >
            {({ isSubmitting }) => (
                <Form className={styles.form}>
                    <label className={styles.label}>
                        Name
                        <Field type="text" name="name" className={styles.input} />
                        <ErrorMessage name="name" component="div" className={styles.error} />
                    </label>
                    <label className={styles.label}>
                        Number
                        <Field type="text" name="number" className={styles.input} />
                        <ErrorMessage name="number" component="div" className={styles.error} />
                    </label>
                    <button type="submit" className={styles.button} disabled={isSubmitting}>
                        Add contact
                    </button>
                </Form>
            )}
        </Formik>
        </div>
    );
}