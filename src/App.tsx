import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Layout from "./Layout";
import { fetchConfig } from "./redux/slice/ConfigSlice";

function App() {
  console.log("now call fetchConfig()");
  const dispatch = useDispatch();
  useEffect(() => {
    // fetchItemsを実行
    dispatch(fetchConfig());
  }, [dispatch]);

  return (
    <>
      <Layout />
    </>
  );
}

export default App;
