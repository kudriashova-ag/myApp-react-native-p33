import { Pressable, Text, View } from "react-native";
import styles from "./styles";

const Button = ({ text, onPress, variant="primary", disabled, icon, style }) => {
  return (
      <Pressable
          onPress={onPress}
          disabled={disabled}
          style={({ pressed }) => [
              styles.button,
              styles[variant],
              pressed && styles.pressed,
              disabled && styles.disabled,
              style
          ]}>
          {text && <Text style={styles.buttonText}>{text} </Text>}
          {icon && icon}
          
    </Pressable> 
  );
};

export default Button;
