import React,{useState,useEffect} from 'react'
import {useSelector} from "react-redux"
//Components

import DeliveryCorousal from './DeliveryCarousal';

const Delivery = () => {
  cost [restaurantList,setRestaurantList]=useState([]);

  const reduxState=useSelector(
    (globalStore)=>globalStore.restaurant.restaurants
  );
  useEffect(()=>{
    setRestaurantList(reduxState.restaurants)
  },[reduxState.restaurants])
    return (
        <>
            <DeliveryCorousal />
        </>
    )
}

export default Delivery;
