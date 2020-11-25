import React, { useState } from "react";
import { Alert, Keyboard } from "react-native";
import { Notifications } from "expo";
import * as Yup from "yup";

import { Form, FormField,PickerForm, SubmitButton } from "./forms";
import messagesApi from "../api/messages";


function ContactSellerForm({ listing }) {
 
  const handleSubmit = async ({ message }, { resetForm }) => {
    Keyboard.dismiss();
   
    const result = await messagesApi.send(message, listing.id);

    if (!result.ok) {
      console.log("Error", result);
      return Alert.alert("Error", "Could not send the message to the seller.");
    }

    resetForm();

    Notifications.presentLocalNotificationAsync({
      title: "Awesome!",
      body: "Your message was sent to the seller.",
    });
  };
 
 
  return (
    <Form
      initialValues={{ message: "" }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >

  
      <SubmitButton title="Add To Cart" />
    </Form>
  );
}

const validationSchema = Yup.object().shape({
  message: Yup.string().required().min(1).label("Message"),
});

export default ContactSellerForm;
