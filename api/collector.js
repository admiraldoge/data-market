import {setEditor} from "../redux/actions";

export const createCollector = async (formId) => {
  const request
    = await fetch(`${process.env.BACK_END_URL}/collectors`, {method: "GET", credentials: 'include',});
  const response = await request.json();
  console.log('Response data: ',response);
  return response.data;
};
