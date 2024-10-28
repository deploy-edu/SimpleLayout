import Ionicons from "@expo/vector-icons/Ionicons";
import { FC } from "react";
import { Text, View } from "react-native";

type Props = {
  name: string;
};

const ListItem: FC<Props> = ({ name }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        padding: 20,
        borderWidth: 1,
        borderRadius: 5,
      }}
    >
      <Ionicons name="person" size={24} />
      <Text>{name}</Text>
    </View>
  );
};

export default ListItem;
