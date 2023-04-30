import { Header } from "../components/Header";
import MusicPlayer from "../MusicPlayer/index";
import { Charts } from "../components/Charts";
import { Link } from "react-router-dom";
import { useGetTopChartsQuery } from "../app/apiServices";
import { Artist } from "../components/Artist";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import { Navbar } from "../components/Navbar";
import { Logo } from "../components/Logo";
import { Outlet } from "react-router";
import { useSelector } from "react-redux";
import { useGetGoogleUsersQuery, useGetUsersQuery } from "../app/apiAuthUser";
import { useDispatch } from "react-redux";
import { setCredentials, setIsLogin } from "../app/features/authUserSlice";


export const RootLayout = () => {
  const dispatch = useDispatch();
  const { data: topChart, isLoading, isError, error } = useGetTopChartsQuery();
  const { data: socialData } = useGetGoogleUsersQuery();
  const { data: userData } = useGetUsersQuery();
  const updateUserState = () => {
    if (userData && !userData.Error) {
      console.log('entre a userData:',userData);
      dispatch(setCredentials(userData));
      dispatch(setIsLogin({ isLogin: true }));
    } else if (socialData && !socialData.Error) {
      console.log('entre a socialData:',socialData);
      dispatch(setCredentials(socialData));
      dispatch(setIsLogin({ isLogin: true }));
    }
  };
  updateUserState();

  const { activeSong, isPlaying } = useSelector((state) => state.player);
  if (isLoading) {
    return (
      (
        <div className="w-screen bg-gradient-to-r from-black to-[#030d4f] ">
          {" "}
        </div>
      ) || "Loading...."
    );
  }
  if (isError) {
    return error.message;
  }
  const topChart6 = topChart.slice(0, 6);

  return (
    <div className="main-container  relative  bg-gradient-to-r from-black to-[#030d4f]  min-h-screen   min-w-[375px] px-5 md:pl-0 md:pr-2 md:grid  md:grid-cols-[max-content_1fr] md:grid-rows-[max-content_max-content_1fr_max-content] lg:grid-cols-[1fr_1fr_max-content] lg:grid-rows-[max-content_max-content_1fr] lg:overflow-hidden lg:h-screen">
      <div className=" sidebar hidden px-1 md:block md:row-start-1 md:row-end-[-1] h-auto  bg-[#13141a]/70">
        <Logo />
        <Navbar />
      </div>

      <div className="header  md:left-0 absolute z-50 bg-gradient-to-r from-black to-[#030d4f] right-[20px] left-[20px] min-w-[320px]  lg:bg-transparent lg:static md:w-[calc(95vw_-_14rem)] md:px-0 md:h-[78px] md:col-start-2 md:col-end-[-1] md:row-start-1 md:row-end-2">
        <Header />
      </div>

      <div className=" overflow-y-auto lg:overflow-y-visible  h-[calc(100vh_-_10rem)] lg:h-auto  lg:flex lg:flex-row-reverse ">
        <div className="">
          <div className=" top-chart pt-28 md:p lg:pt-0 md:w-[calc(95vw_-_14rem)] md:px-2 md:col-start-2 md:col-end-[-1] md:row-start-2 md:row-end-3 lg:col-start-3 lg:w-[calc(95vw_-_14rem_-_320px)] lg:max-w-[500px] ">
            <div className="flex justify-between items-center text-white pb-4 ">
              <h2 className="text-2xl font-bold pb-2">Top Charts</h2>
              <p className="text-white/60 ">See more</p>
            </div>

            {topChart6
              ?.filter((element, index) => {
                return element.hub.actions !== undefined;
              })
              .map((item, index) => {
                return (
                  <div key={item.key}>
                    <Link to={"/chart"}>
                      {" "}
                      <Charts
                        code={index + 1 + "."}
                        index={index}
                        titleSong={item.title}
                        author={item.subtitle}
                        img={item.images?.coverart}
                        song={item}
                        id={item.key}
                        activeSong={activeSong}
                        isPlaying={isPlaying}
                        data={topChart6}
                      />
                    </Link>
                  </div>
                );
              })}
          </div>

          <div className="top-artist pt-5 pb-12 md:px-2 md:h-max md:w-[calc(95vw_-_14rem)]  md:col-start-2 md:col-end-[-1] md:row-start-3 md:row-end-4 lg:col-start-3 lg:w-[calc(95vw_-_14rem_-_320px)] lg:max-w-[500px] ">
            <div className="flex justify-between items-center text-white">
              <h2 className="text-2xl font-bold pb-2">Top Artists</h2>
              <p className="text-white/60 ">See more</p>
            </div>
            <Swiper
              slidesPerView="auto"
              spaceBetween={15}
              freeMode
              centeredSlides
              centeredSlidesBounds
              modules={[FreeMode]}
              className="mt-4"
            >
              {topChart6?.map((item) => {
                return (
                  <SwiperSlide
                    key={item.key}
                    className="shadow-lg rounded-full animate-slideright"
                    style={{ width: "25%", maxWidth: "120px", height: "auto" }}
                  >
                    <div>
                      <Link to={"/artists"}>
                        {" "}
                        <Artist img={item.images?.background} />
                      </Link>
                    </div>
                  </SwiperSlide>
                );
                // return (
                //   <SwiperSlide
                //     key={item.id}
                //     className="shadow-lg rounded-full animate-slideright"
                //     style={{ width: "25%", maxWidth: "120px", height: "auto" }}
                //   >
                //     <div>
                //       <Artist img={item.imageSrc} />
                //     </div>
                //   </SwiperSlide>
                // );
              })}
            </Swiper>
          </div>
        </div>
        {/* ***********    outlet a partir de aqui******** */}
        <div className=" md:pl-2  md:col-start-2 md:col-end-[-1] md:row-start-4 md:row-end-5 lg:block  lg:row-start-2 lg:row-end-[-1] lg:col-start-2 lg:col-end-3 ">
          <div className="scroll-container  flex flex-row lg:w-full ">
            <Outlet />
          </div>
        </div>
      </div>

      {activeSong?.title && (
        <div className="flex  absolute h-28 bottom-0 left-0 right-0 animate-slideup bg-gradient-to-br from-white/10 to-[#031634] backdrop-blur-lg rounded-t-3xl z-10">
          <MusicPlayer />
        </div>
      )}
    </div>
  );
};
