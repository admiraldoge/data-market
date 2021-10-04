import React, {useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../../redux/hooks";
import {RootState} from "../../../redux/store";
import {getSimpleEditorValue} from "../../../utils/mapper";
import Grid from "@material-ui/core/Grid";
import {TextField} from "@material-ui/core";
import {updateObject} from "../../../redux/actions";
import styles from "../../../styles/basic/String.module.scss";

type editRichText = {
	keyName: string,
  path: any[]
}

const String: React.FunctionComponent<editRichText>= ({ keyName, path}) => {
  const dispatch = useAppDispatch();
  const editor = useAppSelector((state: RootState) => state.editor.object);
  const string = getSimpleEditorValue(editor, path);
  //console.log(':::String: ',string);

  return (
    <Grid container direction={"column"} key={`string-${keyName}`} className={styles.ctn}>
      <Grid container direction={"row"}>
        <Grid container direction={"column"}>
	        <TextField
		        label={string._templateName}
		        placeholder={string.placeholder}
		        value={string.value}
		        onChange={(e) => {
			        dispatch(updateObject(
				        {
					        obj: {
						        value: e.currentTarget.value
					        },
					        path: path
				        }))
		        }}
	        />
        </Grid>
      </Grid>
    </Grid>
  )
}
export default String;
