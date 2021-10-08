export const register = async (form) => {
    const request
        = await fetch(
            `${process.env.BACK_END_URL}/forms`,
        {
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            method: "POST",
            body: JSON.stringify(form)
        });
    const response = await request.json();
    return response.data;
};

export const read = async () => {
    const request  = await fetch('http://localhost:8080/forms');
    const response = await request.json();
    return response;
}
