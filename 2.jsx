import { useEffect, useState } from "react";

const UseMyQuery = ({ queryFn }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const d = await queryFn(); // DB
      setData(d);
      setLoading(false);
    };
    getData();
  }, []);
    
    return {data, loading};
};

const {data, loading }= UseMyQuery({ queryFn: getProducts });
