import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";

const colors = {
  light: {
    text: "#000",
    background: "#fff",
  },
  dark: {
    text: "#fff",
    background: "#000",
  },
};

export const ThemedSafeAreaView = ({ style, ...props }) => {
  const { theme } = useSelector((state) => state.theme);
  return (
    <SafeAreaView
      style={[style, { backgroundColor: colors[theme].background }]}
      {...props}
    />
  );
};

export const ThemedText = ({ style, ...props }) => {
  const { theme } = useSelector((state) => state.theme);
  return <Text style={[style, { color: colors[theme].text }]} {...props} />;
};
