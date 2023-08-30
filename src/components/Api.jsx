import axios from "axios";
import { useState, useEffect } from "react";

const Api = () => {
  // Correctly initializing state using useState
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.escuelajs.co/api/v1/products")
      .then((res) => setData(res.data)) // Assuming the API response is an array
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); // Provide an empty dependency array to run the effect only once

  return (
    <div>
      <h1 className="my-5">Platzi Fake Store API</h1>
      <div className="flex flex-row flex-wrap gap-5 ">
        {data.map((item) => {
          const { id, title, images, category } = item;
          return (
            <div key={id} className="flex flex-col shadow-lg  w-[350px] ">
              <img
                src={images[0]}
                alt={`${id} image`}
                className="w-[100%] h-[100%]"
              />
              <div className="flex justify-between px-2">
                <h2 className="capitalize font-bold my-4 text-blue-600">
                  {title}
                </h2>
                <h3 className="capitalize font-thin my-4 px-2 rounded-sm bg-[#be123c] text-sm text-yellow-50">
                  {category.name}
                </h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Api;
