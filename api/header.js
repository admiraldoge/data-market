export const getHeaderData = async () => {
    const request = await fetch(`${process.env.BACK_END_URL}/api/header`);
    const response = await request.json();
    return response.data;
};
