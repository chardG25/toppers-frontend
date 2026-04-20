"use client"

import {useQuery, useMutation, useQueryClient} from "@tanstack/react-query"
import Link from "next/link"

type User = {
  id: number
  username: string
}

export const Users  = () => {
  

  const {isLoading, error, data} = useQuery<User[]>({
    queryKey: ["users"],
    queryFn: () => fetch("http://localhost:3001/api/auth/index").then((res)=>res.json())
  })

  if (isLoading) return "Loading.."
  if (error) return "An Error occured" + error.message

  
  return (

  <div>
    <ul>
      {data?.map((user)=>(<li key={user.id}>{user.username}</li>))}
    </ul>

      <Link href="/store">Go to Store</Link>
  </div>
  )
}