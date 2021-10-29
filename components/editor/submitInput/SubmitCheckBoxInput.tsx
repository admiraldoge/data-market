import React from "react";
import {StringType} from "../../../types/form/creation/types";
import { Formik, Form, useField, useFormikContext } from "formik";
import Grid from "@material-ui/core/Grid";
import TextField from '@material-ui/core/TextField';
import {useAppSelector} from "../../../redux/hooks";
import {RootState} from "../../../redux/store";
import {getSimpleEditorValue} from "../../../utils/mapper";
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';
import {Field} from "ast-types";
type stringProps = {
    formik: any,
    entity: StringType
};

const SubmitCheckBoxInput: React.FC<stringProps> = ({ formik, entity }) => {

	//console.log("Formik checblox entity: ",formik.values, formik.values[entity._id]);
	const values = formik.values[entity._id];
	const Options = entity.options.items.map((option:any, idx:number) => {
		//const isChecked = values.includes('');
		if(!formik.values[entity._id]) return null;
		return (
			<FormControlLabel
				control={
					<Checkbox checked={formik.values[entity._id][idx]} name={`${entity._id}[${idx}]`} onChange={formik.handleChange}/>
				}
				label={option.value}
			/>
		)
	})

	return (
        <Grid container direction={"column"}>
	        <Grid container direction={"row"} style={{marginBottom: "20px"}}>
		        {entity.label.value}
	        </Grid>
	        <Grid key={entity._id} container direction={"row"} justifyContent={"center"} alignItems={"center"}>
		        <Grid item xs={12}>
			        <FormControl
				        id={entity._id}
				        name={entity._id}
				        error={formik.touched[entity._id] && Boolean(formik.errors[entity._id])}
				        component="fieldset"
				        sx={{ m: 3 }}
				        variant="standard"
			        >
				        <FormLabel component="legend">Opciones:</FormLabel>
				        <FormGroup>
					        {Options}
				        </FormGroup>
			        </FormControl>
		        </Grid>
	        </Grid>
        </Grid>
    );
};

export default SubmitCheckBoxInput
