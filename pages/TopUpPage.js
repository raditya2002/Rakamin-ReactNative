import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { Button } from "react-native-paper";
import { createTopup } from "../api/restApi";

const TopUpScreen = ({ navigation }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [amount, setAmount] = useState("");
  const [notes, setNotes] = useState("");
  const [items, setItems] = useState([
    { label: "BYOND Pay", value: "byond" },
    { label: "Other Payment", value: "other" },
  ]);
  const credit = "c";
  const post = async () => {
    let postData = {
      type: credit,
      from_to: value,
      amount: amount,
      description: notes,
    };

    if (!credit || !items || !amount || !notes) {
      Alert.alert("Validation Error", "Data cannot be empty!");
    } else {
      try {
        const response = await createTopup(postData);
        alert("TopUp Success");
        navigation.navigate("Home");
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <View style={styles.container}>
      {/* Amount Input */}
      <Text style={styles.label}>Notes</Text>
      <TextInput
        style={styles.inputContainerNotes}
        placeholder="Enter notes"
        value={amount}
        onChangeText={setAmount}
      />

      {/* Dropdown Picker */}
      <Text style={styles.label}>Payment Method</Text>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        key={items.value}
        placeholder="Select Payment Method"
        style={styles.dropdown}
        dropDownContainerStyle={styles.dropdownContainer}
      />

      {/* Notes Input */}
      <Text style={styles.label}>Notes</Text>
      <TextInput
        style={styles.inputContainerNotes}
        placeholder="Enter notes"
        value={notes}
        onChangeText={setNotes}
      />
      <View style={{ flex: 1 }} />
      {/* Top Up Button */}
      <Button style={styles.button} onPress={post}>
        <Text style={styles.buttonText}>TopUp</Text>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#FFFFFF",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  label: {
    color: "#A9A9A9",
    marginBottom: 5,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#D3D3D3",
    marginBottom: 20,
  },
  inputContainerNotes: {
    borderBottomWidth: 1,
    borderColor: "#D3D3D3",
    paddingVertical: 5,
    fontSize: 16,
    marginBottom: 30,
  },
  currency: {
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 10,
  },
  input: {
    fontSize: 18,
    color: "#000",
  },
  dropdown: {
    borderColor: "#D3D3D3",
    marginBottom: 20,
  },
  dropdownContainer: {
    borderColor: "#D3D3D3",
  },
  button: {
    backgroundColor: "#188A8D",
    borderRadius: 5,
    paddingVertical: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#ffff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default TopUpScreen;
