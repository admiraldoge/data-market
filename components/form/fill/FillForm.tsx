import type {GetServerSideProps, NextPage} from 'next'
import React, {useEffect, useState} from "react";
import Grid from "@material-ui/core/Grid";
import {useAppDispatch} from "../../../redux/hooks";
import {getFormData, getPublicFormData} from "../../../api/form";
import Form from "../Form";


type pageProps = {
	query: { id: string }
}

const FillForm: React.FunctionComponent<pageProps> = ({query}) => {
	const { id } = query;
	const dispatch = useAppDispatch();
	const [formData, setFormData] = useState({} as any);

	useEffect(() => {
		dispatch(getPublicFormData(id));
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

export default FillForm
