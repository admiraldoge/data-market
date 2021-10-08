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
import {useFormik} from "formik";
import * as Yup from "yup";
import SubmitString from "./submitInput/SubmitString";
import { submitForm } from "../../api/submission";

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

	const [initialValues, setInitialValues] = useState({} as any);

	const submit = {
		message: "Enviar"
	}

	const validationSchema = Yup.object().shape({

	});

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

	const formik = useFormik({
		initialValues: initialValues,
		validationSchema: validationSchema,
		onSubmit: (values) => {
			console.log('Form save',values);
			dispatch(submitForm(editor.object._id, values));
			//alert(JSON.stringify(values, null, 2));
		},
	});

	const Fields = editor.object.fields.items.map((field:any, idx:number) => {
		//console.log('Field: ',field);
		switch (field._template) {
			case "stringInput":
				return <SubmitString key={`field-${idx}`} formik={formik} entity={field}/>
				break;
		}
	});

	return (
		<Grid container direction={"row"} justifyContent={"center"}>
			<Grid item xs={8}>
				<Grid container direction={"column"}>
					<Grid container direction={"row"} justifyContent={"center"} alignContent={"center"}>
						<h1>{editor.object.name.value}</h1>
					</Grid>
					<form onSubmit={formik.handleSubmit}>
						{Fields}
						<Grid container direction={"row"} justifyContent={"center"} style={{marginTop: "20px"}}>
							<Button
								type="submit"
								variant="contained" color={"success"}
							>{submit.message}</Button>
						</Grid>
					</form>
				</Grid>
			</Grid>
		</Grid>
  )
}
export default Editor;
