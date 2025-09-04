import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router";

import loadingLogo from "../assets/loading_logo.gif";

const HomePage = lazy(() => import("../pages/HomePage"));
const AboutUsPage = lazy(() => import("../pages/AboutUsPage"));
const PropertiesPage = lazy(() => import("../pages/PropertiesPage"));
const PropertyDetailsPage = lazy(() => import("../pages/PropertyDetailsPage"));
const ContactUsPage = lazy(() => import("../pages/ContactUsPage"));

export default function AppRoutes() {
    return (
        <Suspense fallback={<div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img style={{ width: '84px', height: '84px' }} src={loadingLogo} alt="loading" loading="lazy" />
        </div>}>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about_us" element={<AboutUsPage />} />
                <Route path="/property" element={<PropertiesPage />} />
                <Route path="/contact_us" element={<ContactUsPage />} />
                <Route path="/property/:property_id" element={<PropertyDetailsPage />} />

            </Routes>
        </Suspense>
    )
}