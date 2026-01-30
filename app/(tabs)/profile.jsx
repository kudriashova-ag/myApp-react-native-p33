import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useAuth } from "../../context/AuthContext";
import Login from "../(auth)/login";
import Button from "../../src/ui/Button/Button";
import Register from "../(auth)/register";

const Profile = () => {
  const { user, logout } = useAuth();
  const [authScreen, setAuthScreen] = useState("login");

  if (!user) {
    return authScreen === "login" ? (
      <Login onSwitch={() => setAuthScreen("register")} />
    ) : (
      <Register onSwitch={() => setAuthScreen("login")} />
    );
  }

  return (
    <View>
      <Text>Profile</Text>
      <Text>{user.email}</Text>
      <Text>{user.name}</Text>
      <Button text="Logout" onPress={logout} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Profile;
