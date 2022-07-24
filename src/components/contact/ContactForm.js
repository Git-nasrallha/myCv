import React from 'react';
import styled from "styled-components";
import {darkColor,grayColor,mainColor,ButtonControl} from "../../appStyle/styleVariables";
import {Formik ,Form,Field,ErrorMessage} from "formik";
import * as yup from 'yup';
import Error from "./Error";

let schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    message: yup.string().required(),
   
  });


const ContactForm = () => {
    return (
        <ContForm>
            <h3>contact form</h3>
            <Formik
                initialValues={{name:"",email:"",message:""}}
                validationSchema={schema}
            >
                <Form>
                    <lable>Name</lable>
                    <Field type="text" name="name" className="form-control" />
                    <ErrorMessage name="name" component={Error} />

                    <lable>Email</lable>
                    <Field type="Email" name="email" className="form-control" />
                    <ErrorMessage name="email" component={Error}  />
                    
                    <lable>message</lable>
                    <Field name="message"  as="textarea" className="form-control" />
                    <ErrorMessage name="message" component={Error}  />
                    <ButtonControl  type="submit"> send message </ButtonControl>
                </Form>

            </Formik>
        </ContForm>
    )
}

export default ContactForm;

const ContForm=styled.div`
    h3{
        margin-bottom:30px;
        text-transform:capitalize;
        font-size:30px;
        color:${darkColor};
    }
    form{
        display:flex;
        flex-direction:column;
        lable{
            text-transform: capitalize;
            margin-bottom:15px;
            font-weight:600;
            color:${darkColor};
        }
        .form-control{
            margin-bottom:20px;
            border-color:${mainColor};
            outline:none;
            &:focus{
                box-shadow:none;
                background-color:${grayColor};
            }
        }
        textarea{
            height:150px;
        }
    }
`
