import Title from "components/Title";

function About() {
  return (
    <section className=" relative">
      {/* <div>
        <img src="images/bg-rain.png" alt="" className=" absolute -top-[25%] -z-1" />
      </div> */}
      <div className="container-wrapper text-center block relative z-10">
        <div>
          <Title
            className="lh-1_5 mb-3 uppercase"
            data-aos="fade-up"
            data-aos-offset="300"
            data-aos-duration="1500"
            data-aos-easing="ease-in-sine"
          >
            WHAT IS KittyWif ?
          </Title>

          <p className="font-daughter text-base sm:text-xl font-medium max-w-full text-white sm:max-w-3xl mx-auto ">
            Dive into KittyWif, the meme coin realm where cats wear hats and
            giggles reign supreme. Born from the web's love for quirky felines,
            KittyWif is the crypto twist for those who dare to dream and laugh.
            
          </p>

          <p className="font-daughter text-base sm:text-xl font-medium max-w-full text-white sm:max-w-3xl mx-auto ">
          It's more than a meme; it's a journey into a world where fun leads
            the way. Join the laughter-fueled adventure with KittyWif, where
            every transaction is a step into a lighter, brighter digital domain.
          </p>
        </div>

        <div className=" mx-auto text-center my-10 relative z-10">
          {/* <img src="images/about-img.png" alt=""  data-aos="fade-up"
     data-aos-offset="300" data-aos-duration="1500" 
     data-aos-easing="ease-in-sine"/> */}
          <div className=" rounded-sm relative mx-auto flex justify-center gap-10 items-center">
            <img
              src="images/hero2.jpeg"
              alt=""
              className=" h-[350px] mx-auto rounded-3xl"
            />
            <img
              src="images/star.png"
              alt=""
              className=" h-[150px] floating hidden sm:block "
            />
          </div>
        </div>
        {/* <img src="images/sky.png" alt="" className=" absolute -top-[90%] -right-[40%] -z-10 h-[900px] "  /> */}
      </div>
    </section>
  );
}

export default About;
