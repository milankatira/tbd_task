import React from "react";

const DetailModal = (
  {
    togglePaymentModal,
    toggleDetailModal,
    toggleViewDetailModal,
  }: {
    togglePaymentModal: () => void;
    toggleDetailModal: () => void;
    toggleViewDetailModal: () => void;
  }
) => {
  return (
    <div className="absolute top-0 left-0 h-screen w-screen flex justify-center items-center">
      <div className="bg-white  mt-16 h-[90%] w-[100%] mx-10 rounded-3xl shadow-lg">
        <svg
          onClick={toggleDetailModal}
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

        <div className="w-full flex flex-row px-20 mt-4">
          <div className="w-1/2">
            <div className="flex flex-row gap-4 items-center">
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M32 32C14.3 32 0 46.3 0 64S14.3 96 32 96V384c0 53 43 96 96 96c28.6 0 54.2-12.5 71.8-32.3c.1-14.2 5.6-28.3 16.4-39.1c.2-.2 .1-.6-.2-.6c-30.9 0-56-25.1-56-56s25.1-56 56-56c.3 0 .4-.4 .2-.6c-21.9-21.9-21.9-57.3 0-79.2c2.4-2.4 5-4.6 7.8-6.5V96c17.7 0 32-14.3 32-32s-14.3-32-32-32H160 96 32zM96 192V96h64v96H96zM216 376c28.8 0 43.2 34.8 22.9 55.2c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0c20.4-20.4 55.2-5.9 55.2 22.9c0 13.3 10.7 24 24 24s24-10.7 24-24c0-28.8 34.8-43.2 55.2-22.9c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9C444.8 410.8 459.2 376 488 376c13.3 0 24-10.7 24-24s-10.7-24-24-24c-28.8 0-43.2-34.8-22.9-55.2c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0C410.8 259.2 376 244.8 376 216c0-13.3-10.7-24-24-24s-24 10.7-24 24c0 28.8-34.8 43.2-55.2 22.9c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9c20.4 20.4 5.9 55.2-22.9 55.2c-13.3 0-24 10.7-24 24s10.7 24 24 24zm104-88a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm40 96a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
              </svg>
              <p>Lorem ipsum dolor sit.</p>
              <div
                className="h-5 border-2
 "
              />
              <p>Lorem ipsum dolor sit.</p>
            </div>

            <p className="mt-4 text-gray-400 w-96">
              * Lorem ipsum dolor sit amet consectetur adipisicing elit. A
              laudantium doloribus placeat!
            </p>

            <div className="h-96 w-[450px] mt-10 rounded-3xl shadow-md px-4 py-1">
              <div className="flex flex-row justify-center gap-4 mt-4 border-blue-500 border-2 p-1">
                <p className="border-b-4 border-red-400">Lorem, ipsum.</p>
                <p>Lorem, ipsum.</p>
                <p>Lorem, ipsum.</p>
              </div>

              <div className="mt-10">
                <div className="flex flex-row w-full justify-between items-center py-2">
                  <div>
                    <p>lorem</p>
                    <p className="text-green-700">lorem</p>
                  </div>
                  <button className="bg-red-50 text-red-400 px-8 py-1 rounded-full font-bold">
                    lorem
                  </button>
                </div>

                <div className="flex flex-row w-auto bg-yellow-50 border-l-4 border-red-500 justify-between items-center py-4 px-8">
                  <div>
                    <p>lorem</p>
                    <div className="flex justify-center items-center">
                      <p className="text-green-700 mr-2">lorem</p>
                      <svg
                        className="h-4 w-4 bg-green-700 rounded-full p-1 fill-white"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                      </svg>
                    </div>
                  </div>
                  <button className="bg-red-50 text-red-400 px-8 py-1 rounded-full font-bold">
                    lorem
                  </button>
                </div>

                <div className="flex flex-row w-full justify-between items-center py-2">
                  <div>
                    <p>lorem</p>
                    <p className="text-green-700">lorem</p>
                  </div>
                  <button className="bg-red-50 text-red-400 px-8 py-1 rounded-full font-bold">
                    lorem
                  </button>
                </div>
              </div>

              <div className="flex flex-row justify-center items-center">
                <svg
                  className="h-4 w-4 mr-4 fill-green-800"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                </svg>
                <p className="border-b-2 border-green-800 text-green-800 font-bold uppercase">
                  Download pdf
                </p>
              </div>
            </div>
          </div>

          <div className="w-1/2">
            <div className="bg-red-100 rounded-md p-10">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
                beatae provident?
              </p>
              <p className="border-b-2 border-green-800 text-green-800 font-bold uppercase w-36">
                schedule now
              </p>
            </div>
            <p className="mt-4 font-bold font-serif text-2xl">
              Lorem ipsum dolor sit.
            </p>

            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/zGXGA1dMYu4"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
            <p className="w-[400px] mt-4 text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              voluptas iure at. Blanditiis esse laborum repellendus, suscipit
              quia autem corporis asperiores iste rerum deleniti ipsa. Numquam
              aliquid excepturi blanditiis unde.
            </p>
          </div>
        </div>
        <div className="flex justify-end mr-10 mt-10 items-center">
          <p className="ml-10 border-b-2 w-52 flex justify-center bg-green-800 px-12 py-4 rounded-full text-white">
            Continue
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailModal;
