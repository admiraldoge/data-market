export const getFooterData = async () => {
    const request = await fetch(`${process.env.BACK_END_URL}/api/footer`);
    const response = await request.json();
    return response.data;
};
