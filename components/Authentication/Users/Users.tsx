"use client"

import { fetchUsers } from "@/services/users"
import {useQuery } from "@tanstack/react-query"
import Link from "next/link"

type User = {
  id: number
  username: string
}

export const Users  = () => {
  const userQuery = useQuery<User[]>({
    queryKey: ["users"],
    queryFn: fetchUsers,
    staleTime: 1000 * 60 * 1,
    gcTime: 1000 * 60 * 1
  })

  if (userQuery.isLoading) return "Loading.."
  if (userQuery.error) return "An Error occured" + userQuery.error.message

  
  return (

  <div>
    <ul>
      {userQuery.data?.map((user)=>(<li key={user.id}>{user.username}</li>))}
    </ul>

    <Link href="/store">Go to Store</Link>
  </div>
  )
}