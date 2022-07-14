import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Product({ data }) {

   return (
      <div>
         <table style={{ "borderWidth": "3px", 'borderColor': "black", 'borderStyle': 'solid' }}>
            <tbody >
               <tr >
                  <th>id</th>
                  <th>userId</th>
                  <th>title</th>
               </tr>
               {data.map(todo => (
                  <tr key={todo.id}>
                     <td> {todo.id}</td>
                     <td>{todo.userId}</td>
                     <td>{todo.title}</td>
                     <td>{todo.completed}</td>
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
   )
}

export default Product