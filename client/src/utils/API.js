export const createUser = (userData) => {
  return fetch('/api/user/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
};

export const loginUser = (userData) => {
  return fetch('/api/user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
}

export const getMe = (token) => {
  return fetch('/api/usertama/me', {
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
  });
};

export const getUser = (u_id, token) => {
  return fetch(`/api/usertama/${u_id}`, {
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
  });
};

export const updateTama = (tamaData, token) => {
  //tamaData should be the userTama object that the user owns
  console.log('tamaData to PUT', tamaData)
  return fetch('/api/usertama/unique/', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(tamaData),
  });
};