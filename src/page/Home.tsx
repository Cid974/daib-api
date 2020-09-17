import React, { useEffect, useState } from "react";
import BulletinForm from "../components/bulletinForm";
import BulletinList from "../components/bulletinList";
import { IPost } from "../store/bulletinStore";

import { fetchBulletins } from "../utils/calls";

const Home = () => {
  const [list, setList] = useState([] as Array<IPost>);

  useEffect(() => {
    const getBulletins = async () => {
      const result = await fetchBulletins();
      if (result.length !== 0) {
        setList(result);
      } else {
        console.log("MONCUL");
      }
    };

    getBulletins();
  }, []);

  return (
    <>
      <BulletinForm />
      <BulletinList list={list} />
    </>
  );
};

export default Home;
