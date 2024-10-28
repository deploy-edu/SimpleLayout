import EvilIcons from "@expo/vector-icons/EvilIcons";
import Icon from "@expo/vector-icons/Ionicons";
import { Text, View } from "react-native";

const Header = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        height: 50,
        paddingHorizontal: 20,
        marginBottom: 20,
      }}
    >
      <Icon name="arrow-back" size={30} />
      <View style={{ flex: 1 }}>
        <Text
          style={{
            textAlign: "center",
          }}
        >
          Header
        </Text>
      </View>
      <EvilIcons name="gear" size={24} color="black" />
    </View>
  );
};

export default Header;
