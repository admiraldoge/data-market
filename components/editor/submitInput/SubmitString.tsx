import React from "react";
import {StringType} from "../../../types/form/creation/types";
import Grid from "@material-ui/core/Grid";
import TextField from '@material-ui/core/TextField';
import styles from '../../../styles/submitInput/SubmitString.module.scss';
import {stringInputType} from "../../../statics/types";
type stringProps = {
    formik: any,
    entity: stringInputType
};

const SubmitString: React.FC<stringProps> = ({ formik, entity }) => {
	console.log('String entity: ',entity);
    return (
        <Grid key={entity._id} className={styles.ctn} container direction={"row"} justifyContent={"center"} alignItems={"center"}>
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
