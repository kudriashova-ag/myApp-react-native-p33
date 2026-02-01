import { useWindowDimensions } from "react-native";

const useDimensions = () => { 
    const { width, height } = useWindowDimensions();
    const isLandscape = width > height;

    return { width, height, isLandscape };
}

export default useDimensions