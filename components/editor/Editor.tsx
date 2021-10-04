import React, {useEffect, useState} from "react";
import {
  BOOLEAN,
  BUTTON,
  COORDINATES, FIELDS,
  FORM_1,
  ICON,
  IMAGE,
  NUMBER,
  RICH_TEXT,
  STRING,
  TEXT,
  VIDEO,
  FILE
} from "../../statics/components";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {RootState} from "../../redux/store";
import {getSimpleEditorValue} from "../../utils/mapper";
import String from "./basic/String";
import Grid from '@mui/material/Grid';

type editorProps = {

}

const Editor: React.FunctionComponent<editorProps> = ({}) => {
	const dispatch = useAppDispatch();
	const editor = useAppSelector((state: RootState) => state.editor);
	const [components, setComponents] = useState([] as any);
  const [dataIsArray, setDataIsArray] = useState(false);
  const [isArrayExpandable, setIsArrayExpandable] = useState(false);
  const objFromStore = getSimpleEditorValue(editor.object, editor.path);
  const isArrayAux = Array.isArray(objFromStore);

	const objectMapper = (key:any, obj:any ) => {
		console.log('Mapping: ',obj);
    switch (obj._template) {
      case STRING:
      	console.log('Returning string:');
        return (<String key={key} path={[...editor.path,key]}/>);
        break;
      default:
        return (ObjectItem(obj, key));
    }
  }

	useEffect(() => {
		const obj = getSimpleEditorValue(editor.object, editor.path);
		let newComponents = [] as any;
		console.log('Obj: ',obj);
		for(const [key, value] of Object.entries(obj)) {
			if(key[0] === "_") continue;
			newComponents.push(objectMapper(key, value));
		}
		setComponents(newComponents);
	},[editor.path, editor.object]);

  const ObjectItem = (obj:any, key:any) => {
	  return (
		  <Grid container spacing={2} key={key}>
			  <Grid item xs={6} md={8}>
				  <Grid item>
					  OBJECT ITEM {obj.label}
				  </Grid>
			  </Grid>
		  </Grid>
	  )
  }

	return (
		<Grid container>
			<Grid item xs={12}>
				{components}
			</Grid>
		</Grid>
  )
}
export default Editor;
