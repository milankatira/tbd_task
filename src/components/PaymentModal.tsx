import React from "react";

const PaymentModal = ({
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
      <div className="bg-white h-[60%] w-[60%] rounded-3xl shadow-lg">
        <svg
          onClick={togglePaymentModal}
          className="h-6 w-6 ml-auto mr-6 mt-6"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
        >
          <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
        </svg>

        <div className="flex flex-row items-center">
          <p className="ml-8 text-2xl font-semibold font-serif">
            Basic information
          </p>
          <p className="ml-8">#TBT4554557</p>
        </div>
        <div className="flex flex-row w-full justify-between px-8 mt-8">
          <div className="w-full mr-20 mt-4">
            <div className="flex flex-row w-full justify-between mt-4">
              <div className="text-gray-500">lorem</div>
              <div>lorem</div>
            </div>

            <div className="flex flex-row w-full justify-between mt-4">
              <div className="text-gray-500">lorem</div>
              <div>lorem</div>
            </div>

            <div className="flex flex-row w-full justify-between mt-4">
              <div className="text-gray-500">lorem</div>
              <div>lorem</div>
            </div>
          </div>

          <div className="w-full mr-20 mt-4">
            <div className="flex flex-row w-full justify-between mt-4">
              <div className="text-gray-500">lorem</div>
              <div>lorem</div>
            </div>

            <div className="flex flex-row w-full justify-between mt-4">
              <div className="text-gray-500">lorem</div>
              <div>lorem</div>
            </div>
          </div>
        </div>

        <div className="w-auto rounded-2xl mx-10 mt-4 bg-yellow-50 h-40">
          <p className="ml-20 pt-4 mb-10">samle and report details</p>

          <div className="border-b-2 border-black -mb-3 mx-36" />
          <div className="flex flex-row justify-between px-20">
            <div className="flex justify-center flex-col items-center">
              <svg
                className="h-6 w-6 bg-green-700 rounded-full p-1 fill-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
              </svg>
              <p>Collection details</p>
              <p>01/02/2023</p>
            </div>

            <div className="flex justify-center flex-col items-center">
              <svg
                className="h-6 w-6 bg-green-700 rounded-full p-1 fill-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
              </svg>
              <p>Collection details</p>
              <p>01/02/2023</p>
            </div>

            <div className="flex justify-center flex-col items-center">
              <svg
                className="h-6 w-6 bg-green-700 rounded-full p-1 fill-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
              </svg>
              <p>Collection details</p>
              <p>01/02/2023</p>
            </div>
          </div>
        </div>
        <div className="flex justify-end mr-10 mt-10 items-center">
          <p className="uppercase border-b-2 p-0 w-20 flex justify-center items-center text-green-800 border-green-800">
            No later
          </p>
          <p onClick={toggleDetailModal} className="uppercase font-bold ml-10 border-b-2 w-80 bg-green-800 px-12 py-4 rounded-full text-white">
            procced to view details
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
