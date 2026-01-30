import React, { useState } from "react";
import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import AppTextInput from "../../src/ui/Input/AppTextInput";
import Button from "../../src/ui/Button/Button";
import { useAuth } from "../../context/AuthContext";

const Register = ({ onSwitch }) => {
  const { register, login } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorName, setErrorName] = useState(null);
  const [errorEmail, setErrorEmail] = useState(null);
  const [errorPassword, setErrorPassword] = useState(null);

  const handleLogin = async () => {
    if (!email) setErrorEmail("Введіть email");
    if (!password) setErrorPassword("Введіть пароль");
    if (!name) setErrorName("Введіть ім'я");

    try {
      if (email && password && name) {
        await register({ name, email, password });
        await login({ email, password });
      }
    } catch {
      Alert.alert("Error", "Invalid email or password");
    }
  };

  return (
    <View style={styles.container}>
      <AppTextInput
        label="Name"
        placeholder="Введіть ім'я"
        value={name}
        onChangeText={setName}
        error={errorName}
      />
      <AppTextInput
        label="Email"
        placeholder="Введіть email"
        value={email}
        onChangeText={setEmail}
        error={errorEmail}
      />
      <AppTextInput
        label="Пароль"
        placeholder="Введіть пароль"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        error={errorPassword} // тут можна передавати помилку
      />
      <Button text="Зареєструватись" onPress={handleLogin} />
      <Text>
        Вже є аккаунту?
        <Pressable onPress={onSwitch} style={{ color: "dodgerblue" }}>
          <Text>Увійти</Text>
        </Pressable>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffffff",
    padding: 16,
  },
});

export default Register;
