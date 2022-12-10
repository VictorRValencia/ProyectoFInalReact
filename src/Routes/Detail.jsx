import React from 'react'
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";



//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {



  const { id } = useParams();
  const [odontologo, setOdontologo] = useState(null);
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(res =>{ {
      setOdontologo(res.data) 
    }
  })
    .catch(err => console.log(err))
},[id])
  {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
        {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
        console.log(odontologo);
  return (
    <>
     {odontologo ? (
      <table className='table'>
          <tr>
            <td> <strong>Nombre: </strong> {odontologo.name} </td>
            <td> <strong>email: </strong> {odontologo.email}  </td>
            <td> <strong>Telefono: </strong> {odontologo.phone}  </td>
            <td> <strong>Website: </strong> {odontologo.website} </td>
          </tr>
      </table>
   ) : null}
    </>
  )
}

export default Detail