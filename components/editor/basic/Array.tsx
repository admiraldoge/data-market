import React, {useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../../redux/hooks";
import {RootState} from "../../../redux/store";
import {getSimpleEditorValue} from "../../../utils/mapper";
import Grid from "@material-ui/core/Grid";
import {TextField} from "@material-ui/core";
import {addToArray, removeFromArray, updateObject} from "../../../redux/actions";
import {objectMapper} from "../../../utils/editorObjectMapper";
import styles from "../../../styles/basic/Array.module.scss";
import AddIcon from '@mui/icons-material/Add';
// @ts-ignore
import {inputTemplates} from "../../../statics/inputTemplates";
import {basicTemplates} from "../../../statics/basicTemplates";
import RemoveIcon from '@mui/icons-material/Remove';

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

  const addElementsToArray = (_itemTemplates:any) => {
  	console.log('itemTemplates',_itemTemplates);
  	for(let i=0; i < basicTemplates.length; i++) {
  		console.log('Checkig if it includes: ',basicTemplates[i]._template);
  		if(_itemTemplates.includes(basicTemplates[i]._template)) {
  			console.log("Adding: ",basicTemplates[i]._template)
  			dispatch(addToArray({
				  newItem: {...basicTemplates[i], "_templateName": array.items.length},
				  path: [...path, "items"]
			  }))
		  }
	  }
  }

  const Items = array.items.map((item:any, idx:number) => {
  	return (
		  <Grid container direction={"row"} justifyContent={"space-between"} key={`${keyName}-items-${idx}`}>
			  <Grid item xs={10}>
				  {objectMapper(idx, item, editor, itemPath)}
			  </Grid>
			  <Grid item xs={1}>
				  <Grid container direction={"row"} justifyContent={"flex-end"}>
					  <RemoveIcon style={{cursor: "pointer", marginTop: "20px"}}
					              onClick={() => dispatch(removeFromArray({path: [...path, "items"], idx: idx}))}
					  />
				  </Grid>
			  </Grid>
		  </Grid>
	  )
  })

  return (
    <Grid key={`array-${keyName}`} container direction={"column"} className={styles.ctn}>
	    <Grid container direction={"row"} justifyContent={"center"}>
		    <Grid item xs={12}>
			    <Grid container direction={"row"} justifyContent={"space-between"} className={styles.title}>
				    <Grid item>
					    {array._templateName}
				    </Grid>
				    <Grid item>
					    <AddIcon style={{cursor: "pointer"}} onClick={()=>addElementsToArray(array._itemTemplates)}/>
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
