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
import {inputTemplates} from "../../statics/inputTemplates";
import AddBoxIcon from '@mui/icons-material/AddBox';
import {addField, addToArray} from "../../redux/actions";
import {updateFormData} from "../../api/form";
import {useFormik} from "formik";
import * as Yup from "yup";
import SubmitString from "./submitInput/SubmitString";
import { submitForm } from "../../api/submission";
import SubmitCheckBoxInput from "./submitInput/SubmitCheckBoxInput";
import SubmitPage from "./submitInput/SubmitPage";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import styles from '../../styles/components/SubmitEditor.module.scss';
import {useRouter} from "next/dist/client/router";

type editorProps = {
	isPreview?: boolean
}

const Editor: React.FunctionComponent<editorProps> = ({isPreview = false}) => {
	const dispatch = useAppDispatch();
	const router = useRouter();
	const editor = useAppSelector((state: RootState) => state.editor);
	const [components, setComponents] = useState([] as any);
  const [dataIsArray, setDataIsArray] = useState(false);
  const [isArrayExpandable, setIsArrayExpandable] = useState(false);
  const [page, setPage] = useState(1);
  const objFromStore = getSimpleEditorValue(editor.object, editor.path);
  const isArrayAux = Array.isArray(objFromStore);
  const [pagesCmps, setPagesCmps] = useState([] as any);

	const [initialValues, setInitialValues] = useState({} as any);

	const submit = {
		message: "Enviar"
	}

	const save = {
		message: "Guardar"
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
		let newInitialValues = {} as any;
		for(let i = 0; i < editor.object.fields.items.length; i++) {
			switch (editor.object.fields.items[i]._template) {
				case "stringInput":
					newInitialValues[editor.object.fields.items[i]._id] = "";
					break;
				case "checkBoxInput":
					let options = [];
					for(let j in editor.object.fields.items[i].options.items) options.push(false);
					newInitialValues[editor.object.fields.items[i]._id] = options;
					break;
			}
		}
		setInitialValues(newInitialValues);
		console.log('::NEW INITIAL VALUES: ',newInitialValues);
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
		enableReinitialize: true,
		onSubmit: (values) => {
			console.log('Form save',values);
			dispatch(submitForm(editor.object._id, values, true));
			router.push("/user");
			//alert(JSON.stringify(values, null, 2));
		},
	});

	const handleSave = (values:any) => {
		dispatch(submitForm(editor.object._id, values, false));
		router.push("/user");
	}
	const handleGoBack = (values:any) => {
		router.push("/admin");
	}

	const Fields = editor.object.fields.items.map((field:any, idx:number) => {
		//console.log('Field: ',field);
		switch (field._template) {
			case "stringInput":
				return <SubmitString key={`field-${idx}`} formik={formik} entity={field}/>
				break;
			case "checkBoxInput":
				return <SubmitCheckBoxInput key={`field-${idx}`} formik={formik} entity={field}/>
				break;
		}
	});

	const objectMapper = (field:any, idx:number) => {
		switch (field._template) {
			case "stringInput":
				return <SubmitString key={`field-${idx}`} formik={formik} entity={field}/>
				break;
			case "checkBoxInput":
				return <SubmitCheckBoxInput key={`field-${idx}`} formik={formik} entity={field}/>
				break;
		}
	}


	const Pages = () => {
		let pages = {};
		let lastPage = 1;
		for(let i = 0; i < editor.object.fields.items.length; i++) {
			if(pages[editor.object.fields.items[i].page.value]) {
				pages[editor.object.fields.items[i].page.value] = [...pages[editor.object.fields.items[i].page.value], editor.object.fields.items[i]];
			} else {
				pages[editor.object.fields.items[i].page.value] = [editor.object.fields.items[i]];
			}
			lastPage = Math.max(lastPage,parseInt(editor.object.fields.items[i].page.value));
		}
		console.log(':::Pages object: ',pages);
		const res = [];
		let idx = 0;
		for(const [key,value] of Object.entries(pages)) {
			const inputsInPage = [];
			// @ts-ignore
			for(let i = 0; i < value.length; i++) {
				// @ts-ignore
				inputsInPage.push(objectMapper(value[i],idx));
			}
			res.push(
				<Slide index={idx} key={idx} className={styles.carouselItemCtn}>
					<SubmitPage page={key} lastPage={parseInt(key) === lastPage} changePage={setPage}>{inputsInPage}</SubmitPage>
				</Slide>
			);
			console.log("Comparing: ",page,parseInt(key));
			/*
			if(page == parseInt(key)) {
				console.log("Returning page",page,value);
				return (<SubmitPage page={key} lastPage={parseInt(key) === lastPage} changePage={setPage}>{inputsInPage}</SubmitPage>);
			}

			 */
			idx++;
		}
		return res;
	}


	return (
		<Grid container direction={"row"} justifyContent={"center"}>
			<Grid item xs={10}>
				<Grid container direction={"column"}>
					<Grid container direction={"row"} justifyContent={"center"} alignContent={"center"}>
						<h1>{editor.object.name.value}</h1>
					</Grid>
					<form onSubmit={formik.handleSubmit}>
						<CarouselProvider
							naturalSlideWidth={1000}
							naturalSlideHeight={600}
							totalSlides={2}
							orientation={"horizontal"}
							dragEnabled={false}
							touchEnabled={false}
						>
							<div className={styles.carouselItemCtn}>
								<Slider onClick={(e) => {console.log('clicked')}}>
									{Pages()}
								</Slider>
								<ButtonBack className={styles.backButton}>
									<ArrowBackIosIcon className={styles.backIcon}/>
								</ButtonBack>
								<ButtonNext className={styles.nextButton}>
									<ArrowForwardIosIcon className={styles.backIcon}/>
								</ButtonNext>
							</div>
						</CarouselProvider>
						<Grid container direction={"row"} justifyContent={"space-evenly"} style={{marginTop: "20px"}}>
							{!isPreview && <Button
								variant="contained" color={"warning"}
								onClick={() => handleSave(formik.values)}
							>{save.message}</Button>}
							{!isPreview && <Button
								type="submit"
								variant="contained" color={"success"}
							>{submit.message}</Button>}
							{isPreview && <Button
                variant="contained" color={"success"}
                onClick={() => handleGoBack(formik.values)}
              >Volver</Button>}
						</Grid>
					</form>
				</Grid>
			</Grid>
		</Grid>
  )
}
export default Editor;
