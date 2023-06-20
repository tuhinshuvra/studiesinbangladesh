import AboutUs from "../views/pages/AboutUs/AboutUs";
import ApplyForm from "../views/pages/Apply/ApplyForm";
import HomePageServicesSection from "../views/pages/Home/HomePageServicesSection/HomePageServicesSection";
import HomePageTestimonialSection from "../views/pages/Home/HomePageTestimonialSection/HomePageTestimonialSection";

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
                path: "*",
                element: <WrongRoute> </WrongRoute>
            },
        ]
    }
])

export default router;