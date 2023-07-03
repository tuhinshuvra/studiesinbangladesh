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
import InstitutionChoosed from "../views/pages/Apply/InstitutionChoosed/InstitutionChoosed";
import DocumentUpload from "../views/pages/Apply/DocumentUpload/DocumentUpload";
import FinishApplication from "../views/pages/Apply/FinishApplication/FinishApplication";
import TermsAndConditions from "../views/pages/TermsAndConditions";
import AppliedStudentList from "../views/pages/ApplyidStudents/AppliedStudentList/AppliedStudentList";
import AppliedStudentDetails from "../views/pages/ApplyidStudents/AppliedStudentDetails/AppliedStudentDetails";

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
                path: "/choosedTopics",
                element: <InstitutionChoosed></InstitutionChoosed>
            },
            {
                path: "/uploadDocument",
                element: <DocumentUpload></DocumentUpload>
            },
            {
                path: "/finishApplication",
                element: <FinishApplication></FinishApplication>
            },
            {
                path: "/appliedStudentList",
                element: <AppliedStudentList></AppliedStudentList>
            },
            {
                path: "/appliedStudentDetails",
                element: <AppliedStudentDetails></AppliedStudentDetails>
            },
            {
                path: "/termsAndConditions",
                element: <TermsAndConditions></TermsAndConditions>
            },

            {
                path: "*",
                element: <WrongRoute> </WrongRoute>
            },
        ]
    }
])

export default router;