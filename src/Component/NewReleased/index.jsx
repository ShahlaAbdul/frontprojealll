import React, { useContext, useEffect, useState } from "react";
import "./style.scss";
import { SearchContext } from "../../useContect/SearchContext";

function NewReleased() {
  const [fetchData, setFetchData] = useState([]);
  const { search, handleSearch } = useContext(SearchContext)
  const [sortedProperty, setSortedProperty] = useState(null)

  useEffect(() => {
    fetch("http://localhost:7000/")
      .then((res) => res.json())
      .then((data) => setFetchData(data));
  }, []);

  return (
    <div>
      <div className="new_released">
        <div className="new_released_head">
          <h1>New realeased Products for Women</h1>
          <p>Who are in extremely love with eco friendly system.</p>
        </div>
        <div className="new_released_search">
          <div className="search">
            <input
              type="text"
              name=""
              id=""
              placeholder="search by name"
              onChange={(x) => handleSearch(x)}
            />
          </div>
          <div className="filter">
            <button onClick={()=>setSortedProperty({property:"price", asc:false})}>A-z</button>
            <button onClick={()=>setSortedProperty({property:"price", asc:true})}>Z-a</button>
            <button onClick={()=>setSortedProperty(null)}>Default</button>
          </div>
        </div>
        <div className="new_released_cards">
          {fetchData
            .filter((x) => x.name.toLowerCase().includes(search.toLowerCase()))
            .sort((a, b) => {
              if (sortedProperty && sortedProperty.asc) {
                return (
              a[sortedProperty.property] > b[sortedProperty.property] ? 1 : b[sortedProperty.property] > a[sortedProperty.property] ? -1 : 0

                )
              } else if(sortedProperty && sortedProperty.asc===false) {
                return (
              a[sortedProperty.property] < b[sortedProperty.property] ? 1 : b[sortedProperty.property] < a[sortedProperty.property] ? -1 : 0

                )
                
              } else{
            return 0;
              }
            }
            )
            .map((x) => (
              <div className="new_released_card">
                <ul className="card" key={x._id}>
                  <li>
                    <img src={x.image} alt="" />
                  </li>
                  <li>{x.name}</li>
                  <li className="price">${x.price}</li>
                </ul>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default NewReleased;
