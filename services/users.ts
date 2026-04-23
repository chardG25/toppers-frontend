export const fetchUsers = async () => {
  const token = localStorage.getItem("token");

  const res = await fetch("http://localhost:3001/api/auth/index", 
    {headers: {"Authorization": `Bearer ${token}`}}
  )

  const data = await res.json()

  if (!res.ok || data.error) {
    throw new Error(data.error || "Unauthorized");
  }

  return data
}


export const createUser = () => {}

export const updateUser = () => {}

export const deleteUser = () => {}