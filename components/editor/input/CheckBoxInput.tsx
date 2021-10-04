import React, {useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../../redux/hooks";
import {RootState} from "../../../redux/store";
import {getSimpleEditorValue} from "../../../utils/mapper";
import Grid from "@material-ui/core/Grid";
import {TextField} from "@material-ui/core";
import {updateObject} from "../../../redux/actions";
import String from "../basic/String";
import Array from "../basic/Array";
import styles from "../../../styles/input/CheckBoxInput.module.scss";

type editRichText = {
	key: string,
	path: any[]
}

const CheckBoxInput: React.FunctionComponent<editRichText>= ({ path}) => {
	const editor = useAppSelector((state: RootState) => state.editor.object);
	const checkBoxInput = getSimpleEditorValue(editor, path);
	console.log(':::CheckBoxInput: ',checkBoxInput,'with path',path);

	return (
		<Grid container direction={"column"} key={checkBoxInput._id} className={styles.ctn}>
			<Grid container direction={"row"}>
				<String keyName={`input-text-${checkBoxInput._id}`} path={[...path, "label"]}/>
			</Grid>
			<Grid container direction={"row"}>
				<Array keyName={"options"} path={[...path, 'options']}/>
			</Grid>
		</Grid>
	)
}
export default CheckBoxInput;
