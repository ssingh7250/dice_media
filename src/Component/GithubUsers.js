import React from 'react'
import './User.css'
const GithubUsers = (user) => {
   //console.log(user.user.id);
  return (
    <div>

            <div className='area'>
          <div className='mainbox'>
            <div className='img'><img  style={{width:"300px", borderRadius:"10px" }}   src={user.user.avatar_url} alt="img"/> </div>
            <div className='name'>Name-{user.user.login} </div>
            <div className='id'> Id-{user.user.id}</div>
            <div className='id'> Desc-{user.user.node_id}</div>





        </div>
        </div>
                 
      
    </div>
   
  )
}

export default GithubUsers
