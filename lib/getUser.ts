import { cookies } from "next/headers";
import { adminAuth, customInitApp } from "./firebase-admin-config";
customInitApp()

// get the user from the session cookie
// if theres no session or its invalid ,return null
const getUser=async ()=>{
    const session=cookies().get('sessoin')?.value
    if(!session){
        return null
    }

}
export default getUser