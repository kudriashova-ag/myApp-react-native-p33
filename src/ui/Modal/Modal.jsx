import React from "react";
import { StyleSheet, View, Modal as ModalRN, Pressable } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

const Modal = ({ visible, closeModal, children }) => {
  return (
    <ModalRN visible={visible} transparent>
      <Pressable style={styles.overlay} onPress={closeModal}>
        <View style={styles.modal}>
                  
          <Pressable onPress={closeModal} style={{ alignSelf: "flex-end" }}>
            <AntDesign name="close" size={20} color="black" />
          </Pressable>

            {children}
                  
        </View>
      </Pressable>
    </ModalRN>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    width: "80%",
  },
});

export default Modal;
