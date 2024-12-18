import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Button,
} from "react-native";
import { createTransfer } from "../api/restApi";

const TransferPage = ({ navigation }) => {
  const [amount, setAmount] = useState("");
  const [notes, setNotes] = useState("");
  const [purpose, setPupose] = useState("");
  const debit = "d";

  const post = async () => {
    let postData = {
      type: debit,
      from_to: purpose,
      amount: amount,
      description: notes,
    };

    if (!debit || !purpose || !amount || !notes) {
      Alert.alert("Validation Error", "Data cannot be empty!");
    } else {
      try {
        const response = await createTransfer(postData);
        alert("Transactions Success");
        navigation.navigate("Home");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <View style={styles.container}>
      {/* Recipient */}
      <Text style={styles.label}>To: </Text>
      <TextInput
        style={styles.notesInput}
        placeholder="Enter notes"
        value={purpose}
        onChangeText={setPupose}
      />
      {/* Amount Input */}
      <Text style={styles.label}>Amount</Text>
      <View style={styles.amountContainer}>
        <Text style={styles.currency}>IDR</Text>
        <TextInput
          style={styles.amountInput}
          placeholder="0"
          keyboardType="numeric"
          value={amount}
          onChangeText={setAmount}
        />
      </View>
      <View style={styles.balanceContainer}>
        <Text style={styles.balanceLabel}>Balance</Text>
        <Text style={styles.balanceValue}>IDR 10.000.000</Text>
      </View>
      {/* Notes Input */}
      <Text style={styles.label}>Notes</Text>
      <TextInput
        style={styles.notesInput}
        placeholder="Enter notes"
        value={notes}
        onChangeText={setNotes}
      />
      <View style={{ flex: 1 }} />
      {/* Transfer Button */}
      <TouchableOpacity style={styles.button}>
        <Button title="Transfer" color="#ffff" onPress={post} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9",
    padding: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  recipientContainer: {
    backgroundColor: "#188A8D",
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  recipientLabel: {
    color: "#FFFFFF",
    fontSize: 14,
  },
  recipientValue: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  label: {
    color: "#A9A9A9",
    marginBottom: 5,
  },
  amountContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#D3D3D3",
    marginBottom: 10,
    paddingBottom: 5,
  },
  currency: {
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 10,
  },
  amountInput: {
    fontSize: 18,
    color: "#000000",
    flex: 1,
  },
  balanceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  balanceLabel: {
    color: "#A9A9A9",
  },
  balanceValue: {
    color: "#188A8D",
    fontWeight: "bold",
  },
  notesInput: {
    borderBottomWidth: 1,
    borderColor: "#D3D3D3",
    paddingVertical: 5,
    fontSize: 16,
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#188A8D",
    borderRadius: 5,
    paddingVertical: 5,
    alignItems: "center",
  },
});

export default TransferPage;
