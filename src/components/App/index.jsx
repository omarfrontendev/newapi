import React from "react";
import { Routes, Route } from "react-router-dom";

// PAGES
import StartPage from "../../pages/StartPage";
import HomePage from "../../pages/Homepage";
import RestaurantsPage from "../../pages/AllRestaurantsPage";
import PopularRestaurantsPage from "../../pages/PopularRestaurantsPage";
import RecommendedPage from "../../pages/RecommendedPage";
import FavouritesPage from "../../pages/FavouritesPage";
import SearchResultsPage from "../../pages/SearchResultsPage";
import RestaurantDetailsPage from "../../pages/RestaurantDetailsPage";
import RestaurantInfoPage from "../../pages/RestaurantInfoPage";
import OrderDetailsPage from "../../pages/OrderDetailsPage";
import OrderTrackingPage from "../../pages/OrderTrackingPage";
import ResetPasswordPage from "../../pages/ResetPasswordPage";

// Components
import Layout from "../../layout";
import Navigation from "../Navigation";

// Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/global.style.scss";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/js/dist/dropdown";
import "bootstrap/js/dist/button";

export default function App() {
  return (
    <Layout>
      <Navigation />
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/restaurants" element={<RestaurantsPage />} />
        <Route path="/popular" element={<PopularRestaurantsPage />} />
        <Route path="/recommended" element={<RecommendedPage />} />
        <Route path="/favourites" element={<FavouritesPage />} />
        <Route path="/search" element={<SearchResultsPage />} />
        <Route path="/restaurant/:SLUGRESTAURANT" element={<RestaurantDetailsPage />} />
        <Route path="/restaurant-info" element={<RestaurantInfoPage />} />
        <Route path="/order-details" element={<OrderDetailsPage />} />
        <Route path="/order-tracking" element={<OrderTrackingPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
      </Routes>
    </Layout>
  );
}
