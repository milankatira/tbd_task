import React, { useState } from "react";
import PaymentModal from "../PaymentModal";
import DetailModal from "../DetailModal";
import ViewDetailModal from "../ViewDetailModal";
import NavBar from "./NavBar";
const Home = () => {
  const [showPaymentModal, setshowPaymentModal] = useState(false);
  const [showDetailModal, setshowDetailModal] = useState(false);
  const [showViewDetailModal, setshowViewDetailModal] = useState(true);


  const togglePaymentModal=()=>{
    setshowPaymentModal(prev=>!prev)
  }


  const toggleDetailModal=()=>{
    setshowDetailModal(prev=>!prev)
  }


  const toggleViewDetailModal=()=>{
    setshowViewDetailModal(prev=>!prev)
  }
  return (
    <>
     <NavBar/>
      {showViewDetailModal && <ViewDetailModal
      togglePaymentModal={togglePaymentModal}
      toggleDetailModal={toggleDetailModal}
      toggleViewDetailModal={toggleViewDetailModal}
      />}
      {showPaymentModal && <PaymentModal 
       togglePaymentModal={togglePaymentModal}
       toggleDetailModal={toggleDetailModal}
       toggleViewDetailModal={toggleViewDetailModal}
      />}
      {showDetailModal && <DetailModal 
       togglePaymentModal={togglePaymentModal}
       toggleDetailModal={toggleDetailModal}
       toggleViewDetailModal={toggleViewDetailModal}
      />}
    </>
  );
};

export default Home;
