import React, { useState, useEffect } from "react";
import Tabs from "./components/Tabs";
import './tab.css'
function T1() {
  const [datas, setDatas] = useState([])
  useEffect(() => {
    fetch('https://course-api.com/react-tabs-project').then(response => response.json())
      .then(data => setDatas(data))
  }, [])
  return (
    <div>
      <div className="h1 text-center"><u>Experience</u></div>
      <Tabs data={datas} />
    </div>
  );
}
export default T1;