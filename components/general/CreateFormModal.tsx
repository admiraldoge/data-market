import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {TextField} from "@material-ui/core";
import {useState} from "react";
import {createForm} from "../../api/form";
import {newFormTemplate} from "../../statics/formTemplate";
import {useRouter} from "next/dist/client/router";

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
	backgroundColor: "white"
};

type createFormModal = {
	open:boolean,
	handleOpen:any,
	handleClose:any
}

const CreateFormModal: React.FC<createFormModal> = ({open, handleOpen, handleClose}) => {

	const router = useRouter();
	const [formName, setFormName] = useState();
	const [formPoints, setFormPoints] = useState();

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
				<Typography id="modal-modal-title" variant="h6" component="h2" style={{marginBottom: "20px"}}>
					Crear formulario
				</Typography>
				<TextField
					id="outlined-basic"
					label="Nombre"
					placeholder="Formulario abc..."
					variant="outlined"
					fullWidth
					style={{marginBottom: "20px"}}
					value={formName}
					onChange={(e) => setFormName(e.currentTarget.value)}
				/>
				<TextField
					id="outlined-basic"
					label="Puntos"
					placeholder="Puntos"
					variant="outlined"
					fullWidth
					style={{marginBottom: "20px"}}
					value={formPoints}
					onChange={(e) => setFormPoints(e.currentTarget.value)}
				/>
				<Button variant="contained" color="success" onClick={ async () => {
					const formCreated = (await createForm(newFormTemplate(formName, formPoints))) as any;
					console.log('Form created: ',formCreated);
					handleClose();
					router.push(`forms/${formCreated._id}/edit`);
				}}
				>
					Crear
				</Button>
			</Box>
		</Modal>
	);
}
export default CreateFormModal
