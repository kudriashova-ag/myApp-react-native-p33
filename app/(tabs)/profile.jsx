import { useState } from "react";
import { StyleSheet } from "react-native";
import Login from "../(auth)/login";
import Register from "../(auth)/register";
import ProfileScreen from "../(auth)/profileScreen";
import { useAuth } from "../../context/AuthContext";

const Profile = () => {
  const [authScreen, setAuthScreen] = useState("login");
  const { user } = useAuth();

  if (!user) {
    return authScreen === "login" ? (
      <Login onSwitch={() => setAuthScreen("register")} />
    ) : (
      <Register onSwitch={() => setAuthScreen("login")} />
    );
  }

  return <ProfileScreen />;
};

const styles = StyleSheet.create({});

export default Profile;
