import React from "react";
import earth from '../../assets/images/earth.png';
import backgroundImage from '../../assets/images/bg-image.jpg';
import chessImage from '../../assets/images/chess.png';
import gridImage1 from '../../assets/images/grid-image-1.png';
import gridImage2 from '../../assets/images/grid-image-2.png';
import gridImage3 from '../../assets/images/grid-image-3.png';
import gridImage4 from '../../assets/images/grid-image-4.png';
import worldImage from '../../assets/images/Mask group.png';
import videoImage from '../../assets/images/video.png';
import igsLogo from '../../assets/images/igs-logo-procurement.png';

import createImage1 from '../../assets/images/create-img-1.png';
import createImage2 from '../../assets/images/create-img-2.png';
import createImage3 from '../../assets/images/create-img-3.png';
import badgeIcon from '../../assets/images/badge.png';
import worldSettingImg from '../../assets/images/world-setting.png';
import linesImage from '../../assets/images/Group.png';
import chooseUsImage from '../../assets/images/choose-us-image.png';

import agricultureImage from '../../assets/images/agriculture.png';
import oil_gasImage from '../../assets/images/oil_gas.png';
import healthcareImage from '../../assets/images/healthcare.png';
import governmentNgosImage from '../../assets/images/governmentNgos.png';
import constructionImage from '../../assets/images/construction.png';
import commoditiesImage from '../../assets/images/commodities.png';
import energyImage from '../../assets/images/energy.png';
import financialImage from '../../assets/images/financial.png';
import industrial_manufacturingImage from '../../assets/images/indistrial_manufacturing.png';
import retailImage from '../../assets/images/retail.png';
import miningImage from '../../assets/images/minning.png';

import travelImage from '../../assets/images/Travel & Hospitality.png';
import chemicalsImage from '../../assets/images/Chemicals.png';
import goodsImage from '../../assets/images/Consumer Packaged Goods.png';
import telecommunicationImage from '../../assets/images/Telecommunication.png';
import automotiveImage from '../../assets/images/Automotive.png';
import aviationImage from '../../assets/images/Aviation & Refueling.png';




import { Typography, Box, Grid, Tabs, Tab, Paper, Button, Divider, Container, Stack,Card, CardActionArea, CardMedia, CardContent, } from "@mui/material";
export default function LandingPage() {

  const [tabIndex, setTabIndex] = React.useState(1);
  const [showAll, setShowAll] = React.useState(false);


  const handleChange = (event, newValue) => {
    setTabIndex(newValue);
  };
  const tabs = ["How It Works", "Strategy", "Managed Services"];
  const features = [
    {
      title: 'Strategic Sourcing',
      description: 'Find the best suppliers, negotiate competitive terms, and secure high-quality materials for your operations.',
      bgImage: gridImage1, // replace with actual image path
      color: '#fff', // text color
    },
    {
      title: 'Inventory Management',
      description: 'Keep track of your stock levels, avoid overages, and guarantee just-in-time delivery.',
      bgImage: gridImage2,
      color: '#fff',
    },
    {
      title: 'Supplier Relationship Management',
      description: 'Build and maintain strong supplier relationships to ensure seamless collaboration.',
      bgImage: gridImage3,
      color: '#fff',
    },
    {
      title: 'Risk Management',
      description: 'Mitigate supply chain disruptions with proactive risk assessments and contingency planning.',
      bgImage: gridImage4,
      color: '#fff',
    },
  ];

  const services = [
    {
      title: 'iPROCURE',
      subtitle: 'Streamline Your Sourcing With IIGS',
      description: 'Looking for a partner to optimize procurement with cost-cutting, efficient, and tailored solutions?\n Your All-in-One Sourcing Partner\n At 1IGS, we deliver results through agile, sustainable strategies that keep your operations seamless and competitive.\n Efficiency, precision, and exceptional outcomes—that’s the 1IGS promise.',
      buttonText: 'PARTNER WITH US TODAY »',
      image: igsLogo
    },
    {
      title: 'iSUPPLY',
      subtitle: 'Future-Ready Supply Chain for Growing Businesses',
      description: 'Simplify your supply chain with 1IGS, an efficient end-to-end management system with real-time visibility. Integrate into global logistics, streamline operations, and gain a competitive edge with tools for the connected enterprise.\n \n Call us today and discover how 1IGS can redefine your supply chain and fuel your business growth.',
      buttonText: 'DISCOVER IIGS TODAY »',
      image: igsLogo
    },
  ];

  const createFeatures = [
    {
      title: 'STRATEGY',
      subtitle: 'TAKE PROCUREMENT TO THE NEXT LEVEL',
      description:
        'Transform your business with 1IGS. We cut costs, improve efficiency, and drive growth through smarter workflows and collaboration.',
      image: createImage1,
      button: 'EXPLORE 1IGS STRATEGY  »',
    },
    {
      title: 'iSOURCE',
      subtitle: 'INTEGRATED SOURCING AND PROCUREMENT SOLUTIONS',
      description:
        'i1IGS offers end-to-end sourcing solutions, from cost estimation to delivery, streamlining, and optimizing operations.',
      image: createImage2,
      button: 'DRIVE EFFICIENCY WITH 1IGS  »',
    },
    {
      title: 'iFREIGHT',
      subtitle: 'STREAMLINE YOUR LOGISTICS WITH 1IGS',
      description:
        '1IGS provides seamless ocean, air, ground freight, and LCL shipping solutions, simplifying logistics to save time and grow your business.',
      image: createImage3,
      button: 'SEE RESULTS, CONTACT US  »',
    },
  ];


  const industries = [
  { title: 'Agriculture', image: agricultureImage },
  { title: 'Oil & Gas', image:oil_gasImage },
  { title: 'Healthcare & Life Sciences', image: healthcareImage },
  { title: 'Government & Nonprofit', image: governmentNgosImage },
  { title: 'Construction', image: constructionImage },
  { title: 'Commodities', image: commoditiesImage },
  { title: 'Energy & Utilities', image:energyImage },
  { title: 'Financial Services', image: financialImage },
  { title: 'Industrial Manufacturing', image:industrial_manufacturingImage },
  { title: 'Retail', image: retailImage },
  { title: 'Mining', image: miningImage },


  // Additional 6 items for "View All"
  { title: 'Travel & Hospitality', image: travelImage },
  { title: 'Chemicals', image: chemicalsImage },
  { title: 'Consumer Packaged Goods', image: goodsImage },
  { title: 'Telecommunication, Media & Technology', image: telecommunicationImage },
  { title: 'Automotive', image: automotiveImage},
  { title: 'Aviation & Refueling', image: aviationImage },
];

  const displayedIndustries = showAll ? industries : industries.slice(0, 11);

  return (
    <div>

      <div
        className="relative min-h-screen bg-cover bg-center flex flex-col"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 z-0" />

        {/* Main Content Area */}
        <div className="relative z-10 flex-grow flex flex-col w-full">
          {/* Bootstrap-style container wrapper */}
          <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex-grow flex flex-col py-16 text-white">

            {/* Top Section */}
            <div className="grid md:grid-cols-2 gap-8 items-center flex-grow">
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

            {/* Bottom Cards */}
            <div className="mt-auto pt-20 pb-1">
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
      </div>


      <div>

        <Box sx={{ px: 4, py: 6, backgroundColor: "#fff" }}>
          <Typography
            sx={{
              color: "#2D53A4",
              fontFamily: "Poppins, sans-serif",
              fontWeight: "bold",
              fontSize:50
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
                style={{ width: 40, height: 50 }}
              />
              Supply Chain Operations
              <img
                src={chessImage}
                alt="chess-icon"
                style={{ width: 40, height: 50 }}
              />
            </Box>
          </Typography>
          <Typography sx={{
            mb:2,
                          fontSize:20,
            color: "#393939",
            fontFamily: "Poppins, sans-serif",
          }} align="center" maxWidth="1100px" mx="auto" color="text.secondary" >
            Managing procurement and supply chain processes doesn’t have to be complicated. With our one-stop-shop outsourcing services, we simplify your operations, reduce costs, and ensure that your business is stocked and ready to meet demand.
          </Typography>


          <Box sx={{ backgroundColor: "#EFF7FE", pb: 2 , pt:1}}>
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
                      fontSize:24,
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
                      // "&:hover": {
                      //   backgroundColor: tabIndex === index ? "#2D53A4" : "#f0f0f0",
                      // },
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

        </Box>


        <Box sx={{ py: 1, backgroundColor: '#fff' }}>
          <Container>
            {/* Header */}
            <Stack direction="row" spacing={3} alignItems="flex-start" sx={{ mb: 2 }}>
              {/* Image/Icon on the Left */}
              <Box
                component="img"
                src={worldImage} // Replace with your actual image path
                alt="Procurement Icon"
                sx={{ width: 64, height: 64, mt: 0.5 }}
              />

              {/* Text on the Right */}
              <Box>
                <Typography variant="h5" sx={{
                  color: "#2D53A4",
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "bold"
                }}>
                  Comprehensive Procurement and{' '}
                  <span style={{ color: '#F36434' }}>Supply Chain Services</span>
                </Typography>
                <Typography sx={{ fontFamily: "Poppins, sans-serif", color: '#393939' }} variant="body1">
                  From sourcing to delivery, our services cover every aspect of your procurement needs. Here’s what we offer to help you stay ahead of the curve:
                </Typography>
              </Box>
            </Stack>

            <Typography sx={{ fontFamily: "Poppins, sans-serif", color: '#393939', mb: 2 }} >
              Streamline your procurement with 1IGS, a trusted global solution that simplifies operations, reduces costs, and mitigates supply chain risks. Optimize your strategy and stay competitive with our expert-driven platform.    </Typography>

            {/* Features + Video in Two Columns */}
            <Grid container spacing={2}>
              {/* Left Column: 2x2 Feature Cards with Background Images */}
              <Grid item xs={12} md={6}>
                <Grid container spacing={2}>
                  {features.map((feature, index) => (
                    <Grid item xs={12} sm={6} key={index}>
                      <Box
                        sx={{
                          height: 200,
                          color: feature.color,
                          backgroundImage: `url(${feature.bgImage})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          position: 'relative',
                        }}
                      >
                        {/* Optional dark overlay */}
                        <Box
                          sx={{
                            position: 'absolute',
                            inset: 0,
                            // backgroundColor: 'rgba(0,0,0,0.3)',
                            zIndex: 0,
                          }}
                        />

                        {/* Title - Top Left */}
                        <Box
                          sx={{
                            position: 'absolute',
                            top: 16,
                            left: 16,
                            width: '70%',
                            zIndex: 1,
                          }}
                        >
                          <Typography
                            variant="body2"
                            sx={{
                              lineHeight: 1.4,
                            }}
                          >
                            {feature.description}
                          </Typography>
                        </Box>

                        {/* Description - Bottom Left */}
                        <Box
                          sx={{
                            position: 'absolute',
                            bottom: 16,
                            left: 16,
                            zIndex: 1,
                          }}
                        >
                          <Typography variant="body2" fontWeight="bold" color='#F36434'>{feature.title}</Typography>
                        </Box>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Grid>

              {/* Right Column: Video */}
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    height: '100%',
                    backgroundColor: '#2D53A4',
                    color: '#fff',
                    p: 2,
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                    borderRadius: 2,
                  }}
                >
                  <img
                    src={videoImage}
                    alt="Video Player"
                    style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }}
                  />
                </Box>
              </Grid>
            </Grid>



            {/* Call-to-Action */}
            <Box
              sx={{
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                mb: 5,
                mt: 4
              }}
            >
              <Typography variant="h6" sx={{ color: "#2D53A4", fontFamily: "Poppins, sans-serif", fontWeight: "bold", mb: 2 }}>
                Unmatched Expertise and a Global Network in Sourcing and Supply Chain Solutions
              </Typography>
              <Typography variant="body1" sx={{ mb: 1, maxWidth: 1200, fontFamily: "Poppins, sans-serif", color: "#393939" }}>
                With over 26 years of proven experience and a powerful network, we deliver intelligent, efficient supply chain and sourcing solutions that redefine success.
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, maxWidth: 1200, fontFamily: "Poppins, sans-serif", }}>
                Spend less time worrying about procurement and more time scaling your business. Our end-to-end solutions save you time and resources.  </Typography>
              <Button variant="outlined" sx={{ fontFamily: "Poppins, sans-serif", color: "#2D53A4" }}>
                1IGS CAN SIMPLIFY YOUR OPERATIONS TODAY »
              </Button>
            </Box>

            {/* Services Section */}
            <Grid container spacing={2}>
              {services.map((service, idx) => (
                <Grid item xs={12} md={6} key={idx}>
                  <Box sx={{ p: 3, backgroundColor: "#EFF7FE", height: '100%' }}>

                    {/* Inline Image + Title */}
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <img
                        src={service.image} // or a static URL
                        alt={`${service.title} icon`}
                        style={{ width: 70, height: 18, marginRight: 8 }}
                      />
                      <Typography
                        variant="h5"
                        sx={{
                          color: "#F36434",
                          fontFamily: "Poppins, sans-serif",
                          fontWeight: 'bold',
                        }}
                      >
                        {service.title}
                      </Typography>
                    </Box>

                    {/* Subtitle */}
                    <Typography
                      variant="subtitle1"
                      sx={{
                        color: "#2D53A4",
                        fontFamily: "Poppins, sans-serif",
                        fontWeight: 'bold'
                      }}
                    >
                      {service.subtitle}
                    </Typography>

                    {/* Description */}
                    <Typography variant="body2" sx={{ mt: 1, whiteSpace: 'pre-line', fontFamily: "Poppins, sans-serif", color: "#393939" }}>
                      {service.description}
                    </Typography>

                    {/* Button */}
                    <Button
                      variant="text"
                      sx={{
                        mt: 2,
                        color: "#2D53A4",
                        fontFamily: "Poppins, sans-serif",
                        fontWeight: 'bold'
                      }}
                    >
                      {service.buttonText}
                    </Button>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>


        {/* Top Section */}
        <Box sx={{ px: 4, py: 6, backgroundColor: '#f4f9ff', textAlign: 'center' }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
            <Box component="img" src={badgeIcon} sx={{ width: 48 }} />
          </Box>
          <Typography variant="h5" sx={{
            fontWeight: 750, mb: 1, color: "#2D53A4",
            fontFamily: "Poppins, sans-serif",
          }}>
            Let’s Create
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, maxWidth: 1000, mx: 'auto', textAlign: 'left', fontFamily: "Poppins, sans-serif", color: '#393939' }}>
            Simplify your supply chain today with our tailored outsourcing solutions. Whether you’re looking to save time, cut costs, or improve your supplier relationships, we’ve got you covered.        </Typography>

          {/* Feature Cards */}
          <Box sx={{ maxWidth: '1000px', mx: 'auto', px: 2, py: 4 }}>
            <Grid container spacing={3} justifyContent="center">
              {createFeatures.map((f, idx) => (
                <Grid item xs={12} sm={6} md={4} key={idx}>
                  <Paper
                    sx={{
                      p: 2,
                      borderRadius: 2,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      textAlign: 'left',
                      boxShadow: 3,
                    }}
                  >
                    <Box>
                  <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1 }}>
  <Box component="span" sx={{ color: '#F36434' }}>1IGS </Box>
  <Box component="span" sx={{ color: '#2D53A4' }}>{f.title}</Box>
</Typography>
                      <Box
                        component="img"
                        src={f.image}
                        alt={f.title}
                        sx={{ width: '100%', borderRadius: 1, mb: 2 }}
                      />
                      <Typography variant="h6" sx={{ fontWeight: 300, fontSize: 15 }}>
                        {f.subtitle}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ my: 1, color: '#4D4D4D', fontFamily: 'Poppins, sans-serif' }}
                      >
                        {f.description}
                      </Typography>
                    </Box>

                    <Button
                      variant="contained"
                      sx={{ mt: 2, backgroundColor: '#2D53A4', alignSelf: 'flex-start' }}
                    >
                      {f.button}
                    </Button>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>

        {/* Why Choose Us Section */}
        <Box
          sx={{
            backgroundColor: '#2D53A4',
            color: '#fff',
            py: 6,
            px: 4,
            backgroundImage: `url(${linesImage})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >      <Grid container spacing={4} alignItems="center">
            {/* Left Text Column */}
            <Grid item xs={12} md={6}>
              <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
                <Box component="img" src={worldSettingImg} sx={{ width: 40, mr: 2 }} />
                <Typography variant="h5" sx={{ fontWeight: 700 }}>
                  Why Choose Us?
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ mb: 2 }}>
                Spend less time worrying about procurement and more time scaling your business. Our end-to-end solutions save you time and resources.
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                <span style={{ fontWeight: 600, color: '#F36434' }}>Cost Savings That Matter</span><br />
                Lower your operational costs without compromising quality.
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                <span style={{ fontWeight: 600, color: '#F36434' }}>Experience You Can Trust</span><br />
                We help you achieve better pricing, streamlined processes, and fewer inefficiencies.
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                <span style={{ fontWeight: 600, color: '#F36434' }}>Tailored to Your Needs</span><br />
                No “one size fits all” here. We customize solutions for your goals and industry.
              </Typography>
              <Button variant="contained" sx={{ mt: 2, backgroundColor: '#fff', color: '#2D53A4', fontWeight: 'bold' }}>
                UNLOCK YOUR BUSINESS’S FULL POTENTIAL WITH IIGS →
              </Button>
            </Grid>
            {/* Right Image Column */}
            <Grid item xs={12} md={6}>
              <Box component="img" src={chooseUsImage} sx={{ width: '90%', }} />
            </Grid>
          </Grid>
        </Box>



        {/* Industries Section */}

    <Box sx={{ px: 4, py: 6, backgroundColor: '#fff' }}>
      <Typography variant="h5" color="#2D53A4" fontWeight='bold' gutterBottom>
        Industries We Serve
      </Typography>
      <Typography variant="body1" maxWidth="1100px" sx={{ mb: 4 ,color:'#393939'  , fontFamily: 'Poppins, sans-serif' }}>
        Optimize your supply chain and achieve real cost savings with IIGS. Our tailored procurement
        solutions streamline logistics, cut waste, and enhance efficiency.
      </Typography>

      <Grid container spacing={2}>
        {displayedIndustries.map((industry, idx) => (
          <Grid item xs={6} sm={4} md={2} key={idx}>
            <Card sx={{ borderRadius: 2, height: '100%' }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="100"
                  image={industry.image}
                  alt={industry.title}
                />
                <CardContent>
                  <Typography sx={{color:'#040715'  ,fontSize:12, fontFamily: 'Poppins, sans-serif' }} variant="body2" align="center">
                    {industry.title}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}

        <Grid item xs={6} sm={4} md={2}>
          <Box
            sx={{
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#e6f0ff',
              borderRadius: 2,
              textAlign: 'center',
              flexDirection: 'column',
              py: 2,
            }}
          >
            <Button
              variant="text"
              onClick={() => setShowAll(!showAll)}
              sx={{  fontSize: '0.7rem',color:'#000' }}
            >
              {showAll ? 'View Less <<' : 'View All >>'}
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
      </div>


    </div>
  );
}
