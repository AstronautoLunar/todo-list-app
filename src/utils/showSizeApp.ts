import { Dimensions } from "react-native";

export default function showSizeApp(type: "width" | "height" ) {
  return Dimensions.get('window')[type];
}