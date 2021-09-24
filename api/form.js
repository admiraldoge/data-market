export const getFormData = async (formId) => {
    let aux = '614c56546bc8f58a9d55dc78';
    console.log('Getting data from ',formId);
    const request
        = await fetch(`${process.env.BACK_END_URL}/forms/${aux}`, {method: "GET"});
    const response = await request.json();
    return response.data;
};