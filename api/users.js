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

export const login = async (credentials) => {
  const request
    = await fetch(
    'http://localhost:8080/users/auth',
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
  const request  = await fetch('http://localhost:8080/users');
  const response = await request.json();
  return response.items;
}

export const del = async (id) => {
  const request
      = await fetch(
          'http://localhost:8080/users/'+id,
      {
          method: "DELETE",
      });
  const response = await request.json();
  return response.data;
};
