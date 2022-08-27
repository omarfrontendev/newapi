import React from "react";
import PopUpWrapper from "../../components/PopUpWrapper";
import Modal from "../../components/Modal";
import { EmailIcon } from "../../UI/icons";
import SubmitBtn from "../../components/SubmitBtn";
import FormInput from "../../components/FormInput";
import validators from "../../validators";
import { Form, Field } from "react-final-form";
import { connect } from "react-redux";
import { forgotPassword } from "../../redux/actions";

const mapStateToProps = (state) => state;
const mapDispatchToProps = { forgotPassword };

const ForgotPasswordModal = function ({ forgotPassword }) {


  const onSubmitHandler = async (values) => {
    await forgotPassword(values.email);
  }

  return (
    <Modal maxWidth={"588px"} id={"forgot__password__modal"}>
      <div className={"forgot__password__area__modal"}>
        <PopUpWrapper
          id={"forgot__password__modal"}
          title={"Forgot Password"}
        >
          <Form onSubmit={onSubmitHandler}>
          {({ handleSubmit, submitting }) => (
              <form 
                onSubmit={handleSubmit} 
                className='d-flex flex-column p-4' 
                style={{rowGap: '20px'}}
              >
                <Field 
                  component={FormInput}
                  placeholder='Email Address'
                  icon={<EmailIcon />}
                  type="email"
                  name="email"
                  validate={validators.composeValidators(
                    validators.required("Email")
                    // validators.email
                  )}
                />
                <SubmitBtn
                  solidStyle={false} 
                  type="submit"
                  disabled={submitting}
                >
                  Send Reset Password
                </SubmitBtn>
              </form>
            )}
          </Form>
        </PopUpWrapper>
      </div>
    </Modal>
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(ForgotPasswordModal);
