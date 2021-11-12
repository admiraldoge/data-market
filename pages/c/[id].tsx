import type {GetServerSideProps, NextPage} from 'next'
import React, {useEffect, useState} from "react";
import { Provider } from 'react-redux'
import store from '../../redux/store';
import EditForm from "../../components/form/edit/EditForm";
import styles from "../../styles/pages/C.module.scss";
import Grid from "@material-ui/core/Grid";
import FillForm from "../../components/form/fill/FillForm";
import Head from "../../components/default/Head";
import {getCollectorData, getPublicFormData} from "../../api/form";


type pageProps = {
	query: { id: string },
	head: any
}

const Index: React.FunctionComponent<pageProps> = ({query, head}) => {
    return (
    	<div>
		    <Head
			    {...head}
			    url={`${process.env.FRONT_END_URL}`}
		    />
		    <Provider store={store}>
			    <Grid container direction={"row"} className={styles.ctn}>
				    <Grid item xs={12}>
					    <FillForm query={query}/>
				    </Grid>
			    </Grid>
		    </Provider>
	    </div>
    )
}


export const getServerSideProps:GetServerSideProps = async (context) => {
	let query = context.query;
	const collectorData = await getCollectorData(query.id);
	console.log('CollectorData: ',collectorData);
	const head = {
		"_template" : "head",
			"_templateName" : "SEO",
			"title" : {
			"_template" : "string",
				"value" : collectorData.collector.name
		},
		"description" : {
			"_template" : "string",
				"value" : "Data-Market"
		},
		"robots" : {
			"_template" : "string",
				"value" : "index"
		},
		"image" : {
			"_template" : "image",
				"alt" : "",
				"src" : "https://estnn.com/wp-content/uploads/2021/09/d2beastcoastlogo-747x420.jpg",
				"mimeType" : ""
		},
		"imageWidth" : {
			"_template" : "number",
				"value" : "0"
		},
		"imageHeight" : {
			"_template" : "number",
				"value" : "0"
		}
	};
	return { props: {query, head}}
}

export default Index
