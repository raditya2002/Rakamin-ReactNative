import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  SafeAreaView,
  TextInput,
  Button,
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableOpacity,
  Modal,
  ScrollView,
} from "react-native";
import { Checkbox } from "react-native-paper"; // Hanya gunakan Checkbox dari react-native-paper
import { login, register } from "../api/restApi";
import { useAuth } from "../contex/AuthContex";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function FormComponent({ state }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errors, setErrors] = useState({});
  const [isChecked, setIsChecked] = useState(false);
  const [isCheckedError, setIsCheckedError] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  // const { login: setLoginState } = useAuth();

  const post = async () => {
    let postData = {
      full_name: name,
      email: email,
      password: password,
      phone_number: phoneNumber,
    };

    if (!name || !email || !password || !phoneNumber) {
      Alert.alert(
        "Validation Error",
        "fullname, email, and password cannot be empty!"
      );
    } else {
      console.log(postData);
      setLoading(true);
      try {
        console.log("Test");
        const newPost = await register(postData);
        console.log(newPost);
        alert("Success");
        navigation.navigate("Login");
      } catch (error) {
        setErrorFetch(error);
        alert(errorFetch.toString());
      }
    }
  };

  const validate = () => {
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!validEmail) {
      setErrors({ messageEmailError: "Email salah!" });
      return false;
    } else if (password.length < 7) {
      setErrors({
        messagePasswordError: "Password harus lebih dari 7 karakter.",
      });
      return false;
    } else if (!isChecked) {
      setIsCheckedError("Anda harus menyetujui syarat & ketentuan.");
      return false;
    }
    setErrors({});
    setIsCheckedError("");
    return true;
  };

  const handleSubmit = () => {
    if (validate()) {
      handleLogin(email, password);
    }
  };

  const handleLogin = async (email, password) => {
    // console.log(password);
    try {
      const { token } = await login(email, password);
      await AsyncStorage.setItem("userToken", token);
      // setLoginState(token);
      Alert.alert("Success", "Login successful");
      navigation.navigate("Home");
    } catch (error) {
      Alert.alert("Error", error.message);
    }
  };

  return (
    <SafeAreaView>
      {state === "register" && (
        <View>
          <TextInput
            style={styles.input}
            placeholder="Nama Anda"
            value={name}
            onChangeText={(text) => setName(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Nomor Telepon"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            autoCorrect={false}
            keyboardType="phone-pad"
          />
        </View>
      )}

      <TextInput
        style={styles.input}
        placeholder="Alamat Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        autoCorrect={false}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        textContentType="password"
        onChangeText={setPassword}
        autoCorrect={false}
        autoCapitalize="none"
        secureTextEntry
      />
      <View style={{ marginBottom: 20 }}>
        <View style={styles.termsContainer}>
          <View style={styles.checkboxContainer}>
            <Checkbox
              status={isChecked ? "checked" : "unchecked"}
              color="#088A85"
              onPress={() => setIsChecked((prev) => !prev)}
            />
          </View>
          <Text style={styles.termsText}>
            Saya menyetujui{" "}
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <Text style={styles.termsLink}>Syarat dan Ketentuan</Text>
            </TouchableOpacity>
            <Text style={{ color: "red" }}> *</Text>
          </Text>
        </View>
        {isCheckedError && (
          <Text style={styles.errorText}>{isCheckedError}</Text>
        )}
      </View>
      {errors.messageEmailError && (
        <Text style={styles.errorText}>{errors.messageEmailError}</Text>
      )}
      {errors.messagePasswordError && (
        <Text style={styles.errorText}>{errors.messagePasswordError}</Text>
      )}

      {state === "login" ? (
        <TouchableOpacity style={styles.buttonStyle}>
          <Button title="Login" color={"white"} onPress={handleSubmit} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.buttonStyle}>
          <Button title="Register" color={"white"} onPress={() => post()} />
        </TouchableOpacity>
      )}

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {/* Header */}
            <View style={styles.modalHeader}>
              <Text style={styles.headerTitle}>Terms and Conditions</Text>
            </View>

            {/* Scrollable Content */}
            <ScrollView style={styles.modalBody}>
              <Text style={styles.modalText}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </Text>
              <Text style={styles.modalText}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. Lorem
                Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </Text>
              <TouchableOpacity style={styles.buttonStyle}>
                <Button
                  title="Tutup"
                  color={"white"}
                  onPress={() => setModalVisible(false)}
                />
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    marginHorizontal: 16,
    fontSize: 16,
  },
  errorText: {
    fontSize: 12,
    color: "red",
    marginLeft: 16,
  },
  termsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 16,
    marginBottom: 15,
  },
  checkboxContainer: {
    width: 20,
    height: 20,
    marginRight: 6,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#aaa",
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  termsText: {
    color: "#000",
    flexShrink: 1,
  },
  termsLink: {
    fontSize: 14,
    lineHeight: 15,
    fontFamily: "Arial",
    flexDirection: "row",
    alignItems: "center",
    color: "#088A85",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "80%",
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  // Background transparan
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  // Konten Modal
  modalContent: {
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingBottom: 20,
    overflow: "hidden",
    maxHeight: "90%", // Batas tinggi agar konten tidak memenuhi layar
  },
  // Header Modal
  modalHeader: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    padding: 16,
  },
  backButton: {
    fontSize: 20,
    color: "#088A85",
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
  },
  // Body Modal (Scrollable)
  modalBody: {
    paddingHorizontal: 16,
  },
  modalText: {
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 12,
    color: "#333",
    textAlign: "justify",
  },
  buttonStyle: {
    backgroundColor: "#188A8D",
    borderRadius: 5,
    paddingVertical: 5,
    width: 280,
    alignItems: "center",
    alignSelf: "center",
  },
});
