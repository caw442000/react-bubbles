import React, { useState, useEffect } from "react";
import axios from "axios";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
  const [edit, setEdit] = useState(false)

  useEffect(() => {
    axiosWithAuth()
      .get('/colors')
      .then(res => {
        console.log('this is the response from get request: ', res)
        setColorList(res.data)
        setEdit(false);
      })
      .catch(err=> {
        console.log('there was an error getting data: ', err)
      });
  }, [edit]);

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} setEdit={setEdit} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
