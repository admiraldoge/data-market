import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import React from "react";
import {useRouter} from "next/dist/client/router";
import Grid from "@material-ui/core/Grid";
import * as Yup from "yup";
import {Formik, useField, useFormikContext, useFormik} from "formik";
import String from "./creation/String";
import {stringType} from "../../types/types";

type formProps = {
    validation: any,
    validationSchema: any,
    submit: {
        message: stringType,
        callback?: () => {}
    },
    fields?: any
}

const Form: React.FC<formProps> = ({validation, fields, submit}) => {
    const router = useRouter()
    const { id } = router.query

    const validationSchema = Yup.object(validation);

    const initialValues = fields.map((field:any, idx:number) => {

        switch (field._template) {
            case "string":
                return <String formik={formik} {...field} idx={idx} name={`field_${field._template}_${idx}`}/>
                break;
        }
    });

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    const Fields = fields.map((field:any, idx:number) => {

        switch (field._template) {
            case "string":
                return <String formik={formik} {...field} idx={idx} name={`field_${field._template}_${idx}`}/>
                break;
        }
    });
    return (
        <div>
            <Grid container direction={"row"} justifyContent={"center"}>
                <Grid item xs={8}>
                    <form onSubmit={formik.handleSubmit}>
                        {Fields}
                        <button type="submit">{submit.message.value}</button>
                    </form>
                </Grid>
            </Grid>
        </div>
    )
}

export default Form
