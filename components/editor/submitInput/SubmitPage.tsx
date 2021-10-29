import React, {ReactElement} from "react";
import Grid from "@material-ui/core/Grid";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

type stringProps = {
	page: string,
	changePage: any,
	lastPage?: boolean
};

const SubmitPage: React.FC<stringProps> = ({ page,changePage, lastPage= false,children}) => {
    return (
        <Grid container direction={"column"}>
	        <Grid key={page} container direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
		        <Grid item xs={4}>
			        <Grid container justifyContent={"center"}>
				        <h3>Página {page}</h3>
			        </Grid>
		        </Grid>
	        </Grid>
	        <Grid container direction={"row"} justifyContent={"center"}>
		        <Grid item xs={10}>
			        {children}
		        </Grid>
	        </Grid>
        </Grid>
    );
};

export default SubmitPage
