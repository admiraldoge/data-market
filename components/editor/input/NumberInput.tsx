import React, {useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../../redux/hooks";
import {RootState} from "../../../redux/store";
import {getSimpleEditorValue} from "../../../utils/mapper";
import Grid from "@material-ui/core/Grid";
import {TextField} from "@material-ui/core";
import {updateObject} from "../../../redux/actions";
import String from "../basic/String";
import styles from "../../../styles/input/NumberInput.module.scss";

type numberProps = {
	key: string,
	path: any[]
}

const NumberInput: React.FunctionComponent<numberProps>= ({ path}) => {
	const editor = useAppSelector((state: RootState) => state.editor.object);
	const stringInput = getSimpleEditorValue(editor, path);
	//console.log(':::StringInput: ',path,stringInput);

	return (
		<Grid container direction={"row"} className={styles.ctn}>
			<Grid item xs={12}>
				<Grid container direction={"column"} key={stringInput._id}>
					<Grid container direction={"row"} className={styles.label}>
						<Grid item xs={12}>
							<String keyName={`input-text-${stringInput._id}`} path={[...path, "label"]}/>
						</Grid>
					</Grid>
					<Grid container direction={"row"} className={styles.placeholder}>
						<String keyName={`input-text-${stringInput._id}`} path={[...path, "placeholder"]}/>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	)
}
export default NumberInput;
