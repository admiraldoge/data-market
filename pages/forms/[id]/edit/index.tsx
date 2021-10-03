import type {GetServerSideProps, NextPage} from 'next'
import React, {useEffect, useState} from "react";
import {getFormData} from "../../../../api/form"
import {useAppDispatch} from "../../../../redux/hooks";
import { Provider } from 'react-redux'
import store from '../../../../redux/store';
import EditForm from "../../../../components/form/edit/EditForm";


type pageProps = {
	query: { id: string }
}

const Index: React.FunctionComponent<pageProps> = ({query}) => {
    return (
	    <Provider store={store}>
		    <EditForm query={query}/>
	    </Provider>
    )
}


export const getServerSideProps:GetServerSideProps = async (context) => {
	let query = context.query;
	return { props: {query}}
}

export default Index
