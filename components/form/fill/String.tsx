import React from "react";
import {StringType} from "../../../types/form/creation/types";
import { Formik, Form, useField, useFormikContext } from "formik";
import Grid from "@material-ui/core/Grid";
import TextField from '@material-ui/core/TextField';
type stringProps = {
    formik: any,
    entity: StringType
};

const String: React.FC<stringProps> = ({ formik, entity }) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input> and alse replace ErrorMessage entirely.
    const props = {
        label: "Last Name",
        name: "firstName",
        type: "text",
        placeholder: "Doe"
    }

    return (
        <Grid key={entity.id} container direction={"row"} justifyContent={"center"} alignItems={"center"}>
            <Grid item>
                <TextField
                    fullWidth
                    id={entity.id}
                    name={entity.id}
                    label={entity.label.value}
                    value={formik.values[entity.id]}
                    onChange={formik.handleChange}
                    error={formik.touched[entity.id] && Boolean(formik.errors[entity.id])}
                    helperText={formik.touched[entity.id] && formik.errors[entity.id]}
                />
            </Grid>
        </Grid>
    );
};

export default String