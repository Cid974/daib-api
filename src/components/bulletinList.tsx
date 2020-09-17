import React, { useEffect, useState } from "react";
import axios from "axios";
import { token } from "../utils/token";

const BulletinList = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const getBulletins = async () => {
      try {
        const result = await axios.get("http://dauth.daios.net/v1/boards", {
          headers: {
            "x-access-token": token,
          },
        });
        if (result.status === 200) {
          console.log(result);
          setList(result.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getBulletins();
  }, []);

  console.log(list);

  return (
    <div>
      {list.length === 0 ? <span>Loading...</span> : <span>List Loaded!</span>}
    </div>
  );
};

export default BulletinList;
