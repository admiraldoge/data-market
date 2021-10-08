import type {GetServerSideProps, NextPage} from 'next'
import React, {useEffect, useState} from "react";
import Grid from "@material-ui/core/Grid";
import {useAppDispatch} from "../../../redux/hooks";
import {getFormData, getPublicFormData} from "../../../api/form";
import Form from "../Form";
import SubmitEditor from "../../editor/SubmitEditor";


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
			<div style={{height: "100%"}}>
				<Grid container direction={"row"} justifyContent={"center"}>
					<Grid item xs={12} style={{height: "center"}}>
						<SubmitEditor/>
					</Grid>
				</Grid>
			</div>
	)
}

export default FillForm
