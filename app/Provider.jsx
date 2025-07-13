"use client";
import { supabase } from '@/Services/SupabaseClient';
import React ,{useEffect, useState} from 'react'

function Provider  ({children})  {

    const [user, setUser] = useState();

    useEffect(() => {
        createNewUser();
    }, [])
    const createNewUser =  () => {

        supabase.auth.getUser().then(async({data:{user}}) => {

        // Logic to check if user exists

    let { data: users, error } = await supabase
     .from('users')
     .select('*')
     .eq('email', user?.email)
    
     console.log(users)
     // if not exists, create a new user
     if(users?.length === 0) {
        const { data, error } =  await supabase.from('users')
        .insert([
          { email: user?.email, 
            username: user?.user_metadata?.user_name
            //  profile: user?.user_metadata?.profile_pic
             }
        ])
        console.log(data)
        setUser(data);
        return data;
     } 
     setUser(users[0]);
    })
}
  return (
    <userDetailContext.Provider value={{user, setUser}}>
    <div>
      {children}
    </div>
    </userDetailContext.Provider>
  )
}

export default Provider

export const useUser = () => {
    const context = useContext(userDetailContext);
   
    return context;
}
