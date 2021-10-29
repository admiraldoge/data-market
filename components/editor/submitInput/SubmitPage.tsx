import React, {ReactElement} from "react";
import Grid from "@material-ui/core/Grid";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

type stringProps = {
	page: string,
	changePage: any
};

const SubmitPage: React.FC<stringProps> = ({ page,changePage, children}) => {
    return (
        <Grid container direction={"column"}>
	        <Grid key={page} container direction={"row"} justifyContent={"center"} alignItems={"center"}>
		        <Grid item xs={6}>
			        <h3>Página {page}</h3>
		        </Grid>
		        <Grid item xs={6}>
			        <NavigateNextIcon onClick={() => {
			        	changePage(parseInt(page)+1);
				        console.log("Changing page to: ",parseInt(page)+1);
			        }} style={{cursor: "pointer"}}/>
		        </Grid>
	        </Grid>
	        {children}
        </Grid>
    );
};

export default SubmitPage
