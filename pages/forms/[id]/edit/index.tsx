import type {GetServerSideProps, NextPage} from 'next'
import React, {useEffect, useState} from "react";
import {getFormData} from "../../../../api/form"
import {useAppDispatch} from "../../../../redux/hooks";
import { Provider } from 'react-redux'
import store from '../../../../redux/store';
import EditForm from "../../../../components/form/edit/EditForm";
import styles from "../../../../styles/pages/Edit.module.scss";
import Grid from "@material-ui/core/Grid";
import Navbar from '../../../../components/navbar/navbar';

type pageProps = {
	query: { id: string }
}

const Index: React.FunctionComponent<pageProps> = ({query}) => {
    return (
		<>
	    <Navbar />
	    <Provider store={store}>
		    <Grid container direction={"row"} justifyContent={"center"}
		          alignContent={"center"} className={styles.ctn}>
			    <Grid item xs={8}>
				    <EditForm query={query}/>
			    </Grid>
		    </Grid>
	    </Provider>
		</>
    )
}


export const getServerSideProps:GetServerSideProps = async (context) => {
	let query = context.query;
	return { props: {query}}
}

export default Index
