import React, {useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../../redux/hooks";
import {RootState} from "../../../redux/store";
import {getSimpleEditorValue} from "../../../utils/mapper";
import Grid from "@material-ui/core/Grid";
import {TextField} from "@material-ui/core";
import {updateObject} from "../../../redux/actions";
import {objectMapper} from "../../../utils/editorObjectMapper";

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
			  <Grid item>
				  {objectMapper(idx, item, editor, itemPath)}
			  </Grid>
		  </Grid>
	  )
  })

  return (
    <Grid key={`array-${keyName}`} container direction={"column"}>
	    <Grid container direction={"row"} key={"label"}>
		    <Grid item>
			    {array._templateName}
		    </Grid>
	    </Grid>
	    <Grid container direction={"column"}>
		    {Items}
	    </Grid>
    </Grid>
  )
}
export default Array;
