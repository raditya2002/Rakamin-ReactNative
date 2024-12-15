import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  Button,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import Box from "./components/Box";

const logoImg = require("./assets/adaptive-icon.png");

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Image
          source={require("./assets/icon.png")}
          style={styles.profileImage}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>Ahmad Raditya</Text>
          <Text style={styles.profileType}>Personal Account</Text>
        </View>
        <Image source={require("./assets/icon.png")} style={styles.sunIcon} />
      </View>

      {/* Greeting Section */}
      <View style={styles.greetingCard}>
        <View style={styles.textContainer}>
          <Text style={styles.greeting}>Good Morning, Tyo</Text>
          <Text style={styles.description}>
            Check all your incoming and outgoing transactions here
          </Text>
        </View>
        <Image
          source={require("./assets/icon.png")}
          style={styles.greetingIcon}
        />
      </View>

      {/* Acclunt No */}
      <View style={styles.accountNoCard}>
        <View style={styles.accountInfo}>
          <Text style={styles.accountLabel}>Account No.</Text>
          <Text style={styles.accountNumber}>100899</Text>
        </View>
      </View>

      {/* Account Info Section */}
      <View style={styles.accountCard}>
        <View style={styles.balanceRow}>
          <View style={styles.balanceInfo}>
            <Text style={styles.balanceLabel}>Balance</Text>
            <Text style={styles.balanceAmount}>Rp 10.000.000</Text>
          </View>
          <View style={styles.actionsContainer}>
            <TouchableOpacity style={styles.actionButtonPlus}>
              <Text style={styles.actionButtonText}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButtonMinus}>
              <Text style={styles.actionButtonText}>-</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Transaction History Section */}
      <View style={styles.historyCard}>
        <Text style={styles.historyTitle}>Transaction History</Text>
        <View style={styles.historyItem}>
          <View style={styles.historyDetails}>
            <Text style={styles.historyName}>Adityo Gizwanda</Text>
            <Text style={styles.historyType}>Transfer</Text>
            <Text style={styles.historyDate}>08 December 2024</Text>
          </View>
          <Text style={styles.historyAmountNegative}>- 75.000,00</Text>
        </View>
        <View style={styles.historyItem}>
          <View style={styles.historyDetails}>
            <Text style={styles.historyName}>Adityo Gizwanda</Text>
            <Text style={styles.historyType}>Topup</Text>
            <Text style={styles.historyDate}>25 December 2024</Text>
          </View>
          <Text style={styles.historyAmountPositive}>+ 75.000,00</Text>
        </View>
        <View style={styles.historyItem}>
          <View style={styles.historyDetails}>
            <Text style={styles.historyName}>Adityo Gizwanda</Text>
            <Text style={styles.historyType}>Transfer</Text>
            <Text style={styles.historyDate}>08 December 2024</Text>
          </View>
          <Text style={styles.historyAmountNegative}>- 75.000,00</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
    paddingHorizontal: 20,
  },
  header: {
    backgroundColor: "#ffff",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
    paddingHorizontal: 10,
    paddingVertical: 20,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 3.8,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  profileInfo: {
    flex: 1,
    marginLeft: 10,
  },
  profileName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  profileType: {
    fontSize: 14,
    color: "#666",
  },
  sunIcon: {
    width: 30,
    height: 30,
  },
  greetingCard: {
    flexDirection: "row",
    padding: 20,
    backgroundColor: "#f8f9fa",
    borderRadius: 10,
    marginBottom: 20,
  },
  textContainer: {
    flex: 1,
  },
  greeting: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  description: {
    fontSize: 14,
    color: "#666",
    marginTop: 5,
  },
  greetingIcon: {
    width: 50,
    height: 50,
  },
  accountCard: {
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    marginBottom: 20,
    marginHorizontal: 15,
  },

  accountNoCard: {
    padding: 20,
    backgroundColor: "#19918F",
    borderRadius: 10,
    marginBottom: 20,
    marginLeft: 15,
    marginRight: 15,
  },
  accountInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  accountLabel: {
    fontSize: 14,
    color: "#ffff",
  },
  accountNumber: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#ffff",
  },
  balanceInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    flex: 1,
  },
  balanceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  balanceLabel: {
    fontSize: 16,
    color: "#555",
    marginBottom: 5,
  },
  balanceAmount: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    lineHeight: 20,
    paddingLeft: 10,
  },
  actionsContainer: {
    flexDirection: "row",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: -10,
  },
  actionButtonPlus: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#19918F",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  actionButtonMinus: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#19918F",
    justifyContent: "center",
    alignItems: "center",
  },
  actionButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  historyCard: {
    padding: 20,
    backgroundColor: "#ffff",
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 3,
    marginBottom: 20,
    marginLeft: 15,
    marginRight: 15,
  },
  historyTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
  },
  historyItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 3,
  },
  historyDetails: {
    flex: 1,
  },
  historyName: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
  },
  historyType: {
    fontSize: 12,
    color: "#666",
  },
  historyDate: {
    fontSize: 12,
    color: "#999",
  },
  historyAmountNegative: {
    fontSize: 14,
    fontWeight: "bold",
    color: "red",
  },
  historyAmountPositive: {
    fontSize: 14,
    fontWeight: "bold",
    color: "green",
  },
});
