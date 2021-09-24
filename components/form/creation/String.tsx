import React from "react";
import {StringType} from "../../../types/form/creation/types";
import { Formik, Form, useField, useFormikContext } from "formik";
import Grid from "@material-ui/core/Grid";
import TextField from '@material-ui/core/TextField';
type stringProps = {
    formik: any,
    entity: StringType,
    name: string
};

const String: React.FC<stringProps> = ({ formik, entity, name }) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input> and alse replace ErrorMessage entirely.
    const props = {
        label: "Last Name",
        name: "firstName",
        type: "text",
        placeholder: "Doe"
    }
    const {label} = props;
    const [field, meta, helpers] = useField(props);

    return (
        <Grid container direction={"row"} justifyContent={"center"} alignItems={"center"}>
            <Grid item>
                <TextField
                    fullWidth
                    id={name}
                    name={name}
                    label={entity.label.value}
                    value={formik.values[name]}
                    onChange={formik.handleChange}
                    error={formik.touched[name] && Boolean(formik.errors[name])}
                    helperText={formik.touched[name] && formik.errors[name]}
                />
                <label>
                    {label}
                    <input {...field} {...props}
                    />
                </label>
                {meta.touched && meta.error ? (
                    <div className="error">{meta.error}</div>
                ) : null}
            </Grid>
        </Grid>
    );
};

export default String