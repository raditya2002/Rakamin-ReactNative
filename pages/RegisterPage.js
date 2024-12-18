import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import FormComponent from "../components/Form";

export default function Register({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        <Image
          style={styles.profileImage}
          source={require("../assets/Walled.png")}
        />
        Walled
      </Text>
      <FormComponent state="register" />
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={styles.link}>
          Already have an account?<Text style={styles.link2}>Login here</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  title: {
    fontSize: 48,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 100,
    alignItems: "center",
  },
  link2: {
    marginTop: 10,
    color: "blue",
    textAlign: "center",
    textDecorationLine: "underline",
  },
  link: {
    marginTop: 10,
    color: "black",
    textAlign: "center",
  },
  profileImage: {
    width: 50,
    height: 50,
  },
});
