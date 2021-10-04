import {ARRAY, CHECK_BOX_INPUT, STRING, STRING_INPUT} from "../statics/components";
import String from "../components/editor/basic/String";
import React from "react";
import Grid from "@mui/material/Grid";
import StringInput from "../components/editor/input/StringInput";
import Array from "../components/editor/basic/Array";
import CheckBoxInput from "../components/editor/input/CheckBoxInput";

export const objectMapper = (key:any, obj:any, editor:any, path?: any) => {
	const realPath = path ? path : editor.path;
	console.log('999Mapping: ',key,obj, 'with path: ',realPath);
	switch (obj._template) {
		case STRING:
			return (<String key={key} keyName={key} path={[...realPath,key]}/>);
			break;
		case ARRAY:
			return (<Array key={key} keyName={key} path={[...realPath,key]}/>);
			//return (ArrayItem(obj, key, editor));
			break;
		case STRING_INPUT:
			return (<StringInput key={key} path={[...realPath,key]}/>);
			break;
		case CHECK_BOX_INPUT:
			return (<CheckBoxInput key={key} path={[...realPath,key]}/>);
			break;
		default:
			return (ObjectItem(key, obj));
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

const ArrayItem = (obj:any, key:any, editor:any) => {
	//console.log('ARRAY: ',obj, key);
	const Items = obj.items.map((item:any, idx:number) => {
		const itemPath = [...editor.path, key, "items"];
		//console.log('Item path: ',itemPath);
		return (
			<Grid container direction={"row"} key={`items-${idx}`}>
				<Grid item>
					{objectMapper(idx, item, editor, itemPath)}
				</Grid>
			</Grid>
		)
	})
	return (
		<Grid container key={key}>
			<Grid container direction={"row"}>
				<Grid item>
					{obj._templateName}
				</Grid>
			</Grid>
			<Grid container direction={"column"}>
				{Items}
			</Grid>
		</Grid>
	)
}
