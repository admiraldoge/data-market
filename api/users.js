export const register = async (user) => {
    const request
        = await fetch(
            `${process.env.BACK_END_URL}/users`,
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

export const update = async (id, user) => {
  const request
      = await fetch(
          `${process.env.BACK_END_URL}/users/`+id,
      {
          headers: {
              'Content-Type': 'application/json'
          },
          method: "PATCH",
          body: JSON.stringify(user)
      });
  const response = await request.json();
  return response;
};

export const login = async (credentials) => {
  const request
    = await fetch(
    `${process.env.BACK_END_URL}/users/auth`,
    {
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      method: "POST",
      body: JSON.stringify(credentials)
    });
  const response = await request.json();
  return response.data;
};

export const getAll = async () => {
  const request  = await fetch(`${process.env.BACK_END_URL}/users`);
  const response = await request.json();
  return response.items;
}

export const del = async (id) => {
  alert(`${process.env.BACK_END_URL}`+id)
  const request
      = await fetch(
        `${process.env.BACK_END_URL}`+id,
      {
          method: "DELETE",
      });
  const response = await request.json();
  return response;
};
