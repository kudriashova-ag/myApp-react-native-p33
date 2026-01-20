import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";

const useStorage = (key, value, dispatch, type) => {

    useEffect(() => {
        const loadData = async () => {
            try {
                const saved = await AsyncStorage.getItem(key);
                if (saved) {
                    dispatch({ type, payload: JSON.parse(saved) });
                }
            }
            catch (error) {
                console.log(error);
            }
        }
        loadData();
    }, []);


    useEffect(() => {
        const saveData = async () => {
            try {
                await AsyncStorage.setItem(key, JSON.stringify(value));
            }
            catch (error) {
                console.log(error);
            }
        }
        saveData();
    }, [value]);
}

export default useStorage