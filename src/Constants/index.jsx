export const baseUrl ="https://patnam-trends-botique.herokuapp.com/api" ;
export const registerUrl= "https://patnam-trends-botique.herokuapp.com/api/register";
export const loginUrl="https://patnam-trends-botique.herokuapp.com/api/login";
export const editProfileUrl="https://patnam-trends-botique.herokuapp.com/api/myuser"






export const auth=(val)=>{
    console.log("valauth",val);
    return  { "Authorization": `Bearer ${val}` }
    
}
export const headers=  { "Authorization": `Bearer ${"ghjg"}` }