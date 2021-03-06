//Formik
import {Formik, Form} from 'formik';
import * as Yup from 'yup';
//icons
import {FiMail, FiLock} from 'react-icons/fi';
//Loader
import Loader from 'react-loader-spinner';
//redux
import {connect} from 'react-redux';
import {useHistory} from 'react-router-dom';

import  {StyleContainer, SyledTextInput, StyledFromArea, StyledFormButton, StyledLable, Avatar, StyledTitle, colors,ButtonGroup, ExtraText, TextLink, CopyrightText} from './../components/Styles';
import logo from './../assets/logo.png';
// Form elements reuse
import {TextInput} from './../components/FormLib';
// Actions
import {loginUser} from './../redux/actions/userActions';

const Login = ({loginUser}) => {
      const history = useHistory();
    return (
      <StyleContainer>
          <StyledFromArea>
               <Avatar image={logo}/>
                 <StyledTitle color={colors.theme} size={30}>Membber Login</StyledTitle>

                 <Formik
                   initialValues = {{
                     email: "",
                     password: ""
                   }}
                   validationSchema = {
                     Yup.object({
                       email: Yup.string().email("Invalid email address")
                       .required("Required"),
                       password: Yup.string()
                       .min(8,"Password is too short")
                       .max(15,"Password is too long")
                       .required("Required")
                     })
                   }
                   onSubmit = {(values,{setSubmitting,setFieldError}) => {
                     console.log(values);
                     loginUser(values, history, setFieldError, setSubmitting)
                   }}
                 >
                     {({isSubmitting}) => (
                        <Form>
                           <TextInput 
                              name="email"
                              type="text"
                              lable="Email Address"
                              placeholder="Test@gmail.com"
                              icon = {<FiMail/>}
                           />

                           <TextInput 
                              name="password"
                              type="password"
                              lable="Password"
                              placeholder="********"
                              icon={<FiLock/>}
                           />

                           <ButtonGroup>
                             {!isSubmitting && (
                             <StyledFormButton type="submit">Login</StyledFormButton>
                             )}
                             {isSubmitting && (
                               <Loader
                                 type = "ThreeDots"
                                 color = { colors.theme}
                                 height={49}
                                 width={100}
                               />
                             )}
                           </ButtonGroup>
                        </Form>
                     )}
                 </Formik>
                 <ExtraText>
                     New here? <TextLink to="/signup">Signup</TextLink>
                  </ExtraText>
          </StyledFromArea>
      </StyleContainer>
    );
};

export default connect(null,{loginUser})(Login);