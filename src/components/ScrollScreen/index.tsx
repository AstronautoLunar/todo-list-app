import { 
  StyleProp, 
  ViewStyle 
} from "react-native";
import { Container } from "./styles";

type ScrollScreenProps = {
  children: JSX.Element | JSX.Element[];
  style?: StyleProp<ViewStyle>;
}

export default function ScrollScreen({ children, style }: ScrollScreenProps) {
  return (
    <Container style={style}>
      { children }
    </Container>
  )
}