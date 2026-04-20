"use client"
import { useQueryClient } from "@tanstack/react-query"
type User = {
  id: number
  username: string
}


export const Toppers = () => {
  const queryClient = useQueryClient()


  const users = queryClient.getQueryData<User[]>(["users"])
  console.log("cache at render:", users)

  return (
    <div className="bg-red-500">
      {users ? (
        <ul>{users.map(user => <li key={user.id}>{user.username}</li>)}</ul>
      ) : (
        <p>No cache</p>
      )}
    </div>
  )
}