export const getVacancies = async () => {
    const request
        = await fetch(`https://embol.evaluar.com/wp-json/wp/v2/job-listings`);
    const response = await request.json();
    return response;
};
