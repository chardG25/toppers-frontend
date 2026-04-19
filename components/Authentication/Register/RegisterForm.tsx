"use client"

import { Button } from "@/components/ui/button"
import {
Card,
CardAction,
CardContent,
CardDescription,
CardFooter,
CardHeader,
CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRouter } from "next/navigation"
import { useState } from "react"

export const RegisterForm = () => {

  const router = useRouter()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
 
  const handleSubmit = async (e: React.BaseSyntheticEvent) => {
    e.preventDefault()

    const res = await fetch("http://localhost:3001/api/auth/register",
     {method: "POST", 
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({username, password})
     })

     const data = await res.json()

     if (res.ok) {
      router.push("/login")
     }
     else {
      setError(data.error || "Registration Failed")
     }
  }

return (
<div className="flex flex-1 justify-center items-center">

<Card className="w-100 h-80">
  <CardHeader>
    <CardTitle className="text-lg font-bold">Register</CardTitle>

    <CardDescription>
      Fill up below information
    </CardDescription>

    <CardAction>
      <Button variant="link" onClick={()=>router.push("/login")}>Back to Login</Button>
    </CardAction>
  </CardHeader>

  <CardContent>
    <form>
      <div className="flex flex-col gap-6">
        <div className="grid gap-2">
          <Label htmlFor="username">Create Username</Label>
          <Input
            id="username"
            type="text"
            value = {username}
            onChange = {(e)=>setUsername(e.target.value)}
            placeholder="Enter your username"
            required
          />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password">Create Password</Label>
           
          </div>
          <Input id="password"
            type="password" 
            value={password} 
            onChange={(e)=>setPassword(e.target.value)}
            placeholder="Enter your password" 
            required />
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

      </div>
    </form>
  </CardContent>

  <CardFooter className="flex-col w-full h-full items-center justify-center">
    <Button type="submit" className="w-full" onClick={handleSubmit}>
      Create
    </Button>
    
  </CardFooter>

</Card>
</div>
)
}
