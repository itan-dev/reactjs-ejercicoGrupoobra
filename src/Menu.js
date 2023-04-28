import React, { useState, useEffect } from "react";

function Menu() {
  const [menuData, setMenuData] = useState({});

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:3000/servicio.json");
      const data = await response.json();
      setMenuData(data);
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>Menú</h1>
      <ul>
        {Object.keys(menuData).map((key) => (
          <li key={key}>
            {key}
            <ul>
              {menuData[key].map((item) => (
                <li key={item.key}>{item.texto}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;
