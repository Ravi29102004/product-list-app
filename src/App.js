import React, { useState, useEffect } from 'react';


function App() {
  const [data, setData] = useState([]);
  const fetchData = () => {
    fetch(`https://dummyjson.com/products`)
      .then((response) => response.json())
      .then((actualData) => {
        console.log(actualData);
        setData(actualData.products);
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    fetchData();

   
  }, []);

  return (
    <div className="App">
      <h1>Product List</h1>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Brand</th>
          <th>Image</th>
          <th>Price</th>
          <th>Rating</th>
        </tr>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.title}</td>
            <td>{item.brand}</td>
            <td>
              <img src={item.thumbnail} alt="" height={100} />
            </td>
            <td>{item.price}</td>
            <td>{item.rating}</td>
          </tr>
        ))}
      </tbody>
    </div>
  );
}

export default App;