export const setCurrentTama = (id) => {
  try {
    localStorage.setItem('current_userTama_id', id)
  } catch (err) {
    console.log('No usertama with this id!');
    console.error(err);
  }
}

export const getCurrentTama = () => {
  const currentTama = localStorage.getItem('current_userTama_id')
  ? localStorage.getItem('current_userTama_id')
  : null;

  if (!currentTama) {
    console.log('No usertama stored!')
    return
  } else {return currentTama}
}

export const setUserId = (id) => {
  try {
    localStorage.setItem('user_id', id)
  } catch (err) {
    console.log('No user with this id!')
    console.error(err);
  }
}

export const getUserId = () => {
  const user_id = localStorage.getItem('user_id')
  ? localStorage.getItem('user_id')
  : null;

  if (!user_id) {
    console.log('Something went wrong! Not a valid user_id (client/utils)')
    return
  } else {return user_id}
}