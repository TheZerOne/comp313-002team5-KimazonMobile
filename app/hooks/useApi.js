import { useState } from "react";

export default useApi = (apiFunc) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
 
  const request = async (...args) => {
    setLoading(true);
    const response = await apiFunc(...args);
    setLoading(false);


    // console.log(response);
    setError(!response.ok);
    setData(response.data);
    // let res = response;
    // if(dataWithin && Array.isArray(dataWithin))
    // {
     
    //   dataWithin.forEach((elm)=> {
    //     res = res[elm];
    //   })
    // }
    return response;
  };

  return { data, error, loading, request };
};
