// Import Swiper React components
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

const Banner = () => {
  return (
    <section className="bg-white mb-36">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative">
            <img
              className="w-full h-96 md:h-[480px] lg:h-[600px] xl:h-[720px] duration-300 object-cover object-center"
              src="https://i.ibb.co.com/xqkmcnv/banner-1.jpg"
              alt=""
            />
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
            <div className="absolute top-24 sm:top-32 md:top-44 lg:top-52 xl:top-80 max-w-6xl px-3 md:px-5 lg:px-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl duration-300 text-secondary font-semibold mb-3 lg:mb-5">
                Welcome to <span className="font-serif">WUB</span>  Computer society{" "}
              </h2>
              <p className="text-sm md:text-base lg:text-xl mb-5 lg:mb-8 duration-300">
                {" "}
                What lies behind us and what lies before us are tiny matters compared to what lies within us. Every great achievement was
                once considered impossible. Your limitations are only in your mind, and the moment you break through them, you become truly  unstoppable. Take that first step, no matter how small, and the  path will reveal itself. Remember, success is the sum of small efforts, repeated day in and day out.
              </p>
              <Link to="/contact">
                <button className="text-center px-3 md:px-5 lg:px-6 py-1 md:py-3 lg:py-4 bg-secondary hover:bg-secondary/60 duration-300 rounded-lg text-white lg:text-xl">
                  Contact us
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              className="w-full h-96 md:h-[480px] lg:h-[600px] xl:h-[720px] duration-300 object-cover object-center"
              src="https://i.ibb.co.com/H4C28q2/banner.jpg"
              alt=""
            />
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
            <div className="absolute top-24 sm:top-32 md:top-44 lg:top-52 xl:top-80 max-w-6xl px-3 md:px-5 lg:px-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl duration-300 text-secondary font-semibold mb-3 lg:mb-5">
                Welcome to <span className="font-serif">WUB</span>  Computer society{" "}
              </h2>
              <p className="text-sm md:text-base lg:text-xl mb-5 lg:mb-8 duration-300 text-left">
                {" "}
                It always seems impossible until it’s done. But every time you
                push through a barrier, you're reminding yourself of your
                strength. Obstacles are meant to challenge us, not define us. As
                long as you hold onto hope and determination, no mountain is too
                high, no challenge too great. You can achieve what you dream,
                but the journey begins with believing in yourself.
              </p>
              <Link to="/contact">
                <button className="text-center px-3 md:px-5 lg:px-6 py-1 md:py-3 lg:py-4 bg-secondary hover:bg-secondary/60 duration-300 rounded-lg text-white lg:text-xl">
                  Contact us
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative">
            <img
              className="w-full h-96 md:h-[480px] lg:h-[600px] xl:h-[720px] duration-300 object-cover object-center"
              src="https://i.ibb.co.com/Y2Xtn3z/banner-1.jpg"
              alt=""
            />
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
            <div className="absolute top-24 sm:top-32 md:top-44 lg:top-52 xl:top-80 max-w-6xl px-3 md:px-5 lg:px-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl duration-300 text-secondary font-semibold mb-3 lg:mb-5">
                Welcome to <span className="font-serif">WUB</span>  Computer society{" "}
              </h2>
              <p className="text-sm md:text-base lg:text-xl mb-5 lg:mb-8 duration-300">
                {" "}
                The biggest adventure you can ever take is to live the life of
                your dreams. It won’t be easy, and there will be days where
                quitting seems like the only option. But those are the moments
                when growth happens. Failure is just a stepping stone. With
                every setback, you’re getting closer to your breakthrough. The
                key is to never give up, even when things seem impossible.
              </p>
              <Link to="/contact">
                <button className="text-center px-3 md:px-5 lg:px-6 py-1 md:py-3 lg:py-4 bg-secondary hover:bg-secondary/60 duration-300 rounded-lg text-white lg:text-xl">
                  Contact us
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              className="w-full h-96 md:h-[480px] lg:h-[600px] xl:h-[720px] duration-300 object-cover object-center"
              src="https://i.ibb.co.com/yn2v6VG/banner2.jpg"
              alt=""
            />

            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
            <div className="absolute top-24 sm:top-32 md:top-44 lg:top-52 xl:top-80 max-w-6xl px-3 md:px-5 lg:px-10">
              <h2 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-secondary font-semibold mb-3 lg:mb-5">
                Welcome to WUB Computer society{" "}
              </h2>
              <p className="text-sm md:text-base lg:text-xl mb-5 lg:mb-8 duration-300">
                {" "}
                You may encounter many defeats, but you must not be defeated. In
                fact, it may be necessary to encounter the defeats so you can
                know who you are, what you can rise from, how you can still come
                out of it. Resilience is the greatest strength a person can
                have. Embrace every challenge and know that within you is the
                power to overcome, to heal, and to thrive.
              </p>
              <Link to="/contact">
                <button className="text-center px-3 md:px-5 lg:px-6 py-1 md:py-3 lg:py-4 bg-secondary hover:bg-secondary/60 duration-300 rounded-lg text-white lg:text-xl">
                  Contact us
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Banner;
