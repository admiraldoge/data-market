import type {GetServerSideProps, NextPage} from 'next'
import React, {useEffect, useState} from "react";
import Grid from "@material-ui/core/Grid";
import {useAppDispatch} from "../../../redux/hooks";
import {getFormData} from "../../../api/form";
import Form from "../Form";
import Editor from "../../editor/Editor";
import styles from "../../../styles/form/EditForm.module.scss";


type pageProps = {
	query: { id: string }
}

const EditForm: React.FunctionComponent<pageProps> = ({query}) => {
	const { id } = query;
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getFormData(id));
	},[]);

	return (
		<Grid container direction={"row"} justifyContent={"center"} className={styles.ctn}>
			<Grid item xs={10}>
				<Grid container direction={"row"} justifyContent={"center"} className={styles.title}>
					<h1>Editar formulario</h1>
				</Grid>
			</Grid>
			<Grid item xs={10}>
				<Editor/>
			</Grid>
		</Grid>
	)
}

export default EditForm
