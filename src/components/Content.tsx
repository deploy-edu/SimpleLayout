import { FC, ReactNode } from "react";
import { View } from "react-native";

type Props = {
  children: ReactNode;
};

const Content: FC<Props> = ({ children }) => {
  return (
    <View
      style={{
        flex: 1,
        gap: 10,
        paddingHorizontal: 10,
      }}
    >
      {children}
    </View>
  );
};

export default Content;
