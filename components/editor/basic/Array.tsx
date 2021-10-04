import React, {useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../../redux/hooks";
import {RootState} from "../../../redux/store";
import {getSimpleEditorValue} from "../../../utils/mapper";
import Grid from "@material-ui/core/Grid";
import {TextField} from "@material-ui/core";
import {updateObject} from "../../../redux/actions";

type editRichText = {
  key: string,
  path: any[]
}

const Array: React.FunctionComponent<editRichText>= ({ path}) => {
  const dispatch = useAppDispatch();
  const editor = useAppSelector((state: RootState) => state.editor.object);
  const array = getSimpleEditorValue(editor, path);
  console.log(':::String: ',array);

  const Items = array.items.map((item:any, idx:number) => {
  	return
  })

  return (
    <Grid container direction={"column"} key={array._id}>
	    <Grid container direction={"row"}>
		    <Grid item>
			    {array._templateName}
		    </Grid>
	    </Grid>
      <Grid container direction={"row"}>
        <Grid container direction={"column"}>
	        <TextField
		        id={array._id}
		        label={array._templateName}
		        placeholder={array.placeholder}
		        value={array.value}
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
export default Array;
