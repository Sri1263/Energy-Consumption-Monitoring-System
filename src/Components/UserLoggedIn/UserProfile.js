import React from 'react'
import './userprofile.css'

export default function UserProfile() {
  return (
    <div className='profileContainer'>
      <div className='profileCard'>
        <table className='billTable'>
          <tr className='tableRow'>
            <td className='tableData'>  Current Usage till date </td>
            <td className='tableData'>  451 kW  </td>
          </tr>
          <tr className='tableRow'>
            <td className='tableData'>  Current Usage Rate  </td>
            <td className='tableData' >  19 kW / day </td>
          </tr>
          <tr className='tableRow'>
            <td className='tableData'>  Estimated Usage for the month </td>
            <td className='tableData'>  583 kW </td>
          </tr>
          <tr className='tableRow'>
            <td className='tableData'>  Estimated Slab  </td>
            <td className='tableData'>  Rs. 7.01 </td>
          </tr>
          <tr className='tableRow'>
            <td className='tableData'>  Estimated Rate  </td>
            <td className='tableData'>  Rs. 4084 </td>
          </tr>
        </table>
        <a href='https://www.tangedco.org/en/tangedco/' target='_blank' rel='noreferrer'>
          <button className='btn'> Click to Pay</button>
        </a>
      </div>
    </div>
  )
}
