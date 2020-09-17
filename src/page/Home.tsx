import React, { useContext, useEffect } from "react";
import BulletinForm from "../components/bulletinForm";
import BulletinList from "../components/bulletinList";
import { BulletinContext, GET_BULLETINS } from "../store/bulletinStore";

import { fetchBulletins } from "../utils/calls";

const Home = () => {
  const data = useContext(BulletinContext);
  const { state, dispatch } = data;

  useEffect(() => {
    const getBulletins = async () => {
      const result = await fetchBulletins();
      if (result.length !== 0) {
        dispatch({
          type: GET_BULLETINS,
          payload: { update: false, bulletins: result },
        });
      } else {
        alert("An error has occured. Make sure your token is valid.");
      }
    };

    if (state.update) {
      getBulletins();
    }
  }, [dispatch, state]);

  if (state.update) {
    console.log("ENFIN");
  }

  return (
    <>
      <BulletinForm />
      {state.bulletins.length === 0 ? (
        <span>There are no posts!</span>
      ) : (
        <BulletinList list={state.bulletins} />
      )}
    </>
  );
};

export default Home;
