export const fetchUsers = () => {
  return fetch("http://localhost:3001/api/auth/index").then((res) => res.json())
}

export const fetchUser = () => {}

export const createUser = () => {}

export const updateUser = () => {}

export const deleteUser = () => {}