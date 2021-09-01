export const createUser = (userData) => {
  return fetch('/api/user/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
};

export const loginuser = (userData) => {
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