import React from "react";
import earth from '../../assets/images/earth.png';
import backgroundImage from '../../assets/images/bg-image.jpg';
import chessImage from '../../assets/images/chess.png';
import { Typography, Box, Grid, Tabs, Tab } from "@mui/material";
export default function LandingPage() {

  const [tabIndex, setTabIndex] = React.useState(1);

  const handleChange = (event, newValue) => {
    setTabIndex(newValue);
  };
  const tabs = ["How It Works", "Strategy", "Managed Services"];

  return (
    <div>

<div className="relative min-h-screen bg-cover bg-center flex flex-col" style={{ backgroundImage: `url(${backgroundImage})` }}>
  {/* Overlay for dimming */}
  <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

  {/* Main Content Container */}
  <div className="relative z-10 px-6 py-16 text-white max-w-7xl mx-auto flex-grow flex flex-col">
    {/* Top Section - takes available space */}
    <div className="grid md:grid-cols-2 gap-8 items-center flex-grow">
      {/* Text Section */}
      <div>
        <p className="uppercase text-sm tracking-widest text-gray-300">
          Smarter, Faster, and More Reliable
        </p>
        <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6 leading-tight">
          Streamline procurement and enhance your supply chain with 1IGS
        </h1>
        <div className="flex gap-4 flex-wrap">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded font-semibold">
            Explore Cost-Effective Sourcing Options
          </button>
          <button className="border border-white hover:bg-white hover:bg-opacity-10 px-6 py-3 rounded font-semibold transition-colors">
            Book a Meeting
          </button>
        </div>
      </div>

      {/* Earth Image */}
      <div className="flex justify-center">
        <img
          src={earth}
          alt="Earth held by robotic arms"
          className="w-full max-w-lg"
        />
      </div>
    </div>

    {/* Bottom Section - positioned at bottom of content area */}
    <div className="mt-auto pt-16 pb-8 w-full">
      <div className="grid md:grid-cols-3 gap-6">
        {[
          {
            title: "Accelerate long-term growth with 1IGS's",
            text: "We design strategies to cut costs, boost efficiency, and manage risks, offering solutions from logistics to procurement for sustainable success.",
            link: "Let's Co-Create →",
          },
          {
            title: "Proactive, innovative, and results-focused",
            text: "We build impactful partnerships with global leaders. By teaming up, we fast-track success, spark innovation, and revolutionize global sourcing strategies.",
            link: "Call to explore global sourcing options →",
          },
          {
            title: "Driving success through strategic partnerships",
            text: "We collaborate to accelerate innovation, drive results, and transform your business globally by aligning expertise to meet your unique sourcing needs.",
            link: "Partner for Success →",
          },
        ].map((card, idx) => (
          <div
            key={idx}
            className="bg-black/30 backdrop-blur-md p-6 rounded-lg hover:bg-black/40 transition-colors"
          >
            <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
            <p className="text-sm mb-4">{card.text}</p>
            <a href="#" className="text-orange-400 font-medium hover:text-orange-300 transition-colors">
              {card.link}
            </a>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>


      <div>

        <Box sx={{ px: 4, py: 6, backgroundColor: "#EFF7FE" }}>
          <Typography
            sx={{
              color: "#2D53A4",
              fontFamily: "Poppins, sans-serif",
              fontWeight: "bold",
            }}
            variant="h4"
            align="center"
            gutterBottom
          >
            Streamline Your Procurement and <br />
            <Box
              component="span"
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <img
                src={chessImage}
                alt="chess-icon"
                style={{ width: 24, height: 24 }}
              />
              Supply Chain Operations
              <img
                src={chessImage}
                alt="chess-icon"
                style={{ width: 24, height: 24 }}
              />
            </Box>
          </Typography>
          <Typography sx={{
            color: "#393939",
            fontFamily: "Poppins, sans-serif",
          }} align="center" maxWidth="900px" mx="auto" color="text.secondary">
            Managing procurement and supply chain processes doesn’t have to be complicated. With our one-stop-shop outsourcing services, we simplify your operations, reduce costs, and ensure that your business is stocked and ready to meet demand.
          </Typography>


          <Box sx={{ mt: 4, display: "flex", justifyContent: "center", position: "relative" }}>
            {/* Bottom line */}
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                width: "100%",
                maxWidth: 920,
                height: "3px",
                bgcolor: "#2D53A4",
                zIndex: 0,
                borderRadius: "0px 0px 8px 8px",
              }}
            />

            <Tabs
              value={tabIndex}
              onChange={handleChange}
              TabIndicatorProps={{ style: { display: "none" } }}
              sx={{
                zIndex: 1,
                bgcolor: "transparent",
                minHeight: 48,
              }}
            >
              {tabs.map((label, index) => (
                <Tab
                  key={label}
                  label={label}
                  disableRipple
                  sx={{
                    textTransform: "none",
                    fontWeight: "bold",
                    minHeight: 45,
                    px: 3,
                    mx: 1,
                    borderTopLeftRadius: "8px",
                    borderTopRightRadius: "8px",
                    borderBottomLeftRadius: 0,
                    borderBottomRightRadius: 0,
                    color: tabIndex === index ? "#fff !important" : "#000",
                    backgroundColor: tabIndex === index ? "#2D53A4" : "transparent",
                    transition: "all 0.3s ease-in-out",
                    position: "relative",
                    bottom: tabIndex === index ? 0 : 0, // lift the selected tab a bit to match line
                    "&:hover": {
                      backgroundColor: tabIndex === index ? "#2D53A4" : "#f0f0f0",
                    },
                  }}
                />
              ))}
            </Tabs>
          </Box>

          {/* Tab 0 */}

          {tabIndex === 0 && (

            <>
              <Typography
                sx={{
                  color: "#393939",
                  fontFamily: "Poppins, sans-serif",
                  textAlign: "left",
                  maxWidth: "900px",
                  mx: "auto",
                  mt: 4, // top margin (increased for spacing)
                  mb: 2, // bottom margin
                }}
              >
                Tailored one-stop shop solutions that fit your business—1IGS’s comprehensive all-in-one services deliver exactly what you need to overcome complex operational challenges and drive growth, from full-scale outsourcing to precisely targeted solutions.</Typography>

              <Box sx={{ maxWidth: 960, mx: "auto", px: 2 }}>
                <Grid container spacing={1} sx={{ mt: 2 }}>
                  <Grid item xs={12} md={6}>
                    <Typography sx={{
                      color: "#2D53A4",
                    }} variant="h6" fontWeight="bold">
                      Define Your Needs
                    </Typography>
                    <Typography sx={{
                      color: "#393939",
                      fontFamily: "Poppins, sans-serif",
                    }}>
                      Tell us about your sourcing and logistics requirements, including costs, timelines, and sustainability preferences.
                    </Typography>
                    <Typography sx={{ mt: 1 }} color="#F06230">
                      Discover 1IGS's Tailored Services »
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography sx={{
                      color: "#2D53A4",
                    }} variant="h6" fontWeight="bold">
                      Connect with manufacturers     </Typography>
                    <Typography sx={{
                      color: "#393939",
                      fontFamily: "Poppins, sans-serif",
                    }}>
                      We handpick from our trusted global network for your approval.

                    </Typography>
                    <Typography sx={{ mt: 1 }} color="#F06230">
                      Your one-stop procurement partner »
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography sx={{
                      color: "#2D53A4",
                    }} variant="h6" fontWeight="bold">
                      Achieve Long-Term Growth     </Typography>
                    <Typography sx={{
                      color: "#393939",
                      fontFamily: "Poppins, sans-serif",
                    }}>
                      Enjoy improved efficiency, reduced costs, and sustainability-driven improvements across your supply chain.      </Typography>
                    <Typography sx={{ mt: 1 }} color="#F06230">
                      Contact Us for a Free Consultation »
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography sx={{
                      color: "#2D53A4",
                    }} variant="h6" fontWeight="bold">
                      Streamline Logistics     </Typography>
                    <Typography sx={{
                      color: "#393939",
                      fontFamily: "Poppins, sans-serif",
                    }}>
                      Receive tailored solutions to ensure efficient delivery and seamless procurement.

                    </Typography>
                    <Typography sx={{ mt: 1 }} color="#F06230">
                      Comprehensive services »
                    </Typography>
                  </Grid>
                </Grid>





              </Box>
            </>
          )}

          {/* Tab 1*/}

          {tabIndex === 1 && (

            <>
              {/* Introductory Text */}
              <Typography
                sx={{
                  color: "#393939",
                  fontFamily: "Poppins, sans-serif",
                  textAlign: "left",
                  maxWidth: "900px",
                  mx: "auto",
                  mt: 4, // top margin (increased for spacing)
                  mb: 2, // bottom margin
                }}
              >
                IIGS is transforming what procurement and supply chain teams can achieve. Our innovative strategies
                and fresh perspectives empower leading enterprises to enhance efficiency, accelerate growth, and
                create a measurable impact on the bottom line.
              </Typography>

              <Box sx={{ maxWidth: 960, mx: "auto", px: 2 }}>
                <Grid container spacing={1} sx={{ mt: 2 }}>
                  <Grid item xs={12} md={6}>
                    <Typography sx={{
                      color: "#2D53A4",
                    }} variant="h6" fontWeight="bold">
                      Build a Resilient Supply Chain With 1IGS
                    </Typography>
                    <Typography sx={{
                      color: "#393939",
                      fontFamily: "Poppins, sans-serif",
                    }}>
                      At 1IGS, we specialize in efficient procurement outsourcing. From sourcing to logistics, we streamline your supply chain for success.
                    </Typography>
                    <Typography sx={{ mt: 1 }} color="#F06230">
                      Optimize Your Supply Chain Today »
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography sx={{
                      color: "#2D53A4",
                    }} variant="h6" fontWeight="bold">
                      Your Trusted Partner in Procurement
                    </Typography>
                    <Typography sx={{
                      color: "#393939",
                      fontFamily: "Poppins, sans-serif",
                    }}>
                      Discover tailored solutions with IIGS to streamline procurement and achieve unmatched
                      efficiency. Optimize operations and drive results today.
                    </Typography>
                    <Typography sx={{ mt: 1 }} color="#F06230">
                      Be ready for tomorrow’s challenges today »
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </>
          )}
          {/* Tab 2*/}

          {tabIndex === 2 && (

            <>
              {/* Introductory Text */}
              <Typography
                sx={{
                  color: "#393939",
                  fontFamily: "Poppins, sans-serif",
                  textAlign: "left",
                  maxWidth: "900px",
                  mx: "auto",
                  mt: 4, // top margin (increased for spacing)
                  mb: 2, // bottom margin
                }}
              >
                1IGS delivers tailored managed services to help your business tackle complex challenges and drive growth. From full-scale outsourcing to targeted solutions, we provide exactly what you need to succeed.
              </Typography>

              <Box sx={{ maxWidth: 960, mx: "auto", px: 2 }}>
                <Grid container spacing={1} sx={{ mt: 2 }}>
                  <Grid item xs={12} md={6}>
                    <Typography sx={{
                      color: "#2D53A4",
                    }} variant="h6" fontWeight="bold">
                      Procurement Outsourcing      </Typography>
                    <Typography sx={{
                      color: "#393939",
                      fontFamily: "Poppins, sans-serif",
                    }}>
                      Optimize procurement and cut costs with 1IGS. Our expertise and network-driven procurement outsourcing transform routine tasks into a strategic growth driver, boosting your competitive edge.      </Typography>
                    <Typography sx={{ mt: 1 }} color="#F06230">
                      Get a Free Consultation Today »
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography sx={{
                      color: "#2D53A4",
                    }} variant="h6" fontWeight="bold">
                      Supply Chain Outsourcing      </Typography>
                    <Typography>
                      Optimize your supply chain with 1IG’s flexible outsourcing solutions. Backed by global expertise and advanced integrations, we help turn your supply chain into a powerful competitive advantage.
                    </Typography>
                    <Typography sx={{ mt: 1 }} color="#F06230">
                      Transform Your Supply Chain Now »
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </>
          )}


        </Box>
      </div>


    </div>
  );
}
