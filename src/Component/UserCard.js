import React from 'react'



const UserCard = ({ImgUrl, firstName, lastName, country}) => {
  return (
    <div className='userCard'>
        <div className='img_container'>
            <img src={ImgUrl} alt='user' />
        </div>
        <div className='card_info'>
            <h3>{firstName} {lastName}</h3>
            <p>{country}</p>
            <p>{}</p>
        </div>

    </div>
  )
}

export default UserCard