import AboutUs from "../views/pages/AboutUs/AboutUs";
import AcademicInfo from "../views/pages/Apply/AcademicInfo/AcademicInfo";
import ApplyForm from "../views/pages/Apply/ApplyForm";
import PassportInfo from "../views/pages/Apply/PassportInfo/PassportInfo";
import BasicInfoForm from "../views/pages/Apply/BasicInfo/BasicInfoForm";
import HomePageServicesSection from "../views/pages/Home/HomePageServicesSection/HomePageServicesSection";
import HomePageTestimonialSection from "../views/pages/Home/HomePageTestimonialSection/HomePageTestimonialSection";
import HomePageUpcommingEventsSection from "../views/pages/Home/HomePageUpcommingEventsSection/HomePageUpcommingEventsSection";
import Disciplines from "../views/pages/Apply/Disciplines/Disciplines";
import InstitutionChoice from "../views/pages/Apply/InstitutionChoice/InstitutionChoice";

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
                path: "/passportInfo",
                element: <PassportInfo></PassportInfo>
            },
            {
                path: "/academicInfo",
                element: <AcademicInfo></AcademicInfo>
            },
            {
                path: "/disciplines",
                element: <Disciplines></Disciplines>
            },
            {
                path: "/institutionChoice",
                element: <InstitutionChoice></InstitutionChoice>
            },

            {
                path: "*",
                element: <WrongRoute> </WrongRoute>
            },
        ]
    }
])

export default router;