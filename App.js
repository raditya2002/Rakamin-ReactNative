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

// export default function App() {
//   return (
//     // View fot bg
//     // <View style={{ flex: 1, backgroundColor: "plum" }}>
//     //   <View style={{ height: 200, width: 200, backgroundColor: "blue" }}></View>
//     //   <View
//     //     style={{ height: 200, width: 200, backgroundColor: "lightgreen" }}
//     //   ></View>
//     // </View>

//     // Text
//     // <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
//     //   <Text>
//     //     Hello <Text style={{ color: "white" }}>World</Text>
//     //   </Text>
//     // </View>

//     // Manggil Image
//     // <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
//     //   <Image source={logoImg} style={{ width: "200", height: "200" }}></Image>
//     //   <Image
//     //     source={{ uri: "https://picsum.photos/400" }}
//     //     style={{ width: "200", height: "200" }}
//     //   ></Image>
//     //   <ImageBackground
//     //     source={{ uri: "https://picsum.photos/500" }}
//     //     style={{ flex: 1 }}
//     //   >
//     //     <Text style={{ marginTop: 20, color: "red" }}> TEXT OM</Text>
//     //   </ImageBackground>
//     // </View>

//     // Scroll View
//     // <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
//     //   <ScrollView>
//     //     {/* <Image source={logoImg} style={{ width: "300", height: "300" }} /> */}
//     //     {/* Untuk Button Click Me */}
//     //     <View style={{ backgroundColor: "red" }}>
//     //       <Button
//     //         title="Hai Kevin"
//     //         onPress={() => console.log("You Call Me")}
//     //         color="white"
//     //       />
//     //     </View>
//     //     <Text>
//     //       Lorem Ipsum is simply dummy text of the printing and typesetting
//     //       industry. Lorem Ipsum has been the industry's standard dummy text ever
//     //       since the 1500s, when an unknown printer took a galley of type and
//     //       scrambled it to make a type specimen book. It has survived not only
//     //       five centuries, but also the leap into electronic typesetting,
//     //       remaining essentially unchanged. It was popularised in the 1960s with
//     //       the release of Letraset sheets containing Lorem Ipsum passages, and
//     //       more recently with desktop publishing software like Aldus PageMaker
//     //       including versions of Lorem Ipsum. Why do we use it? It is a long
//     //       established fact that a reader will be distracted by the readable
//     //       content of a page when looking at its layout. The point of using Lorem
//     //       Ipsum is that it has a more-or-less normal distribution of letters, as
//     //       opposed to using 'Content here, content here', making it look like
//     //       readable English. Many desktop publishing packages and web page
//     //       editors now use Lorem Ipsum as their default model text, and a search
//     //       for 'lorem ipsum' will uncover many web sites still in their infancy.
//     //       Various versions have evolved over the years, sometimes by accident,
//     //       sometimes on purpose injected humour and the like. Contrary to popular
//     //       belief, Lorem Ipsum is not simply random text. It has roots in a piece
//     //       of classical Latin literature from 45 BC, making it over 2000 years
//     //       old. Richard McClintock, a Latin professor at Hampden-Sydney College
//     //       in Virginia, looked up one of the more obscure Latin words,
//     //       consectetur, from a Lorem Ipsum passage, and going through the cites
//     //       of the word in classical literature, discovered the undoubtable
//     //       source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de
//     //       Finibus Bonorum et Malorum" The Extremes of Good and Evil by Cicero,
//     //       written in 45 BC. This book is a treatise on the theory of ethics,
//     //       very popular during the Renaissance. The first line of Lorem Ipsum,
//     //       "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
//     //       The standard chunk of Lorem Ipsum used since the 1500s is reproduced
//     //       below for those interested. Sections 1.10.32 and 1.10.33 from "de
//     //       Finibus Bonorum et Malorum" by Cicero are also reproduced in their
//     //       exact original form, accompanied by English versions from the 1914
//     //       translation by H. Rackham.
//     //     </Text>
//     //   </ScrollView>
//     // </View>

//     // Style Sheet
//     // <View style={styles.container}>
//     // <View style={[styles.box, styles.blue]}>
//     //   <Text>Light Blue Box</Text>
//     // </View>
//     // <View style={[styles.box, styles.green]}>
//     //   <Text>Light Green Box</Text>
//     // </View>
//     //   {/* <Text style={styles.title}>StyleSheet API</Text> */}
//     // </View>

//     // Coffe Shop
//     // <View style={styles.container}>
//     //   <View style={[styles.box, styles.blue]}>
//     //     <Text>Light Blue Box</Text>
//     //   </View>
//     //   <View style={[styles.box, styles.green]}>
//     //     <Text>Light Green Box</Text>
//     //   </View>
//     //   <Box style={{ backgroundColor: "red" }}>Box 1</Box>
//     //   <Box style={{ backgroundColor: "blue" }}>Box 2</Box>
//     //   <Box style={{ backgroundColor: "yellow" }}>Box 3</Box>
//     //   <Box style={{ backgroundColor: "green" }}>Box 4</Box>
//     //   <Box style={{ backgroundColor: "brown" }}>Box 5</Box>
//     //   <Box style={{ backgroundColor: "pink" }}>Box 6</Box>
//     // </View>

//     // Slicing Figma
//     // <SafeAreaView style={styles.bg}>
//     <SafeAreaView style={styles.bg}>
//       <View style={styles.container}>
//         <View style={styles.navbar}>
//           <Image source={require("./assets/icon.png")} style={styles.icon} />
//           <View style={styles.profileContainer}>
//             <Text style={styles.profileName}>Andika</Text>
//             <Text style={styles.profileType}>Personal Account</Text>
//           </View>
//           <View style={styles.spacer} />
//           <Image
//             source={require("./assets/splash-icon.png")}
//             style={styles.icon}
//           />
//         </View>
//       </View>
//       <View style={konten.container}>
//         <View style={konten.greetingCard}>
//           <View style={konten.textContainer}>
//             <Text style={konten.greeting}>Good Morning, Chelsea</Text>
//             <Text style={konten.description}>
//               Check all your incoming and outgoing transactions here
//             </Text>
//           </View>
//           <Image source={require("./assets/icon.png")} style={styles.icon} />
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// }

// CHat GPT
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
          <Text style={styles.profileName}>Chelsea Immanuela</Text>
          <Text style={styles.profileType}>Personal Account</Text>
        </View>
        <Image source={require("./assets/icon.png")} style={styles.sunIcon} />
      </View>

      {/* Greeting Section */}
      <View style={styles.greetingCard}>
        <View style={styles.textContainer}>
          <Text style={styles.greeting}>Good Morning, Chelsea</Text>
          <Text style={styles.description}>
            Check all your incoming and outgoing transactions here
          </Text>
        </View>
        <Image
          source={require("./assets/icon.png")}
          style={styles.greetingIcon}
        />
      </View>

      {/* Account Info Section */}
      <View style={styles.accountCard}>
        <View style={styles.accountInfo}>
          <Text style={styles.accountLabel}>Account No.</Text>
          <Text style={styles.accountNumber}>100899</Text>
        </View>
        <View style={styles.balanceInfo}>
          <Text style={styles.balanceLabel}>Balance</Text>
          <Text style={styles.balanceAmount}>Rp 10.000.000</Text>
        </View>
        <View style={styles.actionsContainer}>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionButtonText}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionButtonText}>-</Text>
          </TouchableOpacity>
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
            <Text style={styles.historyDate}>08 December 2024</Text>
          </View>
          <Text style={styles.historyAmountPositive}>+ 75.000,00</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

// Chat GPT
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 30,
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
    backgroundColor: "#f8f9fa",
    borderRadius: 10,
    marginBottom: 20,
  },
  accountInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  accountLabel: {
    fontSize: 14,
    color: "#666",
  },
  accountNumber: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  balanceInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  balanceLabel: {
    fontSize: 14,
    color: "#666",
  },
  balanceAmount: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  actionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  actionButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#00aaff",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  actionButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  historyCard: {
    padding: 20,
    backgroundColor: "#f8f9fa",
    borderRadius: 10,
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

// // Style 1
// export const styles = StyleSheet.create({
//   // Slicing Figma
//   container: {
//     backgroundColor: "white",
//     // flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   bg: {
//     backgroundColor: "#f9f9f9",
//   },
//   navbar: {
//     flexDirection: "row",
//     elevation: 3,
//     paddingHorizontal: 20,
//     alignItems: "center",
//     height: 80,
//     width: "100%",
//     backgroundColor: "#f8f9fa",
//     borderBottomWidth: 1,
//     borderBottomColor: "#ddd",
//   },
//   icon: {
//     width: 46,
//     height: 46,
//   },
//   profileContainer: {
//     marginLeft: 20,
//   },
//   profileName: {
//     color: "red",
//     fontWeight: "700",
//     fontSize: 16,
//   },
//   profileType: {
//     color: "#555",
//     fontSize: 14,
//   },
//   spacer: {
//     flex: 1,
//   },
// });
// // Style 2
// const konten = StyleSheet.create({
//   container: {
//     // flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "white",
//   },

//   greetingCard: {
//     flexDirection: "row",
//     alignItems: "center",
//     padding: 20,
//     borderRadius: 10,
//     backgroundColor: "#f8f9fa",
//     elevation: 3,
//     shadowColor: "#000",
//     shadowOpacity: 0.1,
//     shadowRadius: 5,
//     shadowOffset: { width: 0, height: 2 },
//   },
//   textContainer: {
//     flex: 1,
//   },
//   greeting: {
//     fontSize: 20,
//     fontWeight: "bold",
//     color: "#333",
//   },
//   description: {
//     fontSize: 14,
//     color: "#666",
//     marginTop: 5,
//   },
//   icon: {
//     width: 50,
//     height: 50,
//   },
// });
// container: {
//   flex: 1,
//   flexDirection: "row",
//   backgroundColor: "plum",
//   padding: 60,
//   flexWrap: "wrap",
// },

// text: {
//   fontSize: 20,
//   color: "black",
//   backgroundColor: "white",
//   padding: 20,
// },

// box: {
//   width: 200,
//   height: 200,
//   paddingHorizontal: 20,
//   paddingVertical: 20,
//   marginVertical: 10,
//   borderWidth: 2,
//   borderColor: "purple",
//   borderRadius: 5,
// },

// green: {
//   backgroundColor: "green",
// },

// blue: {
//   backgroundColor: "blue",
// },
