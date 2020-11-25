import React from "react";
import { Alert, Keyboard,Picker,Text } from "react-native";
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
 

  state = {
    language: 'java',
  };
  return (
    <Form
      initialValues={{ message: "" }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
  
  <Text>Quantity</Text>

    <Picker
    //selectedValue={this.state.language}
    style={{height: 50, width: 400}}
    onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}
    >
    <Picker.Item label="1" value="java" />
    <Picker.Item label="2" value="js" />
    <Picker.Item label="3" value="java" />
    <Picker.Item label="4" value="js" />
    <Picker.Item label="5" value="java" />
  </Picker>

      <SubmitButton title="Add To Cart" />
    </Form>
  );
}

const validationSchema = Yup.object().shape({
  message: Yup.string().required().min(1).label("Message"),
});

export default ContactSellerForm;
