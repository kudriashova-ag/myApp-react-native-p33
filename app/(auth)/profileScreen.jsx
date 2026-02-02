import React, { use, useEffect, useRef, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { useAuth } from "../../context/AuthContext";
import Button from "../../src/ui/Button/Button";
import { CameraView, useCameraPermissions } from "expo-camera";
import * as ImagePicker from "expo-image-picker";
import * as Location from "expo-location";
import * as Haptics from "expo-haptics";

const ProfileScreen = () => {
  const { user, logout } = useAuth();

  const cameraRef = useRef(null);

  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [photoUri, setPhotoUri] = useState(null);
  const [city, setCity] = useState(null);

  const [cameraPermission, requestCameraPermission] = useCameraPermissions();
  const [galleryPermission, requestGalleryPermission] =
    ImagePicker.useMediaLibraryPermissions();

  useEffect(() => {
    const getLocation = async () => {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        console.log(status);

        if (status !== "granted") return;
        const location = await Location.getCurrentPositionAsync();
        const address = await Location.reverseGeocodeAsync(location.coords);
        if (address.length > 0) {
          setCity(
            address[0].city ||
              address[0].region ||
              address[0].country ||
              "Не визначено",
          );
        }
      } catch (error) {
        console.log(error);
      }
    };
    getLocation();
  }, []);

  const takePhoto = async () => {
    // Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
    const photo = await cameraRef.current.takePictureAsync({ quality: 0.7 });
    setPhotoUri(photo.uri);
    setIsCameraOpen(false);
  };

  const pickImage = async () => {
    if (!galleryPermission.granted) {
      const result = await requestGalleryPermission();
      if (!result.granted) return;
    }
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.7,
    });

    setPhotoUri(result.assets[0].uri);
  };

  if (isCameraOpen) {
    if (!cameraPermission.granted) {
      return (
        <View>
          <Text>Потрібен доступ до камери</Text>
          <Button text="Дозволити" onPress={requestCameraPermission} />
        </View>
      );
    }

    return (
      <View style={{ flex: 1 }}>
        <CameraView ref={cameraRef} facing="front" style={{ flex: 1 }} />
        <Button text="Зробити фото" onPress={takePhoto} />
        <Button text="Закрити" onPress={() => setIsCameraOpen(false)} />
      </View>
    );
  }

  return (
    <View>
      <Text>{user.email}</Text>
      <Text>{user.name}</Text>
      {city && <Text>{city}</Text>}

      {photoUri && <Image source={{ uri: photoUri }} style={styles.avatar} />}

      <Button text="Відкрити камеру" onPress={() => setIsCameraOpen(true)} />
      <Button text="Вибрати з галереї" onPress={pickImage} />
      <Button text="Logout" onPress={logout} />
    </View>
  );
};

const styles = StyleSheet.create({
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
});

export default ProfileScreen;
