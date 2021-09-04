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
};

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

export const getTama = (u_id, t_id, token) => {
  console.log(`u_id ${u_id}, t_id ${t_id}, token ${token}`)
  return fetch(`/api/usertama/${u_id}/${t_id}`, {
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
  });
};

export const getUniqueTama = (ut_id, token) => {
  console.log(`ut_id ${ut_id}, token ${token}`)
  return fetch(`/api/usertama/uniquetama/${ut_id}`, {
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
  });
};

export const updateTama = (tamaData, token, ut_id) => {
  //tamaData should be the userTama object that the user owns
  //ut_id, tamaData (happiness change), token Auth.getToken(0)
  console.log('tamaData to PUT', tamaData)
  return fetch(`/api/usertama/uniquetama/${ut_id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(tamaData),
  });
};

export const newTama = (user_id, token) => { //! FOR GACHA PURPOSES
  const tama_id = Math.floor(Math.random()*5+1)
  return fetch(`/api/usertama/${user_id}/${tama_id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    }
  })
}

// export const getAllUser = (u_id, token) => {
//   return fetch(`/api/user`);
// };
