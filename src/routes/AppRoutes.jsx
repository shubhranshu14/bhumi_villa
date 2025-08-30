import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router";

const HomePage = lazy(() => import("../pages/HomePage"));
const AboutUsPage = lazy(() => import("../pages/AboutUsPage"));

export default function AppRoutes() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about_us" element={<AboutUsPage />} />
                {/* <Route path="/property/:property_id" element={<PropertyPage />} /> */}

            </Routes>
        </Suspense>
    )
}