import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import React from "react";
import {useRouter} from "next/dist/client/router";
import Grid from "@material-ui/core/Grid";
import * as Yup from "yup";
import { Formik, Form, useField, useFormikContext } from "formik";
import String from "../../../components/form/creation/String";

const Edit: React.FC = () => {
    const router = useRouter()
    const { id } = router.query

    return (
        <div>
            <Grid container direction={"row"} justifyContent={"center"}>
                <Grid item xs={8}>

                    <Formik
                        initialValues={{
                            firstName: "",
                            lastName: "",
                            email: "",
                            acceptedTerms: false, // added for our checkbox
                            jobType: "" // added for our select
                        }}
                        validationSchema={Yup.object({
                            firstName: Yup.string()
                                .max(15, "Must be 15 characters or less")
                                .required("Required"),
                        })}
                        onSubmit={async (values, { setSubmitting }) => {
                            console.log('Form submitted, values: ',values);
                            setSubmitting(false);
                        }}
                    >
                        <Form>
                            <String entity={
                                {
                                    label: {
                                        value: "xd",
                                    }
                                }
                            }/>
                            <button type="submit">Guardar</button>
                        </Form>
                    </Formik>
                </Grid>
            </Grid>
        </div>
    )
}

export default Edit
