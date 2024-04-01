function Hero() {
  return (
    <section className="relative z-10 overflow-hidden">
      {/* <img
        src="/images/house.png"
        className="absolute top-0 left-0 w-full h-full object-fill object-center -z-10"
        alt=""
      /> */}

      <div className="container-wrapper lg:h-screen flex flex-col items-center justify-center pt-6 pb-12 lg:pt-0 lg:pb-0 lg:drop-shadow-[0_0_10rem_white]">
        <img
          src="images/cloud1.png"
          alt=""
          className="x1 absolute top-[5%] sm:top-[20%] left-0 w-auto h-[50px] sm:h-[160px]  "
        />
        <img
          src="images/star.png"
          alt=""
          className="floating  absolute top-[46%] left-[10%] w-auto h-[120px] hidden sm:block"
        />
        <img
          src="images/star.png"
          alt=""
          className="floating  absolute top-[46%] right-[10%] w-auto h-[120px] hidden sm:block"
        />
        <img
          src="images/cloud2.png"
          alt=""
          className="x2 absolute w-auto h-[170px] hidden sm:block"
        />
        <img
          src="images/cloud2.png"
          alt=""
          className="x4 absolute w-auto h-[150px] hidden sm:block"
        />
        <img
          src="images/cloud1.png"
          alt=""
          className="x3 absolute top-[5%] sm:top-[20%] left-0 w-auto h-[50px] sm:h-[170px]  "
        />

        <h2 className=" py-2 font-dream2 text-xl sm:text-2xl font-semibold mt-12">
        KittyWif is the wacky cat with hat for pure giggle champions.
        </h2>
        <img
          src="/images/hero-img.png"
          className="w-full lg:w-[55%] lg:h-[60%] object-contain rounded-full"
        
          alt=""
        />

        <a
          href="https://solscan.io/token/77Pp9QhZVEz9bwe2mBfcpjnS3FMXv4HtTCJdUgQtXYgc"
          target="_blank"
          className=" text-xs py-2 sm:text-xl font-semibold"
        >
          Contract: 77Pp9QhZVEz9bwe2mBfcpjnS3FMXv4HtTCJdUgQtXYgc
        </a>
        <div className="   flex  justify-center gap-6 mt-7 sm:mt-2">
          <a
            href="https://www.dextools.io/app/en/solana/pair-explorer/B9ChTyY3u6ArAea3yzRu5nvEc3ur2hKMaXSE7Aozzuu9?t=1711964830014"
            target="_blank"
            className=" bg-[#fff] border-2 rounded-3xl py-1 px-4  font-bold text-sm sm:text-2xl font-dream2 "
          >
            DexTools
          </a>

          <a
            href="https://t.me/kittywifs"
            target="_blank"
            className=" font-bold text-sm sm:text-2xl font-dream2 bg-[#fff] border-2 rounded-3xl py-1 px-4  "
          >
            Telegram
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
