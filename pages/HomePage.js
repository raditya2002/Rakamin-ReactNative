import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useEffect, useState } from "react";
import { fetchtransactionHistory, getProfile } from "../api/restApi";

const fallbackTransactionData = [
  {
    id: "1",
    name: "Adityo Gizwanda",
    type: "Transfer",
    date: "08 December 2024",
    amount: "-75,000.00",
    positive: false,
  },
  {
    id: "2",
    name: "Adityo Gizwanda",
    type: "Topup",
    date: "25 December 2024",
    amount: "+75,000.00",
    positive: true,
  },
  {
    id: "3",
    name: "Adityo Gizwanda",
    type: "Transfer",
    date: "25 December 2024",
    amount: "-75,000.00",
    positive: false,
  },
  {
    id: "4",
    name: "Adityo Gizwanda",
    type: "Topup",
    date: "25 December 2024",
    amount: "+75,000.00",
    positive: true,
  },
];

export default function HomePage({ navigation }) {
  const [data, setData] = useState(null);
  const [datatransactions, setDatatransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const profileResponse = await getProfile();
        const transactionResponse = await fetchtransactionHistory();

        setData(profileResponse.data || {});
        setDatatransactions(
          transactionResponse.data || fallbackTransactionData
        ); // Fallback if no data
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to load data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const renderTransactionItem = (item) => {
    const transactionType = item.type === "c" ? "Topup" : "Transfer";
    const transactionAmount =
      item.type === "c"
        ? `+${item.amount.toLocaleString()}`
        : `-${item.amount.toLocaleString()}`;
    const amountStyle =
      item.type === "c"
        ? styles.historyAmountPositive
        : styles.historyAmountNegative;

    return (
      <View key={item.id.toString()} style={styles.historyItem}>
        {/* <View style={styles.circle}>
          <Image
            source={require("../assets/icon.png")}
            style={styles.circleImage}
          />
        </View> */}
        <View style={{ flex: 1 }}>
          <Text style={styles.historyName}>{item.from_to || item.name}</Text>
          <Text style={styles.historyType}>{transactionType}</Text>
          <Text style={styles.historyDate}>
            {new Date(item.created_at || item.date).toLocaleDateString(
              "en-GB",
              {
                day: "numeric",
                month: "long",
                year: "numeric",
              }
            )}
          </Text>
        </View>
        <Text style={[styles.historyAmount, amountStyle]}>
          {transactionAmount}
        </Text>
      </View>
    );
  };

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#19918F" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Image
          source={require("../assets/icon.png")}
          style={styles.profileImage}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>
            {data?.name || "Ahmad Raditya Alrazi Wibowo"}
          </Text>
          <Text style={styles.profileType}>Personal Account</Text>
        </View>
        <Image source={require("../assets/icon.png")} style={styles.sunIcon} />
      </View>

      {/* Greeting Section */}
      <View style={styles.greetingCard}>
        <View style={styles.textContainer}>
          <Text style={styles.greeting}>Good Morning, {data.full_name}</Text>
          <Text style={styles.description}>
            Check all your incoming and outgoing transactions here
          </Text>
        </View>
        <Image
          source={require("../assets/icon.png")}
          style={styles.greetingIcon}
        />
      </View>

      {/* Acclunt No */}
      <View style={styles.accountNoCard}>
        <View style={styles.accountInfo}>
          <Text style={styles.accountLabel}>Account No.</Text>
          <Text style={styles.accountNumber}>{data.account_no}</Text>
        </View>
      </View>

      {/* Account Info Section */}
      <View style={styles.accountCard}>
        <View style={styles.balanceRow}>
          <View style={styles.balanceInfo}>
            <Text style={styles.balanceLabel}>Balance</Text>
            <Text style={styles.balanceAmount}>
              Rp. {data?.balance?.toLocaleString() || "0.00"}
            </Text>
          </View>
          <View style={styles.actionsContainer}>
            <TouchableOpacity
              style={styles.actionButtonPlus}
              onPress={() => navigation.navigate("TopUp")}
            >
              <Ionicons name="add" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.actionButtonMinus}
              onPress={() => navigation.navigate("Transfer")}
            >
              <Ionicons name="send" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Transaction History Section */}
      <View style={styles.historyCard}>
        <Text style={styles.historyTitle}>Transaction History</Text>
        <ScrollView>
          {datatransactions.length > 0 ? (
            datatransactions.map(renderTransactionItem)
          ) : (
            <Text style={styles.errorText}>No transactions available</Text>
          )}
        </ScrollView>
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
    marginBottom: 10,
    marginHorizontal: 15,
  },

  accountNoCard: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#19918F",
    borderRadius: 10,
    marginBottom: 10,
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
    verticalAlign: "center",
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
    flexDirection: "column",
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
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 3,
    marginBottom: 20,
    height: 300,
    marginBottom: 20,
  },
  historyTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  historyItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
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

  // API
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    color: "red",
    fontSize: 16,
  },
  postContainer: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  body: {
    fontSize: 14,
    color: "#555",
  },
});
