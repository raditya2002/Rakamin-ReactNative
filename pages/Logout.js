import React from "react";
import { Text, StyleSheet, View, Alert } from "react-native";
import { Button } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

export default function Logout() {
  const navigation = useNavigation(); // Menggunakan navigation

  const handleLogout = async () => {
    try {
      // Hapus token dari AsyncStorage
      await AsyncStorage.removeItem("userToken");
      Alert.alert("Success", "Logout successful");
      navigation.navigate("Login");
    } catch (error) {
      Alert.alert("Error", "Failed to log out. Please try again.");
    }
  };

  return (
    <View style={styles.container}>
      <Button style={styles.button} mode="contained" onPress={handleLogout}>
        <Text style={styles.buttonText}>Logout</Text>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#6200ee",
    padding: 8,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
  },
});
