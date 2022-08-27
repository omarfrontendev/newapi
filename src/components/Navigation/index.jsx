import React, { useEffect, useLayoutEffect } from "react";
import { connect } from "react-redux";
// import { useNavigate } from "react-router-dom";
import { updateCurrentUser } from "../../redux/actions";

export const Navigation = ({ serverResponse, updateCurrentUser }) => {
  // const navigate = useNavigate();

  useLayoutEffect(() => {
    updateCurrentUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (serverResponse?.data?.auth_token) {
      localStorage.setItem("user", JSON.stringify(serverResponse.data));
      localStorage.setItem("auth_token", serverResponse.data.auth_token);
      // navigate("/home");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
  }, [serverResponse]);

  return <></>;
};

const mapStateToProps = (state) => state;
const mapDispatchToProps = { updateCurrentUser };

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
