import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import React, {useEffect, useState} from "react";
import {useRouter} from "next/dist/client/router";
import Grid from "@material-ui/core/Grid";
import {getFormData} from "../../../api/form"
import * as Yup from "yup";
import Form from "../../../components/form/Form";
import String from "../../../components/form/creation/String";

const Edit: React.FC = () => {
    const router = useRouter()
    const { id } = router.query;
    const [formData, setFormData] = useState({});

    useEffect(() => {
        console.log(router)
         getFormData(id).then((x) => {
             console.log('res: ',x);
         });
        let aux = '614c56546bc8f58a9d55dc78';
        fetch(`${process.env.BACK_END_URL}/forms/${aux}`, {method: "GET"})
            .then(response => response.json())
            .then(data => {
                console.log('Final res',data);
                setFormData(data);
            });

    },[]);
    return (
        <div>
            <Grid container direction={"row"} justifyContent={"center"}>
                <Grid item xs={8}>
                    <Grid container direction={"row"} justifyContent={"center"}>
                        Edit Form
                    </Grid>
                </Grid>
                <Grid item xs={8}>
                    <Form {...formData}/>
                </Grid>
            </Grid>
        </div>
    )
}

export default Edit
