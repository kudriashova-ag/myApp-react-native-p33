import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    button: {
        padding: 10,
        borderRadius: 8,
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    primary: {
        backgroundColor: 'dodgerblue',
    },
    danger: {
        backgroundColor: 'red'
    },
    secondary: {
        backgroundColor: '#777'
    },
    pressed: {
        opacity: 0.6
    },
    disabled: {
        opacity: 0.4
    },

    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold'
    }
})

export default styles