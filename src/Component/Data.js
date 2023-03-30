import React,{useState,useEffect} from 'react'
import axios from 'axios';
import GithubUsers from './GithubUsers';
import './User.css'
const Data = () => {
  const [users, setUsers] = useState([]);
  // const [loading, setLoading] = useState(true);
  const [search, setsearch] = useState(null);
  const [usersearch, setUsersearch] = useState([]);
  const [selectdata, setselectdata] = useState(null);




  const getUsers = async () => {
      try {
          const response = await axios('https://api.github.com/users');
          // setLoading(false);
                setUsers(response.data);
            if(selectdata==='name')
            {
              const result=response.data.sort((a,b)=>a.login.localeCompare(b.login));
              setUsers(result);
            }
            else if(selectdata==='id')
            {
              const result=response.data.sort((a,b)=>a-b);
              setUsers(result);
            }
            else if(selectdata==='desc')
            {
              const result=response.data.sort((a,b)=>a.node_id.localeCompare(b.node_id));
              setUsers(result);
            }


          
         
      } catch (error) {
          //setLoading(false);
          console.log("my error is "+ error);
      }
  }

  useEffect(() => {
      getUsers();
  }, [selectdata]);

 

 

  const handlesearch= async()=>{
    const res = await axios(`https://api.github.com/users/${search}`);
  setUsersearch(res.data);

  }


    
  return (
    <div>

      <div className='header'> 
      <h1>Serach users</h1>
      <input type='text' required placeholder='enter user name' onChange={(e)=>{setsearch(e.target.value)}}/>
      <button onClick={handlesearch}>submit</button>
      </div>

      <div className='sort'>

    <h1>Sort the user</h1>
        <select onChange={(e)=>setselectdata(e.target.value)}>
        <option value="id">id</option>
          <option value="name">name</option>
          <option value="desc">score</option>

        </select>


      </div>



      <div className='main'>
  { !search &&  users.map((data)=>{

      
 return <GithubUsers user={data}/> 
}) }

{ search && <GithubUsers user={usersearch}/>  }
  
      
    </div>
    </div>
  )
}

export default Data
