import Title from "components/Title";

function Tokenomics() {
  return (
    <section className="container-wrapper bg-[#ffb7ef00] rounded-2xl py-10 sm:py-14 px-4 sm:px-10 relative z-10 shadow-lg border-4 border-[#ffffff]"> 
      <Title className="text-black mb-10 text-center" data-aos="fade-up"
     data-aos-offset="300" data-aos-duration="1500" 
     data-aos-easing="ease-in-sine">Tokenomics</Title>
     <div className=" flex flex-col sm:flex-row items-center justify-center w-full gap-8">
     <div className="bg-[#c6f2ff] my-5 py-5 px-3 rounded-md w-full white-shadow text-center font-semibold">
            <p className=" uppercase">Buy Tax = 0%</p>
            </div> 

            <div className="bg-[#ffcbdf] w-full my-5 py-5 px-3 rounded-md white-shadow text-center font-semibold">
              <p className=" uppercase">Sale tax = 0%</p>

            </div>
     </div>

      <div className="grid sm:grid-cols-2 gap-10 items-center">
        <img src="/images/token.jpeg" className="w-full rounded-full border-2 shadow-lg" alt=""  />
        <div className="" >
     
          <div className="bg-[#dbffc6] my-5 py-5 px-3 rounded-md white-shadow text-center font-semibold">
            <p className=" uppercase">Liquidity = 70%</p>
            </div> 
            <div className="bg-[#e9cdff] my-5 py-5 px-3 rounded-md white-shadow text-center font-semibold">
              <p className=" uppercase">CEX & Partnerships = 10%</p>
            </div>

            <div className="bg-[#ffcbdf] my-5 py-5 px-3 rounded-md white-shadow text-center font-semibold">
              <p className=" uppercase">Burn = 20%</p>

            </div>

        </div>
      </div>
    </section>
  );
}

export default Tokenomics;
