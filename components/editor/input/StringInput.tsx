import React, {useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../../redux/hooks";
import {RootState} from "../../../redux/store";
import {getSimpleEditorValue} from "../../../utils/mapper";
import Grid from "@material-ui/core/Grid";
import {TextField} from "@material-ui/core";
import {updateObject} from "../../../redux/actions";
import String from "../basic/String";

type editRichText = {
	key: string,
	path: any[]
}

const StringInput: React.FunctionComponent<editRichText>= ({ path}) => {
	const dispatch = useAppDispatch();
	const editor = useAppSelector((state: RootState) => state.editor.object);
	console.log(':::String input path: ',path);
	const stringInput = getSimpleEditorValue(editor, path);
	console.log(':::StringInput: ',stringInput);

	return (
		<Grid container direction={"column"} key={stringInput._id}>
			<Grid container direction={"row"}>
				<Grid container direction={"column"}>
					<String key={`input-text-${stringInput._id}`} path={[...path, "label"]}/>
				</Grid>
			</Grid>
		</Grid>
	)
}
export default StringInput;
