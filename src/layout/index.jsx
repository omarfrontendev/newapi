import React from "react";
import styles from "./.module.scss";
import Sidebar from "../components/Sidebar";
import MainHeader from "../components/MainHeader";
import Footer from "../components/Footer";
import MobFixedBar from "../components/MobFixedBar";

// POP UP MODALS
import MemberAreaForms from "../models/MemberAreaForms";
import ShippingPopUp from "../models/ShippingPopUp";
import SearchFilterPopUp from "../models/SearchFilterPopUp";
import NotificationPopUp from "../components/NotificationPopUp";
import ForgotPasswordModal from "../models/ForgotPasswordModal";

export default function Layout({ children }) {
  return (
    <main className={styles.main__layout}>
      <Sidebar />
      <div className={styles.app__main__container}>
        <MainHeader logged={true} />
        <div className={styles.app__container}>
          <div className="container__wrapper">{children}</div>
        </div>
        <MobFixedBar />
      </div>
      <Footer />
      {/* POP UP MODALS */}
      <MemberAreaForms />
      <ForgotPasswordModal />
      <ShippingPopUp />
      <SearchFilterPopUp />
      <NotificationPopUp />
    </main>
  );
}
