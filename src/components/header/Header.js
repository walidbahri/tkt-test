import React from 'react'
import "./header.css"

export default function Header() {
  return (
    <div className="container-fluid" >
      <div className="col-6 ">
      <h1>Welcome on TKT dashboard!</h1></div>

    <div className="select-group container py-4">
    <div className="row">
    <div class="col-6 col-md-4">
    <select className="form-select  " aria-label="Sector">
       <option selected>Sector</option>
      </select>
    </div>
    <div class="col-6 col-md-4">
      <select class="form-select " aria-label="Company">
       <option selected>Company</option>
       <option value="1">Company</option>
  
      </select></div>
</div>
    </div>
     </div>
  )
}
