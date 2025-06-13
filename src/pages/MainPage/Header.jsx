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

import logisticsImage from '../../assets/images/image (15).png';
import meetingImage from '../../assets/images/image (16).png';
import discussionImage from '../../assets/images/image (17).png';
import groupImage from '../../assets/images/image (18).png';
import techImage from '../../assets/images/image 466.png';

import bulbImage from '../../assets/images/bulb.png';
import gatheringImage from '../../assets/images/gathering.png';
import esgImage from '../../assets/images/esg.png';
import cheersImage from '../../assets/images/cheers.png';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import callSectionBgImage from '../../assets/images/call_section_bg.png';

import note_icon from '../../assets/images/note-icon.png';
import message_icon from '../../assets/images/message-icon.png';
import tv_icon from '../../assets/images/tv-icon.png';
import ask_us_icon from '../../assets/images/ask-us-icon.png';
import phone_icon from '../../assets/images/phone-icon.png';
import arrow_icon from '../../assets/images/arrowVector.png';

import footer_bg from '../../assets/images/footer_bg.png';
import igs_procurement from '../../assets/images/igs_procurement.png';
import play_icon from '../../assets/images/play_icon.png';

import insta_icon from '../../assets/images/insta.png';
import youtube_icon from '../../assets/images/youtube.png';
import linkedin_icon from '../../assets/images/linkedin.png';
import x_icon from '../../assets/images/x_icon.png';
import facebook_icon from '../../assets/images/facebook.png';




import {
  Typography, Box, Grid, Tabs, Tab, Paper, Button, Divider, Container,
  Stack, Card, CardActionArea, CardMedia, CardContent,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemText,
  TextField,
} from "@mui/material";
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

  const supplyChain = [
    {
      title: 'Who is 1IGS?',
      description1: 'We adopt sustainability practices to provide long-term benefits.',
      description2:
        '1IGS builds partnerships to drive ROI and long-term growth, helping businesses achieve their goals with future-ready solutions.',
      image: logisticsImage,
      button: `Unlock your business's full potential »`,
    },
    {
      title: 'PROVEN EXPERTISE',
      description1: 'We will achieve this and exceed expectations.',
      description2:
        'Our passionate team averages 26 years of experience, providing the insights and support needed to stay ahead in a competitive market.',
      image: meetingImage,
      button: 'Discover how we add value  »',
    },
    {
      title: 'Diversity, Equity & Inclusion',
      description1: 'At 1IGS, We Are Committed to Better Care for Everyone',
      description2:
        '1IGS is committed to providing compassionate, reliable, and innovative care, focused on creating lasting, positive change.',
      image: discussionImage,
      button: `Let's Build Together  »`,
    },
    //     {
    //   title: 'TOP SUPPLIER SOURCING',
    //   description1: 'We Apply Our Industry Expertise Both Locally And  Internationally',
    //   description2:
    //     'Streamline your supply chain with 1IGS. Find suppliers, source materials, and cut costs to boost ROI in manufacturing, retail, and e-commerce.',
    //   image: groupImage,
    //   button: 'Partner with us today  »',
    // },
    //     {
    //   title: 'TAILORED STRATEGIES FOR SUCCESS',
    //   description1: 'Streamline operations for success and flexibility with 1IGS',
    //   description2:
    //     'We provide tailored supply chain solutions to boost efficiency, cut costs, and meet your business goals, delivering clear results.',
    //   image: techImage,
    //   button: 'Transform your supply chain  »',
    // },
  ];

  const embeddedList = [
    {
      title: 'Corporate Social Responsibility',
      description1: 'We empower businesses to succeed while supporting communities and protecting the environment, delivering solutions that benefit clients, teams, and society.',
      image: gatheringImage,
      button: `Unlock success today »`,
    },
    {
      title: 'Sustainability',
      description1: `We focus on sustainable, measurable results that empower stakeholders and drive long-term success. By aligning performance with strategy, we help unlock your business's full potential.`,
      image: esgImage,
    },
    {
      title: 'Credibility',
      description1: `Our foundation is built on trust and reliability. With decades of commitment, we deliver honesty, predictability, and dependability in every business relationship.`,
      image: cheersImage,
    },
    {
      title: 'Openness',
      description1: `We provide tailored solutions focused on your needs, combining innovation and excellence to enhance your quality of life and achieve impactful results.`,
      image: bulbImage,
    },

  ];


  const industries = [
    { title: 'Agriculture', image: agricultureImage },
    { title: 'Oil & Gas', image: oil_gasImage },
    { title: 'Healthcare & Life Sciences', image: healthcareImage },
    { title: 'Government & Nonprofit', image: governmentNgosImage },
    { title: 'Construction', image: constructionImage },
    { title: 'Commodities', image: commoditiesImage },
    { title: 'Energy & Utilities', image: energyImage },
    { title: 'Financial Services', image: financialImage },
    { title: 'Industrial Manufacturing', image: industrial_manufacturingImage },
    { title: 'Retail', image: retailImage },
    { title: 'Mining', image: miningImage },


    // Additional 6 items for "View All"
    { title: 'Travel & Hospitality', image: travelImage },
    { title: 'Chemicals', image: chemicalsImage },
    { title: 'Consumer Packaged Goods', image: goodsImage },
    { title: 'Telecommunication, Media & Technology', image: telecommunicationImage },
    { title: 'Automotive', image: automotiveImage },
    { title: 'Aviation & Refueling', image: aviationImage },
  ];


  const callList = [

    {
      title: 'Ask Us',
      description1: `Send us your question(s).`,
      image: ask_us_icon,
    },
    {
      title: 'RFP',
      description1: `Request for a business proposal`,
      image: note_icon,
    },
    {
      title: 'Feedback',
      description1: `Share your thoughts, comments and suggestions`,
      image: message_icon,
    },
    {
      title: 'Speak to an Expert',
      description1: `Schedule a consult with a specialist`,
      image: tv_icon,
    },
  ]

  const footerData = [
    {
      heading: 'Procurement Consulting',
      items: [`Let's Create`, 'Procurement Consulting', 'Demand & Supply Planning', 'Strategic Sourcing & Category Management', 'Cost of Goods Sold Transformation',
        'Business Process Outsourcing', 'Procurement Transformation', 'Opportunity Assessment', 'M & A Services', 'Procurement Risk Management', 'Business Process Outsourcing'
      ],
    },
    {
      heading: 'Supply Chain Consulting',
      items: [

        'Sustainability and Resilience',
        'Supply Chain Strategy',
        'Supply Chain Diagnostics',
        'Inventory Optimization',
        'Network Optimization',
        'Collaborative Planning',
        'Inventory Strategy & Management',
        'Operations & Manufacturing Excellence',
        'Network Strategy & Optimization',
        'Warehousing & Transportation Management'
      ],


    },
    {
      heading: '1IGS iPROCURE',
      items: [
        'Direct Procurement',
        'Indirect Procurement',
        'Sourcing Support Services',
        'Unified Source-to-Pay',
        'Source-To-Contract',
        'Procure-to-Pay',
        'Midsize & High Growth Enterprises',
        'Category Management',
        'Contract Lifecycle Management',
        'Supplier Lifecycle Management',
        'Third-Party Risk Management',
        'Intelligent Category Management '
      ],
    },
    {
      heading: 'iSUPPLY',
      items: [

        'Supply Chain Visibility and Execution',
        'Supply Chain Planning',
        'Supply Chain Collaboration',
        'Supply Chain Network Optimization',
        'Should Cost Modeling',
        'Inventory and Warehouse Management'
      ],
    },
    {
      heading: 'Managed Services',
      items: [
        'Procurement Outsourcing',
        'Strategic Sourcing',
        'Tail-Spend Management',
        'Category Management',
        'Procurement Support Services',
        'Supply Chain Outsourcing',
        'Supply Chain Planning & Forecasting',
        'Inventory Management Logistics Management'
      ],
    },
    {
      heading: 'Company',
      items: [
        'About Us',
        'Leadership',
        'Sustainability at 1IGS',
        'Careers',
        'Partners',
        'Contact Us'
      ],
    },
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
              fontSize: 50
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
            mb: 2,
            fontSize: 20,
            color: "#393939",
            fontFamily: "Poppins, sans-serif",
          }} align="center" maxWidth="1100px" mx="auto" color="text.secondary" >
            Managing procurement and supply chain processes doesn’t have to be complicated. With our one-stop-shop outsourcing services, we simplify your operations, reduce costs, and ensure that your business is stocked and ready to meet demand.
          </Typography>


          <Box sx={{ backgroundColor: "#EFF7FE", pb: 2, pt: 1 }}>
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
                      fontSize: 24,
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
          <Typography variant="body1" maxWidth="1100px" sx={{ mb: 4, color: '#393939', fontFamily: 'Poppins, sans-serif' }}>
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
                      <Typography sx={{ color: '#040715', fontSize: 12, fontFamily: 'Poppins, sans-serif' }} variant="body2" align="center">
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
                  sx={{ fontSize: '0.7rem', color: '#000' }}
                >
                  {showAll ? 'View Less <<' : 'View All >>'}
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>


        {/* Procurement Section */}
        <Box sx={{ px: 4, py: 6, backgroundColor: '#f4f9ff', textAlign: 'center' }}>
          <Typography variant="h5" sx={{
            fontWeight: 'bold', mb: 1, color: "#2D53A4",
            fontFamily: "Poppins, sans-serif",
          }}>
            Procurement and Supply Chain is Our Game
          </Typography>
          <Typography variant="body1" sx={{ mb: 1, maxWidth: 1000, mx: 'auto', textAlign: 'left', fontFamily: "Poppins, sans-serif", color: '#393939' }}>
            At 1IGS, we transform supply chains with resilience, agility, and sustainability. Our strategies deliver efficiency, results, and lasting impact for businesses globally. Upgrade your operations with future-ready solutions.              </Typography>

          <Typography variant="body1" sx={{ mb: 1, maxWidth: 1000, mx: 'auto', textAlign: 'left', fontFamily: "Poppins, sans-serif", color: '#393939' }}>
            Upgrade your operations with future-ready solutions.

          </Typography>
          {/* Feature Cards */}
          <Box sx={{ maxWidth: '1000px', mx: 'auto', px: 2, py: 4 }}>
            <Grid container spacing={3} justifyContent="center">
              {supplyChain.map((f, idx) => (
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
                        <Box component="span" sx={{ color: '#F36434' }}>{f.title}</Box>
                      </Typography>
                      <Box
                        component="img"
                        src={f.image}
                        alt={f.title}
                        sx={{ width: '100%', borderRadius: 1, mb: 2 }}
                      />
                      <Typography variant="h6" sx={{ fontWeight: 300, fontSize: 14 }}>
                        {f.description1}
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{ my: 1, fontWeight: 300, fontSize: 14 }}
                      >
                        {f.description2}
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

            <Button
              variant="contained"
              sx={{
                fontFamily: 'Poppins, sans-serif',
                backgroundColor: '#F36434',
                color: '#fff',
                '&:hover': {
                  backgroundColor: '#1f3a75', // darker shade on hover
                },
              }}
            >
              CONNECT WITH 1IGS TODAY »
            </Button>
          </Box>
        </Box>




        {/*  EMBEDED Section */}
        <Box sx={{ px: 4, py: 6, backgroundColor: '#fff', textAlign: 'left' }}>
          <Box sx={{ maxWidth: '1000px', mx: 'auto', px: 2 }}>
            {/* Aligned Heading */}
            <Typography
              variant="h5"
              sx={{
                fontWeight: 'bold',
                mb: 3,
                color: '#2D53A4',
                fontFamily: 'Poppins, sans-serif',
              }}
            >
              DOING WELL TO DO GOOD IS EMBEDDED IN OUR DNA
            </Typography>

            {/* Feature Cards */}
            <Grid container spacing={4} justifyContent="center">
              {embeddedList.map((f, idx) => (
                <Grid item xs={12} sm={6} md={3} key={idx}>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        fontWeight: 700,
                        mb: 1,
                        color: '#F36434',
                        fontFamily: 'Poppins, sans-serif',
                      }}
                    >
                      {f.title}
                    </Typography>

                    <Box
                      component="img"
                      src={f.image}
                      alt={f.title}
                      sx={{ width: '100%', mb: 2, borderRadius: 1 }}
                    />

                    <Typography
                      variant="body2"
                      sx={{
                        color: '#393939',
                        fontSize: 12,
                        mb: 2,
                        fontFamily: 'Poppins, sans-serif',
                      }}
                    >
                      {f.description1}
                    </Typography>

                    {f.button && (
                      <Button
                        variant="contained"
                        sx={{
                          fontSize: 10,
                          backgroundColor: '#2D53A4',
                          color: '#fff',
                          alignSelf: 'flex-start',
                          fontFamily: 'Poppins, sans-serif',
                          '&:hover': {
                            backgroundColor: '#1f3a75',
                          },
                        }}
                      >
                        {f.button}
                      </Button>
                    )}
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>


        {/* TAKE THE NEXT STEP */}
        <Box
          sx={{
            color: '#fff',
            py: 6,
            px: 4,
            backgroundImage: `url(${callSectionBgImage})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <Box sx={{ textAlign: 'center' }}>
            {/* Centered Icon + Text Inline */}
            <Box sx={{ mb: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Box component="img" src={phone_icon} alt="Phone Icon" sx={{ width: 40, height: 40, mr: 2 }} />
              <Typography variant="h5" sx={{ fontWeight: 700, color: '#fff', fontFamily: 'Poppins, sans-serif' }}>
                TAKE THE NEXT STEP
              </Typography>
            </Box>

            {/* Centered Paragraph */}
            <Typography
              variant="body1"
              sx={{
                mb: 1,
                maxWidth: 800,
                mx: 'auto',
                textAlign: 'left',
                fontFamily: 'Poppins, sans-serif',
                color: '#fff',
                fontSize: 12
              }}
            >
              We provide customized solutions to meet your needs, blending innovation and excellence to enhance your life and deliver results. At 1IGS, we’re redefining Global Procurement and Supply Chain. With strong ethics, a commitment to sustainability, and support for local communities, we address challenges while making a meaningful impact.
            </Typography>
            {/* Feature Cards */}
            <Box sx={{ maxWidth: '1000px', mx: 'auto', px: 2, py: 4 }}>
              <Grid container spacing={3} justifyContent="center">
                {callList.map((item, idx) => (
                  <Grid item xs={12} sm={6} md={3} key={idx}>
                    <Box
                      sx={{
                        borderRadius: 3,
                        p: 3,
                        width: 230, // ✅ fixed width for all cards
                        height: 160, // optional fixed height to match layout
                        mx: 'auto',
                        position: 'relative',
                        textAlign: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'transparent',
                        boxShadow: 1,
                        border: '1px solid #e0e0e0',
                      }}
                    >
                      {/* Arrow Icon Box */}
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 5,
                          right: 5,
                          backgroundColor: '#fff',
                          borderRadius: 1,
                          width: 20,
                          height: 20,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: 2,

                        }}
                      >
                        <Box
                          component="img"
                          src={arrow_icon}
                          alt="arrow"
                          sx={{
                            width: 10,
                            height: 10,
                            objectFit: 'contain',
                          }}
                        />
                      </Box>

                      {/* Center Icon */}
                      <Box
                        component="img"
                        src={item.image}
                        alt={item.title}
                        sx={{ width: 50, height: 50, mb: 2 }}
                      />

                      {/* Title */}
                      <Typography
                        variant="subtitle1"
                        sx={{
                          fontWeight: 600,
                          mb: 1,
                          color: '#fff',
                          fontFamily: 'Poppins, sans-serif',
                        }}
                      >
                        {item.title}
                      </Typography>

                      {/* Description */}
                      <Typography
                        variant="body2"
                        sx={{
                          color: '#fff',
                          fontSize: 12,
                          fontFamily: 'Poppins, sans-serif',
                        }}
                      >
                        {item.description1}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
        </Box>


        <Box
          sx={{
            position: 'relative',
            color: '#fff',
            py: 6,
            px: 4,
            backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${footer_bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Top Icon with centered container */}
          <Container maxWidth="lg">
            <Box sx={{ mb: 4, textAlign: 'left' }}>
              <Box
                component="img"
                src={igs_procurement}
                alt="Footer Icon"
                sx={{ width: 284, height: 90 }}
              />
            </Box>

            {/* Grid of Links with proper padding */}
            <Grid container spacing={4}>
              {footerData.map((column, idx) => (
                <Grid item xs={12} sm={6} md={2} key={idx}>
                  {/* Column heading */}
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontWeight: 700,
                      mb: 2,
                      pl: 2, // Add left padding to align with list items
                      fontFamily: 'Poppins, sans-serif',
                      color: '#fff',
                      fontSize: 12
                    }}
                  >
                    {column.heading}
                  </Typography>

                  {/* List items container with padding */}
                  <Box sx={{ pl: 0.5, pr: 0.5 }}> {/* Adjust padding values as needed */}
                    {column.items.map((item, i) => (
                      <Box key={i}>
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'flex-start', // Align items to top
                            gap: 1,
                            mb: 1,
                            cursor: 'pointer',
                            '&:hover .item-text': { color: '#fff' },
                          }}
                        >
                          {/* Icon with fixed dimensions */}
                          <Box
                            component="img"
                            src={play_icon}
                            alt="arrow"
                            sx={{
                              width: 5,
                              height: 6,
                              minWidth: 5, // Prevent shrinking
                              mt: '3px' // Optical alignment
                            }}
                          />

                          {/* Text container */}
                          <Box sx={{ flex: 1 }}>
                            <Typography
                              className="item-text"
                              variant="body2"
                              sx={{
                                fontSize: 13,
                                color: '#ccc',
                                fontFamily: 'Poppins, sans-serif',
                                lineHeight: 1.4
                              }}
                            >
                              {item}
                            </Typography>
                          </Box>
                        </Box>

                        {/* Divider - now properly aligned below icon */}
                        {i < column.items.length - 1 && (
                          <Divider sx={{
                            borderColor: '#506BA4',
                            opacity: 0.6,
                            my: 1,
                            // ml: 4, // 3 (icon) + 1 (gap)
                            width: 'calc(100% - 32px)' // 24px icon + gap compensation
                          }} />
                        )}



                        {/* Add Stay Connected section after last item */}
                        {i === column.items.length - 1 && column.heading === 'Company' && (
                          <>
                            <Divider sx={{ borderColor: '#506BA4', opacity: 0.6, my: 3 }} />

                            {/* Stay Connected Heading */}
                            <Typography
                              variant="subtitle1"
                              sx={{
                                fontWeight: 700,
                                mb: 2,
                                fontFamily: 'Poppins, sans-serif',
                                color: '#fff',
                              }}
                            >
                              Stay Connected
                            </Typography>

                            {/* Social Media Icons */}
                            <Box sx={{
                              display: 'flex',
                              flexDirection: 'column',
                              gap: 2,
                              mb: 3
                            }}>
                              {/* First row with 3 icons */}
                              <Box sx={{ display: 'flex', gap: 2 }}>
                                {[facebook_icon, insta_icon, linkedin_icon].map((social) => (
                                  <Box
                                    key={social}
                                    component="img"
                                    src={social}
                                    alt={social}
                                    sx={{
                                      width: 24,
                                      height: 24,
                                      cursor: 'pointer'
                                    }}
                                  />
                                ))}
                              </Box>

                              {/* Second row with 2 icons */}
                              <Box sx={{ display: 'flex', gap: 2 }}>
                                {[youtube_icon, x_icon].map((social) => (
                                  <Box
                                    key={social}
                                    component="img"
                                    src={social}
                                    alt={social}
                                    sx={{
                                      width: 24,
                                      height: 24,
                                      cursor: 'pointer'
                                    }}
                                  />
                                ))}
                              </Box>
                            </Box>
                            {/* Subscribe Section */}
                            <Typography
                              variant="body2"
                              sx={{
                                fontWeight: 600,
                                mb: 1,
                                fontFamily: 'Poppins, sans-serif',
                                color: '#fff',
                              }}
                            >
                              Subscribe
                            </Typography>

                            <Box sx={{
                              display: 'flex',
                              mb: 2,
                              '& .MuiOutlinedInput-root': {
                                borderTopRightRadius: 0,
                                borderBottomRightRadius: 0,
                              },
                              '& .MuiButton-root': {
                                borderTopLeftRadius: 0,
                                borderBottomLeftRadius: 0,
                              }
                            }}>
                              <TextField
                                variant="outlined"
                                size="small"
                                placeholder="Your email"
                                sx={{
                                  flex: 1,
                                  '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                      borderColor: '#fff',
                                      borderRight: 'none' // Remove right border
                                    },
                                    backgroundColor: 'rgba(255,255,255,0.1)',
                                  },
                                  '& .MuiInputBase-input': {
                                    py: '8px',
                                    fontSize: 14,
                                    color: '#fff',
                                  },
                                }}
                              />
                              <Button
                                variant="contained"
                                sx={{
                                  backgroundColor: '#F36434',
                                  color: '#fff',
                                  px: 2,
                                  minWidth: 'unset',
                                  ml: 0, // Remove left margin
                                  '&:hover': {
                                    backgroundColor: '#F36434',
                                  }
                                }}
                              >
                                Go
                              </Button>
                            </Box>
                          </>
                        )}
                      </Box>
                    ))}
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

      </div>


    </div>
  );
}
