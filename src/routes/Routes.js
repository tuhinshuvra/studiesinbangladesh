import AboutUs from "../views/pages/AboutUs/AboutUs";
import ApplyForm from "../views/pages/Apply/ApplyForm";
import ApplyNow from "../views/pages/Apply/ApplyNow/ApplyNow";
import BackgroundInfo from "../views/pages/Apply/BackgroundInfo/BackgroundInfo";
import BasicInfoForm from "../views/pages/Apply/BasicForm/BasicInfoForm";
import HomePageServicesSection from "../views/pages/Home/HomePageServicesSection/HomePageServicesSection";
import HomePageTestimonialSection from "../views/pages/Home/HomePageTestimonialSection/HomePageTestimonialSection";
import HomePageUpcomingEventsModalData from "../views/pages/Home/HomePageUpcommingEventsSection/HomePageUpcomingEventsModalData";
import HomePageUpcommingEventsSection from "../views/pages/Home/HomePageUpcommingEventsSection/HomePageUpcommingEventsSection";

const { createBrowserRouter } = require("react-router-dom");
const { default: MainLayout } = require("../layout/MainLayout");
const { default: Home } = require("../views/pages/Home/Home");
const { default: WrongRoute } = require("../views/components/Shared/ErrorDisplay/WrongRoute");


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },

            {
                path: "/services",
                element: <HomePageServicesSection></HomePageServicesSection>
            },

            {
                path: "/about",
                element: <AboutUs></AboutUs>
            },
            {
                path: "/apply",
                element: <ApplyForm></ApplyForm>
            },

            {
                path: "/testimonial",
                element: <HomePageTestimonialSection></HomePageTestimonialSection>
            },
            {
                path: "/events",
                element: <HomePageUpcommingEventsSection></HomePageUpcommingEventsSection>
            },

            {
                path: "/basicInfo",
                element: <BasicInfoForm></BasicInfoForm>
            },
            {
                path: "/backgroundInfo",
                element: <BackgroundInfo></BackgroundInfo>
            },
            {
                path: "/applyNow",
                element: <ApplyNow></ApplyNow>
            },

            {
                path: "*",
                element: <WrongRoute> </WrongRoute>
            },
        ]
    }
])

export default router;