import Ionicons from "@expo/vector-icons/Ionicons";
import { View } from "react-native";

const Bottom = () => {
  return (
    <View
      style={{
        height: 80,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <Ionicons name="home" size={30} />
      <Ionicons name="search" size={30} />
      <Ionicons name="bag" size={30} />
    </View>
  );
};

export default Bottom;
