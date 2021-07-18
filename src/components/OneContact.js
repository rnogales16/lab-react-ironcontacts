import React from 'react'

function OneContact(props) {
  console.log(props)
  const {
    handleDelete,
    contact: {
      id,
      pictureUrl, 
      name, 
      popularity
    }
  } = props


  return (
    <tr>
      <td><img src= {pictureUrl} alt= "Contact" id='contactimage'></img></td>
      <td><p>{name}</p></td>
      <td><p>{popularity}</p></td>
      <td><button onClick = {()=>handleDelete(id)}>Delete 🗑</button></td>
    </tr>
  )
}

export default OneContact;