import Title from "components/Title";
import React from "react";

function Product() {
  return (
    <section>
      <div className="container-wrapper">
        <div className="text-center">
          <Title
            className="text-black"
          
          >
             Features
          </Title>
        </div>

        <div
          className="flex flex-col sm:flex-row justify-center gap-4 my-12 relative z-10"
      
        >
          <div>
            <img
              src="images/cream.png"
              alt=""
              className=" -top-[120%] absolute -left-[40%] -z-10 w-auto h-12 sm:h-[800px]"
            />
          </div>

          <div className=" text-center">
            <img
              src="images/1.png"
              alt=""
              className="h-auto sm:h-[200px]  w-[200px] sm:w-auto mx-auto"
            />
            <h3 className="font-dream text-lg py-4 ">
            Cute SOLKITTY NFTs
            </h3>
          </div>
          <div className=" text-center">
            <img
              src="images/2.png"
              alt=""
              className="h-auto sm:h-[200px]  w-[200px] sm:w-auto mx-auto"
            />
            <h3 className="font-dream text-lg py-4 ">
            Staking with SOLKITTY
            </h3>
          </div>

       
       
        </div>
        <div className="relative flex justify-center ml-0 sm:ml-14">
        
        <a href="/" target="" className=" bg-[#fff] border-2 rounded-3xl py-1 px-4  font-bold text-sm sm:text-2xl font-dream2 ">
              Buy Now
            </a>
        </div>
      </div>
    </section>
  );
}

export default Product;
