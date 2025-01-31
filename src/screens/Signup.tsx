import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Formik, Field } from "formik";
import FormicInput from "../components/FormicInput";
import ButtonComponent from "../components/ButtonComponent";
import { signUp } from "../schema/signupSchema";
const Signup = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Formik
        validationSchema={signUp}
          initialValues={{ email: "" }}
          onSubmit={(values) => console.log(values)}
        >
          {({ handleSubmit, isValid }) => (
            <>
              <Field
                name="email"
                component={FormicInput}
                placeholder="Enter Email"
                keyboardType = {'email-address'}
              />
              <Field
                name="password"
                component={FormicInput}
                placeholder="Enter password"
                
              />
              <ButtonComponent  title="Sign Up"  disabled = {!isValid} onPress={handleSubmit}/>
            </>
          )}
        </Formik>
        
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    width: "80%",
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
    elevation: 10,
  },
});
