import React from "react";

const ViewDetailModal = ({
  togglePaymentModal,
  toggleDetailModal,
  toggleViewDetailModal,
}: {
  togglePaymentModal: () => void;
  toggleDetailModal: () => void;
  toggleViewDetailModal: () => void;
}) => {
  return (
    <div className="absolute top-0 left-0 h-screen w-screen flex justify-center items-center">
      <div className="bg-white h-[60%] w-[40%] rounded-3xl shadow-lg">
        <svg
          onClick={toggleViewDetailModal}
          className="h-6 w-6 ml-auto mr-6 mt-6"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
        >
          <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
        </svg>

        <p className="ml-8 text-2xl font-semibold font-serif">
          Hey! your repost is ready to view
        </p>
        <p className="ml-8 text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur,
          harum!
        </p>

        <img className="h-40 w-40 m-auto mt-20" src="report.png" alt="" />
        <div className="flex justify-center mt-10 items-center">
          <p className=" uppercase border-b-2 p-0 w-20 flex justify-center items-center">
            No later
          </p>
          <p
          onClick={togglePaymentModal}
          className=" uppercase ml-10 border-b-2 w-52 bg-green-800 px-12 py-4 rounded-full text-white">
            view detail
          </p>
        </div>
      </div>
    </div>
  );
};

export default ViewDetailModal;
