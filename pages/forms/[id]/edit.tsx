import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import React from "react";
import {useRouter} from "next/dist/client/router";
import Grid from "@material-ui/core/Grid";
import * as Yup from "yup";
import Form from "../../../components/form/Form";
import String from "../../../components/form/creation/String";

const Edit: React.FC = () => {
    const router = useRouter()
    const { id } = router.query

    return (
        <div>
            <Grid container direction={"row"} justifyContent={"center"}>
                <Grid item xs={8}>

                </Grid>
            </Grid>
        </div>
    )
}

export default Edit
