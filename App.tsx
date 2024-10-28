import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet } from "react-native";
import Bottom from "./src/components/Bottom";
import Content from "./src/components/Content";
import Header from "./src/components/Header";
import ListItem from "./src/components/ListItem";

const users = [
  {
    name: "John doe",
  },
  {
    name: "Jane doe",
  },
  {
    name: "John smith",
  },
];

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Header />
      <Content>
        {users.map((user, index) => (
          <ListItem name={user.name} key={index} />
        ))}
      </Content>
      <Bottom />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
