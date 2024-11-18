// import React, { createContext, useState, useEffect } from 'react';
// import { getlocalStorage } from '../Utils/Localstorage';

// export const Authcontext = createContext();

// const Authprovide = ({children}) => {
//   const [userdata, setuserdata] = useState(null);

//   useEffect(() => {
//     const { employee, admin } = getlocalStorage();
//     setuserdata({ employee, admin });
//   }, []);

//   // Only render the provider once userdata is available
//   if (!userdata) {
//     return null; // Or a loading spinner/component while the data is being fetched
//   }

//   return (
//     <Authcontext.Provider value={userdata}>
//       {children} {/* Render children once userdata is set */}
//     </Authcontext.Provider>
//   );
// };

// export default Authprovide;



import React, { createContext, useState } from 'react'
import { getlocalStorage } from '../Utils/Localstorage'
export const Authcontext = createContext()
import { useEffect } from 'react'
const Authprovide = ({children}) => {
const [userdata, setuserdata] = useState("")
useEffect(() => {
  const{employee,admin} = getlocalStorage()
  setuserdata({employee, admin})

},[])


  return (
     <Authcontext.Provider value={userdata}>
        {children}
    </Authcontext.Provider>
  )
}

export default Authprovide


