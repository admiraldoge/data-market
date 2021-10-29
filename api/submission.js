import {setEditor} from "../redux/actions";

export const submitForm = (formId, formData, submitted) => async dispatch => {
  const body = {
    formId,
    submitted,
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

export const read = async (condition) => {
  const request  = await fetch(`${process.env.BACK_END_URL}/submissions?page=1&limit=100&submitted=${condition}`);
  const response = await request.json();
  return response;
}