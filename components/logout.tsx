"use client";
import logout from "@/lib/logout-user";

export default function Logout() {
  
  return (
    <form action={logout}>
      <input className="p-2 rounded-md px-2 hover:cursor-pointer bg-sky-500 text-white" type="submit" value={  'Logout'}/>
      
      
    </form>
  );
}
