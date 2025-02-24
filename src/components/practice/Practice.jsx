// import React, { useEffect, useState } from 'react'
import "./practice.css"
// const Practice = () => {
//     const [screenSize , setScreenSize] = useState({
//         width:window.innerWidth,
//         height:window.innerHeight,
//     });
// const updateScreenSize = ()=>{
//     setScreenSize({
//         width:window.innerWidth,
//         height:window.innerHeight,
//     });
//  };

//  useEffect(()=>{
//     window.addEventListener("resize",updateScreenSize);

//     return()=>{
//         window.removeEventListener("resize",updateScreenSize)
//     }
//  },[]);
    
//   return (
//     <div className='resizeDiv'>
//         <h1>Scrren size Example!</h1>
//         <p>Resize the windowto set screen size</p>
//         <p>Width:{screenSize.width} px</p>
//         <p>Width:{screenSize.height} px</p>
//     </div>
//   )
// }

// export default Practice


// import React, { useState } from 'react'

// const Practice = () => {
//     const [userName, setUserName] = useState("")
//     const [details,setDetails] = useState("")


//     const getUserName=(event)=>{
//         setUserName(event.target.value)
//     }

//     const userDetails = (event)=>{
//         event.preventDefault()
//         setDetails(userName)
//         localStorage.setItem("userName",userName)
//     }
//   return (
//     <div>
//         <section className="formSection">
//             <h2>{details}</h2>
//             <div className="inputDiv">
//                 <form onSubmit={userDetails}>
//                 <input type="text" placeholder='Type Here'  className="input" onChange={getUserName}/> <br />
//                 <button className="btn" type="submit" >Submit</button>
//                 </form>
//             </div>
//         </section>
//     </div>
//   )
// }

// export default Practice

// import React from 'react'
// //  const sampleArray = ["Devendar",35,"devendar@gmail.com"]

//  const details = [{
//     name:"devendar",
//     age:22,
//     email:"devendar@gmail.com"
//  },
//  {
//     name:"ajay",
//     age:21,
//     email:"ajay@gmail.com"
//  },
//  {
//     name:"jeevan",
//     age:23,
//     email:"jeevan@gmail.com"
//  },]
// const Practice = () => {
//   return (
//     <div>
//         {/* {sampleArray[0]  }

//         {sampleArray[1]} */}
//         <table align="center">
//             <caption align="centar">User Details:</caption>
//             <thead>
//                 <tr>
//                     <th>Name</th>
//                     <th>Age</th>
//                     <th>Email</th>
//                 </tr>
//             </thead>
//             <tbody>
//             {details.map((item)=>{
//             return(
//                 <tr>
//                     <td>{item.name}</td>
//                     <td>{item.age}</td>
//                     <td>{item.email}</td>
//                 </tr>
//             )
//         })}
//             </tbody>
//         </table>
        
//     </div>
//   )
// }

// export default Practice


// import React from 'react'

// const Practice = () => {
//     const arrayData = [
//         {
//           "id": 1,
//           "name": "Leanne Graham",
//           "username": "Bret",
//           "email": "Sincere@april.biz",
//           "address": {
//             "street": "Kulas Light",
//             "suite": "Apt. 556",
//             "city": "Gwenborough",
//             "zipcode": "92998-3874",
//             "geo": {
//               "lat": "-37.3159",
//               "lng": "81.1496"
//             }
//           },
//           "phone": "1-770-736-8031 x56442",
//           "website": "hildegard.org",
//           "company": {
//             "name": "Romaguera-Crona",
//             "catchPhrase": "Multi-layered client-server neural-net",
//             "bs": "harness real-time e-markets"
//           }
//         },
//         {
//           "id": 2,
//           "name": "Ervin Howell",
//           "username": "Antonette",
//           "email": "Shanna@melissa.tv",
//           "address": {
//             "street": "Victor Plains",
//             "suite": "Suite 879",
//             "city": "Wisokyburgh",
//             "zipcode": "90566-7771",
//             "geo": {
//               "lat": "-43.9509",
//               "lng": "-34.4618"
//             }
//           },
//           "phone": "010-692-6593 x09125",
//           "website": "anastasia.net",
//           "company": {
//             "name": "Deckow-Crist",
//             "catchPhrase": "Proactive didactic contingency",
//             "bs": "synergize scalable supply-chains"
//           }
//         },
//         {
//           "id": 3,
//           "name": "Clementine Bauch",
//           "username": "Samantha",
//           "email": "Nathan@yesenia.net",
//           "address": {
//             "street": "Douglas Extension",
//             "suite": "Suite 847",
//             "city": "McKenziehaven",
//             "zipcode": "59590-4157",
//             "geo": {
//               "lat": "-68.6102",
//               "lng": "-47.0653"
//             }
//           },
//           "phone": "1-463-123-4447",
//           "website": "ramiro.info",
//           "company": {
//             "name": "Romaguera-Jacobson",
//             "catchPhrase": "Face to face bifurcated interface",
//             "bs": "e-enable strategic applications"
//           }
//         },
//         {
//           "id": 4,
//           "name": "Patricia Lebsack",
//           "username": "Karianne",
//           "email": "Julianne.OConner@kory.org",
//           "address": {
//             "street": "Hoeger Mall",
//             "suite": "Apt. 692",
//             "city": "South Elvis",
//             "zipcode": "53919-4257",
//             "geo": {
//               "lat": "29.4572",
//               "lng": "-164.2990"
//             }
//           },
//           "phone": "493-170-9623 x156",
//           "website": "kale.biz",
//           "company": {
//             "name": "Robel-Corkery",
//             "catchPhrase": "Multi-tiered zero tolerance productivity",
//             "bs": "transition cutting-edge web services"
//           }
//         },
//         {
//           "id": 5,
//           "name": "Chelsey Dietrich",
//           "username": "Kamren",
//           "email": "Lucio_Hettinger@annie.ca",
//           "address": {
//             "street": "Skiles Walks",
//             "suite": "Suite 351",
//             "city": "Roscoeview",
//             "zipcode": "33263",
//             "geo": {
//               "lat": "-31.8129",
//               "lng": "62.5342"
//             }
//           },
//           "phone": "(254)954-1289",
//           "website": "demarco.info",
//           "company": {
//             "name": "Keebler LLC",
//             "catchPhrase": "User-centric fault-tolerant solution",
//             "bs": "revolutionize end-to-end systems"
//           }
//         },
//         {
//           "id": 6,
//           "name": "Mrs. Dennis Schulist",
//           "username": "Leopoldo_Corkery",
//           "email": "Karley_Dach@jasper.info",
//           "address": {
//             "street": "Norberto Crossing",
//             "suite": "Apt. 950",
//             "city": "South Christy",
//             "zipcode": "23505-1337",
//             "geo": {
//               "lat": "-71.4197",
//               "lng": "71.7478"
//             }
//           },
//           "phone": "1-477-935-8478 x6430",
//           "website": "ola.org",
//           "company": {
//             "name": "Considine-Lockman",
//             "catchPhrase": "Synchronised bottom-line interface",
//             "bs": "e-enable innovative applications"
//           }
//         },
//         {
//           "id": 7,
//           "name": "Kurtis Weissnat",
//           "username": "Elwyn.Skiles",
//           "email": "Telly.Hoeger@billy.biz",
//           "address": {
//             "street": "Rex Trail",
//             "suite": "Suite 280",
//             "city": "Howemouth",
//             "zipcode": "58804-1099",
//             "geo": {
//               "lat": "24.8918",
//               "lng": "21.8984"
//             }
//           },
//           "phone": "210.067.6132",
//           "website": "elvis.io",
//           "company": {
//             "name": "Johns Group",
//             "catchPhrase": "Configurable multimedia task-force",
//             "bs": "generate enterprise e-tailers"
//           }
//         },
//         {
//           "id": 8,
//           "name": "Nicholas Runolfsdottir V",
//           "username": "Maxime_Nienow",
//           "email": "Sherwood@rosamond.me",
//           "address": {
//             "street": "Ellsworth Summit",
//             "suite": "Suite 729",
//             "city": "Aliyaview",
//             "zipcode": "45169",
//             "geo": {
//               "lat": "-14.3990",
//               "lng": "-120.7677"
//             }
//           },
//           "phone": "586.493.6943 x140",
//           "website": "jacynthe.com",
//           "company": {
//             "name": "Abernathy Group",
//             "catchPhrase": "Implemented secondary concept",
//             "bs": "e-enable extensible e-tailers"
//           }
//         },
//         {
//           "id": 9,
//           "name": "Glenna Reichert",
//           "username": "Delphine",
//           "email": "Chaim_McDermott@dana.io",
//           "address": {
//             "street": "Dayna Park",
//             "suite": "Suite 449",
//             "city": "Bartholomebury",
//             "zipcode": "76495-3109",
//             "geo": {
//               "lat": "24.6463",
//               "lng": "-168.8889"
//             }
//           },
//           "phone": "(775)976-6794 x41206",
//           "website": "conrad.com",
//           "company": {
//             "name": "Yost and Sons",
//             "catchPhrase": "Switchable contextually-based project",
//             "bs": "aggregate real-time technologies"
//           }
//         },
//         {
//           "id": 10,
//           "name": "Clementina DuBuque",
//           "username": "Moriah.Stanton",
//           "email": "Rey.Padberg@karina.biz",
//           "address": {
//             "street": "Kattie Turnpike",
//             "suite": "Suite 198",
//             "city": "Lebsackbury",
//             "zipcode": "31428-2261",
//             "geo": {
//               "lat": "-38.2386",
//               "lng": "57.2232"
//             }
//           },
//           "phone": "024-648-3804",
//           "website": "ambrose.net",
//           "company": {
//             "name": "Hoeger LLC",
//             "catchPhrase": "Centralized empowering task-force",
//             "bs": "target end-to-end models"
//           }
//         }
//       ]
//   return (
//     <div>
//         {arrayData.map((user)=>{
//             return(
//                 <div id="arrayData">
//                     <div>{user.username}</div>
//                     <div>{user.email}</div>
//                     <div>{user.address.street}</div>
//                     <div>{user.address.city}</div>
//                     <div>{user.address.zipcode}</div>
//                     <div>{user.address.geo.lat}</div>
//                     <div>{user.company.name}</div>
//                 </div>
//             )
//         })}
//     </div>
//   )
// }

// export default Practice


// import React from 'react'

// let Course = "React practice"
// const Practice = () => {
//     const stringData = {
//         name:"Devendar",
//         age:22,
//         email:"devendar@gmail.com"
//     }
//   return (
//     <div>
//       {`${Course}`}
//       <br />
//       {`String data is:${stringData.name}`}
//     </div>
//   )
// }

// export default Practice


import React from 'react'

const Practice = () => {
  const stringData = [
    {name:"Devendar",age:22,email:"devendar@gmail.com",address:{
      street:"Hyderabad",
      pincode:567788,
    }},
    {name:"Ajay",age:21,email:"ajay@gmail.com",address:{
      street:"Hyderabad",
      pincode:567788,
    }},
    {name:"Kiran",age:22,email:"kiran@gmail.com",address:{
      street:"Hyderabad",
      pincode:567788,
    }},
    {name:"Keerthi",age:20,email:"keerthi@gmail.com",address:{
      street:"Hyderabad",
      pincode:567788,
    }},
    {name:"jeevan",age:22,email:"jeevan@gmail.com",address:{
      street:"Hyderabad",
      pincode:567788,
    }},
    {name:"pradeep",age:23,email:"pradeep@gmail.com",address:{
      street:"Hyderabad",
      pincode:567788,
    }},
  ];
  return (
    <div>
      <div style={{textAlign:"center", marginTop:"30px"}}>
        {stringData.map((data)=>{
          return(
            <div id="arrayData">
              <div>{`String data using string litterals:    ${data.name}`}</div>
              <div>{`Age:  ${data.age}`}</div>
              <div>{`Email:  ${data.email}`}</div>
              <div>{`Address:${data.address.street}`}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Practice
