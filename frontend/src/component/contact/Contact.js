import { React, Fragment } from "react";
import emailjs from "emailjs-com";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import FaceIcon from "@material-ui/icons/Face";
import { useAlert } from "react-alert";
import "./contact.css";

import MetaData from "../layout/MetaData"

const Contact = () => {

    const alert = useAlert();


    const sendEmail = (e) => {
        e.preventDefault();
        try {
            emailjs.sendForm(
                "service_y7r2ho4",
                "template_n6lnhio",
                e.target,
                "wTLAKNH_qYAc7zISD"
            );
            alert.success("Message Sent Successfully");

        } catch (error) {

            alert.error(error)
        }

    };

    return (
        <Fragment >
            <MetaData title = "Contact Us" / >
            <div className = "updateProfileContainer" >
                <div className = "updateProfileBox" >
                <h2 className = "updateProfileHeading" >CONTACT US</h2>
                    <form className = "updateProfileForm"
                    encType = "multipart/form-data"
                    onSubmit = { sendEmail } 
                    >
                    <div className = "updateProfileName" >
                    <FaceIcon />
                    <input type = "text"
                    placeholder = "Name"
                    required name = "name" 
                    />
                    </div>

                    <div className = "updateProfileEmail" >
                    <MailOutlineIcon />
                    <input type = "email"
                    placeholder = "Email"
                    required name = "user_email"
                    />
                    </div>

                    <div className = "updateProfileEmail" >
                    <MailOutlineIcon />
                    <textarea row = "4"
                    required name = "message"

                    />
                    </div>

                    <input type = "submit"
                    value = "SEND"
                    className = "updateProfileBtn" 
                    />


                    </form> 
                </div>

            </div> 
        </Fragment>
    );
};

export default Contact;