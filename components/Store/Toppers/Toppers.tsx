"use client"
import { fetchUsers } from "@/services/users"
import { useQuery } from "@tanstack/react-query"
type User = {
  id: number
  username: string
}

export const Toppers = () => {
  const userQuery = useQuery<User[]>({
    queryKey: ["users"],
    queryFn: fetchUsers,
    networkMode: 'offlinefirst'
  })
  

  return (
    <div className="bg-red-500">
      {userQuery.data ? (
        <ul>{userQuery.data.map(user => <li key={user.id}>{user.username}</li>)}</ul>
      ) : (
        <p>No cache</p>
      )}
    </div>
  )
}