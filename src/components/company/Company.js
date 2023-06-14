import React, { useState, useEffect } from "react";
import './company.css'

const Company = ({ data }) => {
  const [company, setCompany] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://test.wertkt.com/api/biz/");
      const data = await response.json();
      console.log(data)
      setCompany(data);
     setLoading(true)
    };

    fetchData();
  }, []);

  return (
    <div>
   {loading ?(<table>
		<thead>
			<tr>
				<th>company</th>
				<th>n° Siren</th>
				<th>category</th>
			</tr>
		</thead>
		<tbody>
    {company && company.slice(0,4).map((row,key) => (
			<tr key={row.id}>
				<td>{row.name}</td>
				<td>{row.siren}</td>
				<td><span id="campanyType">{row.sector}</span></td>
			</tr>))}
		</tbody>
	</table>):
     <div class="spinner-border m-5" role="status">
       <span class="visually-hidden">Loading...</span>
     </div>}
  </div>  
  );
};

export default Company;
