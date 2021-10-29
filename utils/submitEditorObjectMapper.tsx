import {ARRAY, CHECK_BOX_INPUT, STRING, STRING_INPUT} from "../statics/components";
import String from "../components/editor/basic/String";
import React from "react";
import Grid from "@mui/material/Grid";
import StringInput from "../components/editor/input/StringInput";
import Array from "../components/editor/basic/Array";
import CheckBoxInput from "../components/editor/input/CheckBoxInput";
import SubmitString from "../components/editor/submitInput/SubmitString";
import SubmitCheckBoxInput from "../components/editor/submitInput/SubmitCheckBoxInput";

export const objectMapper = (key:any, obj:any, editor:any, path?: any) => {
	const realPath = path ? path : editor.path;
	console.log('999Mapping: ',key,obj, 'with path: ',realPath);
	switch (obj._template) {
		case STRING_INPUT:
			return (<SubmitString key={key} path={[...realPath,key]}/>);
			break;
		case CHECK_BOX_INPUT:
			return (<SubmitCheckBoxInput key={key} path={[...realPath,key]}/>);
			break;
		default:
			return null;
	}
}

const ObjectItem = ( key:any, obj:any) => {
	return (
		<Grid container spacing={2} key={key}>
			<Grid item xs={6} md={8}>
				<Grid item>
					OBJECT ITEM
				</Grid>
			</Grid>
		</Grid>
	)
}
