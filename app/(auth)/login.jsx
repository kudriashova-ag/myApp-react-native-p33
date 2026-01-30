import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import AppTextInput from "../../src/ui/Input/AppTextInput";
import Button from "../../src/ui/Button/Button";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState(null);
  const [errorPassword, setErrorPassword] = useState(null);

  const handleLogin = () => { 
      if(!email) setErrorEmail("Введіть email");
      if(!password) setErrorPassword("Введіть пароль");
      if (email && password) {
          console.log(email, password);
     } 
  };
    
  return (
    <View style={styles.container}>
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
      <Button text="Увійти" onPress={handleLogin} />
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

export default Login;
