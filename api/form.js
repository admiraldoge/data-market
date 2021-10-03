import {setEditor} from "../redux/actions";

export const getFormData = (formId) => async dispatch => {
    const request
        = await fetch(`${process.env.BACK_END_URL}/forms/${formId}`, {method: "GET"});
    const response = await request.json();
    console.log('Response data: ',response);
    dispatch(setEditor({formData: response}));
};
