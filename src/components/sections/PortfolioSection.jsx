import React, { useState } from "react";
import { Box, Typography, useMediaQuery, useTheme, alpha } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectCoverflow } from "swiper/modules";
import { useTranslation } from "react-i18next";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import aggastore from "../../assets/images/aggastorecan.png";
import kokocan from "../../assets/images/kokocan.png";

import lessentielleslab from "../../assets/images/lessentielleslabcan.png";
import karaoke from "../../assets/images/karaokecan.png";
import lingo from "../../assets/images/lingocan.png";
import utopia from "../../assets/images/utopiacan.png";
import BlueCircleIcon from "../../assets/icons/blueCircleIcon";
import BlueCircleMidIcon from "../../assets/icons/blueCircleMidIcon";
import BlueCircleLargeIcon from "../../assets/icons/blueCircleLargeIcon";





const PortfolioSection = () => {
  const { t } = useTranslation();
  const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
    const blueTextColor = "#38bdf8";
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [activeIndex, setActiveIndex] = useState(0);


  const portfolioItems = [
    { id: 1, title: "Aggastore", image: aggastore, link : "https://aggastore.tn/" },
    { id: 2, title: "Lingo Store", image: lingo, link : "https://lingo-store.com/" },
    { id: 3, title: "Kokocan", image: kokocan , link :"https://koko-deco.com/" },
    { id: 4, title: "Les Essentielles Lab", image: lessentielleslab, link :"https://lesessentielleslab.com.tn/" },
    { id: 5, title: "Karaoke Box", image: karaoke , link : "https://karaokebox-gammarth.com/" },
    { id: 6, title: "Utopia Gammarth", image: utopia, link :"https://www.utopia-gammarth.com/" },
  ];

  return (
    <Box
      sx={{
        // padding: theme.spacing(10, 2),
        textAlign: "center",
        width: "100%",
        position: "relative",
        zIndex:10
        // background: `linear-gradient(45deg, ${alpha("#E3F2FD", 0.9)} 30%, ${alpha("#BBDEFB", 0.9)} 90%)`
      }}
    >

       <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        // padding: isSmallScreen ? "2rem 1rem" : "4rem 2rem",
      }}
    >
        <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                color: "#333",
                fontFamily: "'Roboto', sans-serif",
                marginBottom: theme.spacing(3),
                 fontSize: isSmallScreen ? "2.5rem" : "3rem",
                textAlign: "center",
                zIndex:10

              }}
            >
              {t("portfolioSection.title_first")}{" "}
              <span style={{ color: blueTextColor }}>
              {" "}{t("portfolioSection.title_second")}
              </span>
              
            </Typography>
             <Typography
                        variant="h4"
                        sx={{
                          fontWeight: "bold",
                          color: "#333",
                          fontFamily: "'Roboto', sans-serif",
                          fontSize: "2.1rem",
                          marginBottom: theme.spacing(6),
                          zIndex: 10,
                        }}
                      >{t("portfolioSection.subtitle")}{" "}!</Typography>
    </Box>

      <Box sx={{ maxWidth: 1500, margin: "0 auto", position: "relative" }}>
        <Swiper
          modules={[Autoplay, Navigation, EffectCoverflow]}
          effect="coverflow"
          grabCursor={true}
          slidesPerView={isMobile ? 1.5 : 2.5} // Increase slidesPerView to expand width
          centeredSlides={true}
          spaceBetween={50} // Increase space between slides
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: -60,
            depth: 150,
            modifier: 1,
            slideShadows: false,
          }}
          speed={1000}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          {portfolioItems.map((item, index) => (
            <SwiperSlide key={item.id}>
              <Box
                sx={{
                  width: "100%",
                  height: isMobile ? 350 : 500,
                  borderRadius: "25px",
                  overflow: "hidden",
                  position: "relative",
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  transition: "transform 0.5s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.02)",
                  },
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)`,
                    zIndex: 1,
                  },
                  boxShadow: "0 12px 30px -10px rgba(102, 252, 241, 0.3)",
                  border: "2px solid rgba(102, 252, 241, 0.3)",
                }}
              />
              {index === activeIndex && (
          <Typography
          sx={{
            position: "absolute",
            bottom: 40,
            left: "50%",
            transform: "translateX(-50%)",
            fontWeight: 700,
            fontSize: isMobile ? "1.2rem" : "1.8rem",
            color: "#fff",
            zIndex: 2,
            textAlign: "center",
            width: "90%",
            textShadow: "0 2px 4px rgba(0,0,0,0.5)",
            cursor: "pointer",
          }}
          onClick={() => window.open(item.link, "_blank")}
        >
      {item.title}
                  <Box
                    sx={{
                      width: "60%",
                      height: "2px",
                      background: "#66FCF1",
                      margin: "10px auto",
                      boxShadow: "0 2px 8px rgba(102, 252, 241, 0.5)",
                    }}
                  />
                </Typography>
              )}
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Arrows */}
        <Box
          className="swiper-button-prev"
          sx={{
            color: "#66FCF1 !important",
            "&::after": {
              fontSize: "2rem !important",
              fontWeight: 700,
            },
            left: "30px !important",
            [theme.breakpoints.down("sm")]: { display: "none !important" },
          }}
        />
        <Box
          className="swiper-button-next"
          sx={{
            color: "#66FCF1 !important",
            "&::after": {
              fontSize: "2rem !important",
              fontWeight: 700,
            },
            right: "30px !important",
            [theme.breakpoints.down("sm")]: { display: "none !important" },
          }}
        />
      </Box>
    </Box>
  );
};

export default PortfolioSection;