import React, {ReactElement} from "react";
import Grid from "@material-ui/core/Grid";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

type stringProps = {
	page: string,
	changePage: any
};

const SubmitPage: React.FC<stringProps> = ({ page,changePage, children}) => {
    return (
        <Grid container direction={"column"}>
	        <Grid key={page} container direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
		        {page !== "1" && <ArrowBackIosIcon onClick={() => {
			        changePage(parseInt(page) - 1);
			        console.log("Changing page to: ", parseInt(page) - 1);
		        }} style={{cursor: "pointer"}}/>}
		        <Grid item xs={4}>
			        <Grid container justifyContent={"center"}>
				        <h3>Página {page}</h3>
			        </Grid>
		        </Grid>
		        <ArrowForwardIosIcon onClick={() => {
			        changePage(parseInt(page)+1);
			        console.log("Changing page to: ",parseInt(page)+1);
		        }} style={{cursor: "pointer"}}/>
	        </Grid>
	        {children}
        </Grid>
    );
};

export default SubmitPage
