import type {GetServerSideProps, NextPage} from 'next'
import React, {useEffect, useState} from "react";
import Grid from "@material-ui/core/Grid";
import {useAppDispatch} from "../../../redux/hooks";
import {getFormData, getPreview, getPublicFormData} from "../../../api/form";
import Form from "../Form";
import SubmitEditor from "../../editor/SubmitEditor";


type pageProps = {
	query: { id: string },
	isPreview?: boolean
}

const FillForm: React.FunctionComponent<pageProps> = ({query, isPreview = false}) => {
	const { id } = query;
	const dispatch = useAppDispatch();
	const [formData, setFormData] = useState({} as any);

	useEffect(() => {
		if(isPreview) {
			dispatch(getPreview(id));
		} else {
			dispatch(getPublicFormData(id));
		}
	},[]);

	return (
			<div style={{height: "100%"}}>
				<Grid container direction={"row"} justifyContent={"center"}>
					<Grid item xs={12} sm={10} md={6} lg={5} style={{height: "center"}}>
						<SubmitEditor id={id} isPreview={isPreview}/>
					</Grid>
				</Grid>
			</div>
	)
}

export default FillForm
