import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import FormComponent from "../components/Form";

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        <Image
          style={styles.profileImage}
          source={require("../assets/Walled.png")}
        />
        Walled{" "}
      </Text>
      <FormComponent state="login" navigation={navigation} />
      <TouchableOpacity onPress={() => navigation.navigate("Register")}>
        <Text style={styles.link}>
          Belum Punya Akun? <Text style={styles.link2}> Daftar Disini</Text>
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
