import React, { useState } from "react";
import { connect } from "react-redux";
import { Form, Field } from "react-final-form";
import Modal from "../../components/Modal";
import PopUpWrapper from "../../components/PopUpWrapper";
import styles from "./.module.scss";
import validators from "../../validators";
import { ImFacebook, ImGoogle } from "react-icons/im";
import SubmitBtn from "../../components/SubmitBtn";
import FormInput from "../../components/FormInput";
import { userRegister, userLogin } from "../../redux/actions";

const loginFormElements = [
  {
    type: "text",
    icon: "email",
    name: "email",
    placeholder: "Email Address",
    validate: validators.composeValidators(
      validators.required("Email")
      // validators.email
    ),
  },
  {
    type: "password",
    icon: "password",
    name: "password",
    placeholder: "Password",
    validate: validators.composeValidators(
      validators.required("Password"),
      validators.minLength("Password", 6)
    ),
  },
];
const registerFormElements = [
  {
    type: "text",
    icon: "user",
    name: "name",
    placeholder: "Username",
    validate: validators.composeValidators(
      validators.required("Username"),
      validators.minLength("Username", 6),
      validators.alphaNumeric
    ),
  },
  {
    type: "email",
    icon: "email",
    name: "email",
    placeholder: "Email Address",
    validate: validators.composeValidators(
      validators.required("Email"),
      validators.email
    ),
  },
  {
    type: "number",
    icon: "mobile",
    name: "phone",
    placeholder: "Mobile Number",
    validate: validators.composeValidators(
      validators.required("Mobile Number"),
      validators.minLength(11),
      validators.phoneNumber
    ),
  },

  {
    type: "password",
    icon: "password",
    name: "password",
    placeholder: "Password",
    validate: validators.composeValidators(
      validators.required("Password"),
      validators.minLength("Password", 6)
    ),
  },
  {
    type: "password",
    icon: "password",
    name: "password_confirmation",
    placeholder: "Confirm Password",
    validate: validators.composeValidators(
      validators.required("Password Confirmation"),
      validators.minLength("Password Confirmation", 6)
    ),
  },
];

const mapStateToProps = (state) => state;
const mapDispatchToProps = { userRegister, userLogin };

export const MemberAreaForms = ({ userRegister, userLogin }) => {
  const [isLoginForm, setIsLoginForm] = useState(false);

  const onLoginFormSubmit = async (values) => {
    await userLogin(values);
  };
  const onRegisterFormSubmit = async (values) => {
    await userRegister(values);
  };

  return (
    <Modal maxWidth={"588px"} id={"member__area__modal"}>
      <div className={styles.member__area__modal}>
        <PopUpWrapper
          textStart={true}
          id={"member__area__modal"}
          title={"Member Area"}
        >
          <div className={styles.sign__form__container}>
            <div className={styles.Sign__form__content}>
              <div
                className={`${styles.sign__main} d-flex align-items-center justify-content-between`}
              >
                <div
                  className={`${styles.sign__type} d-flex flex-column align-items-start`}
                >
                  <div className={styles.sign__title}>
                    {isLoginForm ? "Sign In" : "Sign Up"}
                  </div>
                  <div className={styles.sign__subtitle}>
                    {isLoginForm
                      ? "Good to see you back ."
                      : "Create Account to continue!"}
                  </div>
                </div>
                <div className={`${styles.sign__btns} d-flex`}>
                  <button
                    className={`${styles.sign__btn} ${
                      isLoginForm ? styles.active : ""
                    }`}
                    onClick={() => {
                      setIsLoginForm(true);
                    }}
                  >
                    Sign In
                  </button>
                  <button
                    className={`${styles.sign__btn} ${
                      isLoginForm ? "" : styles.active
                    }`}
                    onClick={() => {
                      setIsLoginForm(false);
                    }}
                  >
                    Sign Up
                  </button>
                </div>
              </div>
              {isLoginForm && (
                <div
                  className={`${styles.sign__with} d-flex align-items-center justify-content-between`}
                >
                  <div className={styles.sign__with__title}>Continue With</div>
                  <div className={`${styles.sign__with__btns} d-flex`}>
                    <button
                      className={`${styles.sign__with__btn} ${styles.facebook} d-flex align-items-center justify-content-start`}
                    >
                      <ImFacebook className={styles.icon__} /> Facebook
                    </button>
                    <button
                      className={`${styles.sign__with__btn} ${styles.google} d-flex align-items-center justify-content-start`}
                    >
                      <ImGoogle className={styles.icon__} /> Google
                    </button>
                  </div>
                </div>
              )}
              {isLoginForm && (
                <div className={`${styles.or} position-relative`}>Or</div>
              )}
              {/* /////////////////////////////////////////////////////////////////////// */}
              {/* /////////////////////////////////////////////////////////////////////// */}
              {/* /////////////////////////////////////////////////////////////////////// */}

              {isLoginForm && (
                <Form onSubmit={onLoginFormSubmit}>
                  {({ handleSubmit, submitting }) => (
                    <form
                      id="user__login__form"
                      className={styles.form__sign}
                      onSubmit={handleSubmit}
                    >
                      <div
                        className={`${styles.inputs__container} d-flex flex-column`}
                      >
                        {loginFormElements.map((item, i) => (
                          <Field
                            key={i}
                            component={FormInput}
                            placeholder={item.placeholder}
                            icon={item.icon}
                            type={item.type}
                            name={item.name}
                            validate={item.validate}
                          />
                        ))}
                      </div>
                      <div className={`${styles.forgot__pass__link}`}>
                        <button
                          data-bs-toggle="modal"
                          data-bs-target={`#forgot__password__modal`}
                          className={styles.forgot__pass__btn}
                        >
                          Forgot your password?
                        </button>
                      </div>
                      <SubmitBtn
                        solidStyle={false}
                        type="submit"
                        disabled={submitting}
                      >
                        {isLoginForm ? "Login" : "Register"}
                      </SubmitBtn>
                    </form>
                  )}
                </Form>
              )}
              {!isLoginForm && (
                <Form
                  onSubmit={onRegisterFormSubmit}
                  validate={(values) => {
                    const errors = {};
                    if (values.password_confirmation) {
                      if (values.password_confirmation !== values.password) {
                        errors.password_confirmation =
                          "Password and confirmation must be matched";
                      }
                    }
                    return errors;
                  }}
                >
                  {({ handleSubmit, submitting }) => (
                    <form
                      id="user__register__form"
                      className={styles.form__sign}
                      onSubmit={handleSubmit}
                    >
                      <div
                        className={`${styles.inputs__container} d-flex flex-column`}
                      >
                        {registerFormElements.map((item, i) => (
                          <Field
                            key={i}
                            component={FormInput}
                            placeholder={item.placeholder}
                            icon={item.icon}
                            type={item.type}
                            name={item.name}
                            validate={item.validate}
                          />
                        ))}
                      </div>
                      <div className={styles.forgot__pass__link}>
                        <button
                          data-bs-toggle="modal"
                          data-bs-target={`#forgot__password__modal`}
                          className={styles.forgot__pass__btn}
                        >
                          Forgot your password?
                        </button>
                      </div>
                      <SubmitBtn
                        solidStyle={false}
                        type="submit"
                        disabled={submitting}
                      >
                        {isLoginForm ? "Login" : "Register"}
                      </SubmitBtn>
                    </form>
                  )}
                </Form>
              )}
              {/* /////////////////////////////////////////////////////////////////////*/}
              {/* /////////////////////////////////////////////////////////////////////*/}
              {/* /////////////////////////////////////////////////////////////////////*/}
              <button
                className={styles.toggle__sign}
                onClick={() => {
                  setIsLoginForm((prev) => !prev);
                }}
              >
                {isLoginForm
                  ? "Don't have an Account?"
                  : "Already have an Account?"}
                {isLoginForm ? (
                  <span className={styles.sign__}> Sign Up</span>
                ) : (
                  <div className={styles.sign__}> Login</div>
                )}
              </button>
            </div>
          </div>
        </PopUpWrapper>
      </div>
    </Modal>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MemberAreaForms);
