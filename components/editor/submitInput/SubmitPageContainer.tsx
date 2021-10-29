import React, {ReactElement} from "react";
import {StringType} from "../../../types/form/creation/types";
import { Formik, Form, useField, useFormikContext } from "formik";
import Grid from "@material-ui/core/Grid";
import TextField from '@material-ui/core/TextField';
import {useAppSelector} from "../../../redux/hooks";
import {RootState} from "../../../redux/store";
import {getSimpleEditorValue} from "../../../utils/mapper";
type stringProps = {
	page: string,
	changePage: any
};

const SubmitPage: React.FC<stringProps> = ({ children}) => {
    return (
        <Grid container direction={"column"}>
	        {children}
        </Grid>
    );
};

export default SubmitPage
