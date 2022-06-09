import React, { useState } from 'react'
import "./style.css";
import Menu from "./menuApi";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";

const uniqueList = [                            /*  unique list got  */ 
    ...new Set(
      Menu.map((curElem) => {
        return curElem.category;
      })
    ),
    "All",
  ];
  
  console.log(uniqueList);
  
  const Resturant = () => {
    const [menuData, setMenuData] = useState(Menu);
    const [menuList, setMenuList] = useState(uniqueList);
  
    const filterItem = (category) => {
      if (category === "All") {
        setMenuData(Menu);
        return;
      }
  
      const updatedList = Menu.filter((curElem) => {
        return curElem.category === category;
      });
  
      setMenuData(updatedList);
    };
  
    return (           /* props pass */
      <>
        <Navbar filterItem={filterItem} menuList={menuList} />  
        <MenuCard menuData={menuData} />
      </>
      );
    };
  
    export default Resturant;
