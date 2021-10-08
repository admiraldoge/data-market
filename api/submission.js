import {setEditor} from "../redux/actions";

export const submitForm = (formId, formData) => async dispatch => {
  const body = {
    formId,
    data: formData
  };
  const request
      = await fetch(`${process.env.BACK_END_URL}/submissions`,
    {
      method: "POST",
      credentials: 'include',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  const response = await request.json();
  console.log('Response data: ',response);
};
