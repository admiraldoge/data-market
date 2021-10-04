import React, {useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../../redux/hooks";
import {RootState} from "../../../redux/store";
import {getSimpleEditorValue} from "../../../utils/mapper";
import Grid from "@material-ui/core/Grid";
import {TextField} from "@material-ui/core";
import {updateObject} from "../../../redux/actions";
import {objectMapper} from "../../../utils/editorObjectMapper";
import styles from "../../../styles/basic/Array.module.scss";


type arrayProps = {
	keyName: string,
  path: any[]
}

const Array: React.FunctionComponent<arrayProps>= ({ keyName, path}) => {
  const dispatch = useAppDispatch();
  const editor = useAppSelector((state: RootState) => state.editor);
  const array = getSimpleEditorValue(editor.object, path);
	const itemPath = [...path, "items"];
  console.log(':::Array: ',array, 'with itempath',itemPath);

  const Items = array.items.map((item:any, idx:number) => {
  	return (
		  <Grid container direction={"row"} key={`${keyName}-items-${idx}`}>
			  <Grid item xs={12}>
				  {objectMapper(idx, item, editor, itemPath)}
			  </Grid>
		  </Grid>
	  )
  })

  return (
    <Grid key={`array-${keyName}`} container direction={"column"} className={styles.ctn}>
	    <Grid container direction={"row"} justifyContent={"center"}>
		    <Grid item xs={12}>
			    <Grid container direction={"row"} className={styles.title}>
				    <Grid item>
					    {array._templateName}
				    </Grid>
			    </Grid>
			    <Grid container direction={"row"}>
				    <Grid item xs={12}>
					    <Grid container direction={"column"}>
						    {Items}
					    </Grid>
				    </Grid>
			    </Grid>
		    </Grid>
	    </Grid>
    </Grid>
  )
}
export default Array;
