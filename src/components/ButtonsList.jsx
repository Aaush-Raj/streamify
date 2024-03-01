import React from 'react'
import Button from './Button';


const buttonNames = ["All", "Live", "Computer Science", "Songs","Meditation Music","Cricket","Cooking","Holi 2024","Valentines"];

const ButtonsList = () => {
  return (
    <div className='flex mt-3'>
     {buttonNames.map(button=><Button key={button} name={button}/>)}
    </div>
  )
}

export default ButtonsList
