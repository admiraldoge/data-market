export const register = async (user) => {
    const request
        = await fetch(
            'http://localhost:8080/users',
        {
            headers: {
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(user)
        });
    const response = await request.json();
    return response.data;
};