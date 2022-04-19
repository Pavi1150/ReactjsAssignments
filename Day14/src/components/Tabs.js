import React from "react";
import { Tab, Tabs as TabsComponent,TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
const Tabs = ({ data }) => (
  <div className="">
    <TabsComponent className="text-center">
      <br /><br />
      {data.map(({ company }, i) => (
        <Tab key={i} className="fs-5 fw-bold comp">{company}</Tab>
      ))}
      {data.map(({ company, title, dates, duties }, i) => (
        <TabPanel key={i} className="text-center ms-5">
          <br /><br />
          <div className="title fs-3 ">{title}</div><br />
          <button className="text-secondary fw-bold fs-5 title border border-none ">{company}</button><br />
          <div className="text-secondary fs-6 title pt-3">{dates}<br /></div><br />
          <div className="limit">{duties}</div><br />
          <button className="bg-info border border-none bor">More Info</button>
        </TabPanel>
      ))}
    </TabsComponent>
  </div>
);
export default Tabs;