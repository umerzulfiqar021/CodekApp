import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { Formik } from "formik";
import ButtonComponent from "../components/ButtonComponent";
import { signIn } from "../schema/loginschema";
const Formic = () => {
  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <Formik
          validationSchema={signIn}
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => console.log(values)}
        >
          {({
            values,
            handleBlur,
            handleSubmit,
            handleChange,
            errors,
            isValid,
          }) => (
            <>
              <TextInput
                style={styles.textInput}
                name="email"
                value={values.email}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                placeholder="Enter email-address"
                keyboardType="email-address"
              />
              {errors.email && (
                <Text style={{ fontSize: 10, color: "red" }}>
                  {errors.email}
                </Text>
              )}
              <TextInput
                style={styles.textInput}
                name="password"
                value={values.password}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                placeholder="Enter password"
                secureTextEntry
              />
              {errors.password && (
                <Text style={{ fontSize: 10, color: "red" }}>
                  {errors.password}
                </Text>
              )}
              <ButtonComponent
                title="Submit"
                onPress={handleSubmit}
                disabled={!isValid}
              />
            </>
          )}
        </Formik>
        
      </View>
    </View>
  );
};

export default Formic;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loginContainer: {
    width: "80%",
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
    elevation: 10,
    // backgroundColor: "#e6e6e6",
  },
  textInput: {
    height: 40,
    width: "100%",
    margin: 10,
    backgroundColor: "white",
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 10,
  },
});
