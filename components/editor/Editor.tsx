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
	FILE, ARRAY
} from "../../statics/components";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {RootState} from "../../redux/store";
import {getSimpleEditorValue} from "../../utils/mapper";
import String from "./basic/String";
import Grid from '@mui/material/Grid';
import {objectMapper} from "../../utils/editorObjectMapper";
import Button from "@mui/material/Button";
import styles from "../../styles/components/Editor.module.scss";
import {inputTemplates} from "../../statics/inputTemplates";
import AddBoxIcon from '@mui/icons-material/AddBox';
import {addField, addToArray} from "../../redux/actions";
import {updateFormData} from "../../api/form";

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

	useEffect(() => {
		const obj = getSimpleEditorValue(editor.object, editor.path);
		let newComponents = [] as any;
		console.log('Obj: ',obj);
		for(const [key, value] of Object.entries(obj)) {
			console.log('EDITOR OBJECT: ',key)
			if(key[0] === "_") continue;
			//Put name first
			if(key === "fields") {
				newComponents.push(objectMapper(key, value, editor));
			} else {
				newComponents.unshift(objectMapper(key, value, editor));
			}
		}
		setComponents(newComponents);
	},[editor.path, editor.object]);

	const addElementToFields = (template:any) => {
		dispatch(addField({newItem: template}))
	}

	const InputTemplates = inputTemplates.map((template:any, idx:number) => {
		return (
			<Grid container
			      direction={"row"}
			      key={`template_${idx}`}
			      className={styles.inputDrawerButtonCtn}
			      justifyContent={"space-evenly"}
			      alignContent={"center"}
			      onClick={() => addElementToFields(template)}
			>
				<Grid item>
					{template._templateName}
				</Grid>
				<Grid item>
					<AddBoxIcon/>
				</Grid>
			</Grid>
		)
	})

	return (
		<Grid container direction={"row"} justifyContent={"space-between"}>
			<Grid item xs={3}>
				<Grid container direction={"column"}>
					<Grid item>
						<h4>Campos</h4>
					</Grid>
					{InputTemplates}
				</Grid>
			</Grid>
			<Grid item xs={8}>
				<Grid container direction={"column"}>
					{components}
					{false && <Grid container direction={"row"} justifyContent={"center"} alignContent={"center"}
					       className={styles.addField}>
						<Button variant="outlined" color={"success"}>Agregar Campo</Button>
					</Grid>}
					<Grid container direction={"row"} key={"save-button"} justifyContent={"center"} className={styles.ctn}>
						<Button
							variant="contained" color={"success"}
							onClick={(e) => {dispatch(updateFormData(editor.object))}}
						>Guardar</Button>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
  )
}
export default Editor;
