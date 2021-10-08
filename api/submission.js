import {setEditor} from "../redux/actions";

export const submitForm = (formId, formData) => async dispatch => {
  const body = {
    formId,
    data: formData
  };
  const request
      = await fetch(`${process.env.BACK_END_URL}/submission`,
    {
      method: "POST",
      credentials: 'include',
      body: JSON.stringify(body),
    });
  const response = await request.json();
  console.log('Response data: ',response);
};
