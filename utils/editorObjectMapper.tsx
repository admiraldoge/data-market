import {ARRAY, STRING, STRING_INPUT} from "../statics/components";
import String from "../components/editor/basic/String";
import React from "react";
import Grid from "@mui/material/Grid";
import StringInput from "../components/editor/input/StringInput";

export const objectMapper = (key:any, obj:any, editor:any, path?: any) => {
	console.log('Mapping: ',obj, 'with editor: ',editor);
	const realPath = path ? path : editor.path;
	switch (obj._template) {
		case STRING:
			return (<String key={key} path={[...realPath,key]}/>);
			break;
		case ARRAY:
			return (ArrayItem(obj, key, editor));
			break;
		case STRING_INPUT:
			return (<StringInput key={key} path={[...realPath,key]}/>);
			break;
		default:
			return (ObjectItem(obj, key));
	}
}

const ObjectItem = (obj:any, key:any) => {
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
				{objectMapper(idx, item, editor, itemPath)}
			</Grid>
		)
	})
	return (
		<Grid container spacing={2} key={key}>
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
