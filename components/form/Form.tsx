import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import React, {useEffect, useState} from "react";
import {useRouter} from "next/dist/client/router";
import Grid from "@material-ui/core/Grid";
import * as Yup from "yup";
import {Formik, useField, useFormikContext, useFormik} from "formik";
import String from "./edit/String";
import {stringType} from "../../types/types";
import {useAppSelector} from "../../redux/hooks";
import {RootState} from "../../redux/store";

type formProps = {
    fields: any
}

const Form: React.FC<formProps> = ({fields=[]}) => {
	const router = useRouter()
	const { id } = router.query
	const editor = useAppSelector((state: RootState) => state.editor);

	const [initialValues, setInitialValues] = useState({} as any);

  const submit = {
      message: "Enviar"
  }

  const validationSchema = Yup.object().shape({

  });

  //const validationSchema = Yup.object(validation);

	 useEffect(() => {
	 	const k = editor.object.fields;
	  console.log('Fields', k);
	  let aux = {} as any;
	  for(let i in fields) {
	    // @ts-ignore
	    aux[fields[i].id] = "";
	  }
	  //console.log('initial values: ',aux);
	   setInitialValues(aux);
	 },[])


  const formik = useFormik({
      initialValues: initialValues,
      validationSchema: validationSchema,
      onSubmit: (values) => {
          console.log('Form save',values);
          //alert(JSON.stringify(values, null, 2));
      },
  });

  const Fields = fields.map((field:any, idx:number) => {
      //console.log('Field: ',field);
      switch (field._template) {
          case "stringInput":
              return <String key={`field-${idx}`} formik={formik} entity={field}/>
              break;
      }
  });
  return (
      <div>
          <Grid container direction={"row"} justifyContent={"center"}>
              <Grid item xs={8}>
                  <form onSubmit={formik.handleSubmit}>
                      {Fields}
                      <Grid container direction={"row"} justifyContent={"center"} style={{marginTop: "20px"}}>
                          <button type="submit">{submit.message}</button>
                      </Grid>
                  </form>
              </Grid>
          </Grid>
      </div>
  )
}

export default Form
