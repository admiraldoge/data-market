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
import { SxProps } from '@mui/system';

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
} as SxProps;

type createFormModal = {
	data: any,
	open:boolean,
	handleOpen:any,
	handleClose:any,
	referral?: boolean,
	originalCollectorData?: any
}

const CreateCollectorModal: React.FC<createFormModal> = ({data, open, handleOpen, handleClose, referral= false, originalCollectorData}) => {
	const router = useRouter();
	const [collector, setCollector] = useState({} as any);
	const [collectorName, setCollectorName] = useState("");
	const [isPublic, setIsPublic] = useState(false);
	const [created, setCreated] = useState(false);
	const [formPoints, setFormPoints] = useState("" );
	const [formSharePoints, setFormSharePoints] = useState( "" );

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
				{!referral && <Grid container direction={"row"} style={{marginBottom: "20px"}}>
					<TextField
						id="outlined-basic"
						label="Puntos al llenar"
						placeholder="100"
						variant="outlined"
						fullWidth
						style={{marginBottom: "20px"}}
						value={formPoints}
						onChange={(e) => setFormPoints(e.currentTarget.value)}
					/>
				</Grid>}
				{!referral && <Grid container direction={"row"} style={{marginBottom: "20px"}}>
					<TextField
						id="outlined-basic"
						label="Puntos al compartir"
						placeholder="20"
						variant="outlined"
						fullWidth
						style={{marginBottom: "20px"}}
						value={formSharePoints}
						onChange={(e) => setFormSharePoints(e.currentTarget.value)}
					/>
				</Grid>}
				{!created && <Button variant="contained" color="success" onClick={async () => {
					const collectorCreated
						= (await createCollector(newCollectorTemplate(
							data._id,
						collectorName,
						"",
						isPublic,
						referral ? originalCollectorData.fillPoints.value : formPoints,
						referral ? originalCollectorData.sharePoints.value : formSharePoints,
					))) as any;
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
					value={`http://143.110.239.224:3000/c/${collector._id}`}
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
