import {setEditor} from "../redux/actions";

export const createCollector = async (collector) => {
  const request
    = await fetch(`${process.env.BACK_END_URL}/collectors`,
    {
      method: "POST", credentials: 'include', body: JSON.stringify(collector),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  const response = await request.json();
  console.log('Response data: ',response);
  return response.data;
};

export const read = async () => {
  const request  = await fetch(`${process.env.BACK_END_URL}/collectors?page=1&limit=100`, {credentials: 'include'});
  const response = await request.json();
  return response;
}
