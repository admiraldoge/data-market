import React from "react";
import {StringType} from "../../../types/form/creation/types";
import { Formik, Form, useField, useFormikContext } from "formik";
import Grid from "@material-ui/core/Grid";
import TextField from '@material-ui/core/TextField';
import {useAppSelector} from "../../../redux/hooks";
import {RootState} from "../../../redux/store";
import {getSimpleEditorValue} from "../../../utils/mapper";
type stringProps = {
    formik: any,
    entity: StringType
};

const SubmitString: React.FC<stringProps> = ({ formik, entity }) => {
    return (
        <Grid key={entity._id} container direction={"row"} justifyContent={"center"} alignItems={"center"}>
            <Grid item xs={12}>
                <TextField
                    fullWidth
                    id={entity._id}
                    name={entity._id}
                    label={entity.label.value}
                    value={formik.values[entity._id]}
                    placeholder={entity.placeholder?.value}
                    onChange={formik.handleChange}
                    error={formik.touched[entity._id] && Boolean(formik.errors[entity._id])}
                    helperText={formik.touched[entity._id] && formik.errors[entity._id]}
                />
            </Grid>
        </Grid>
    );
};

export default SubmitString
