import type {GetServerSideProps, NextPage} from 'next'
import React, {useEffect, useState} from "react";
import { Provider } from 'react-redux'
import store from '../../../../redux/store';
import styles from "../../../../styles/pages/Preview.module.scss";
import Grid from "@material-ui/core/Grid";
import FillForm from "../../../../components/form/fill/FillForm";


type pageProps = {
	query: { id: string }
}

const Index: React.FunctionComponent<pageProps> = ({query}) => {
	return (
		<Provider store={store}>
			<Grid container direction={"row"} className={styles.ctn}>
				<Grid item xs={12}>
					<FillForm query={query}/>
				</Grid>
			</Grid>
		</Provider>
	)
}


export const getServerSideProps:GetServerSideProps = async (context) => {
	let query = context.query;
	return { props: {query}}
}

export default Index
