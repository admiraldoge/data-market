import React from "react";
import {StringType} from "../../../types/form/creation/types";
import { Formik, Form, useField, useFormikContext } from "formik";
import Grid from "@material-ui/core/Grid";
type stringProps = {
    entity: StringType
};

const String: React.FC<stringProps> = ({ entity }) => {
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