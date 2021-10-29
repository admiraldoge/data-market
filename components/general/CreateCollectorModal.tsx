import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {TextField} from "@material-ui/core";
import {useState} from "react";
import {createCollector} from "../../api/collector";
import {newCollectorTemplate} from "../../statics/collectorTemplate";
import {useRouter} from "next/dist/client/router";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from "@material-ui/core/Grid";

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '1px solid #000',
	borderRadius: '5px',
	boxShadow: 24,
	p: 4,
	backgroundColor: "white"
};

type createFormModal = {
	data: any,
	open:boolean,
	handleOpen:any,
	handleClose:any
}

const CreateCollectorModal: React.FC<createFormModal> = ({data, open, handleOpen, handleClose}) => {

	const router = useRouter();
	const [collector, setCollector] = useState({} as any);
	const [collectorName, setCollectorName] = useState("");
	const [isPublic, setIsPublic] = useState(false);
	const [created, setCreated] = useState(false);

	return (
		<Modal
			open={open}
			onClose={handleClose}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
		>
			<Box
				sx={style}
			>
				<Typography id="modal-modal-title" variant="h5" component="h2" style={{marginBottom: "20px"}}>
					Crear URL
				</Typography>
				<Typography id="modal-modal-title" variant="h6" style={{marginBottom: "20px"}}>
					{data.name && data.name.value}
				</Typography>
				<Grid container direction={"row"}>
					<TextField
						id="outlined-basic"
						label="Nombre"
						placeholder="Url abc..."
						variant="outlined"
						fullWidth
						style={{marginBottom: "20px"}}
						value={collectorName}
						onChange={(e) => setCollectorName(e.currentTarget.value)}
					/>
				</Grid>
				<Grid container direction={"row"} style={{marginBottom: "20px"}}>
					<FormControlLabel
						control={<Checkbox value={isPublic} onChange={(e) => {setIsPublic(e.currentTarget.checked)}}/>}
						label="Público"
					/>
				</Grid>
				{!created && <Button variant="contained" color="success" onClick={async () => {
					const collectorCreated = (await createCollector(newCollectorTemplate(data._id, collectorName, "", isPublic))) as any;
					console.log('Collector created: ', collectorCreated);
					setCollector(collectorCreated);
					setCreated(true);
				}}
				>
					Crear
				</Button>}
				{created && <TextField
					id="outlined-basic"
					label="Nombre"
					placeholder="Url abc..."
					variant="outlined"
					fullWidth
					style={{marginBottom: "20px"}}
					value={`http://localhost:3000/c/${collector._id}`}
				/>}
				{created && <Button variant="contained" color="error" onClick={async () => {
					handleClose();
				}}
        >
          Cerrar
        </Button>}
			</Box>
		</Modal>
	);
}
export default CreateCollectorModal
