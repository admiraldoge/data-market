import {setEditor} from "../redux/actions";

export const getFormData = (formId) => async dispatch => {
    const request
        = await fetch(`${process.env.BACK_END_URL}/forms/${formId}`, {method: "GET", credentials: 'include',});
    const response = await request.json();
    console.log('Response data: ',response);
    dispatch(setEditor({object: response}));
};

export const getPublicFormData = (formId) => async dispatch => {
  const request
    = await fetch(`${process.env.BACK_END_URL}/collectors/${formId}`, {method: "GET", credentials: 'include',});
  const response = await request.json();
  console.log('Response data: ',response);
  dispatch(setEditor({object: response.data.form}));
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
