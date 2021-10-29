import {setEditor} from "../redux/actions";

export const createForm = async (form) => {
  const request
    = await fetch(`${process.env.BACK_END_URL}/forms`,
    {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  const response = await request.json();
  console.log('CREATE FORM RESPONSE: ',response.data);
  return response.data;
  //dispatch(setEditor({object: response}));
};

export const getFormData = (formId) => async dispatch => {
    const request
        = await fetch(`${process.env.BACK_END_URL}/forms/${formId}`, {method: "GET", credentials: 'include',});
    const response = await request.json();
    console.log('Response data: ',response);
    dispatch(setEditor({object: response}));
};

export const getPublicFormData = (collectorId) => async dispatch => {
  const request
    = await fetch(`${process.env.BACK_END_URL}/collectors/${collectorId}`, {method: "GET", credentials: 'include',});
  const response = await request.json();
  console.log('Response public? data: ',response);
  dispatch(setEditor({object: response.data.form}));
};

export const getPreview = (formId) => async dispatch => {
  const request
    = await fetch(`${process.env.BACK_END_URL}/forms/${formId}`, {method: "GET", credentials: 'include',});
  const response = await request.json();
  console.log('Response public? data: ',response);
  dispatch(setEditor({object: response}));
};

export const updateFormData = (form) => async dispatch => {
  const request
    = await fetch(`${process.env.BACK_END_URL}/forms/${form._id}`,
    {
      method: "PATCH",
      body: JSON.stringify(form),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  const response = await request.json();
  console.log('Response data: ',response);
  //dispatch(setEditor({object: response}));
};
