// Core
import Animated, { 
  useSharedValue, 
  useAnimatedStyle, 
  withTiming,
  withSequence
} from "react-native-reanimated";

// Components
import { 
  Area, 
  AreaInput, 
  AreaButtonSend,
  PressArea
} from "./styles";

// Icons
import { Ionicons } from '@expo/vector-icons';

// Styles
import colors from "../../styles/colors";

export default function Input() {
  const scaleAnimated = useSharedValue(1);

  const styleIcon = useAnimatedStyle(() => {
    
    return {
      transform: [
        { scale: scaleAnimated.value}
      ]
    };
  });

  function sendTask() {
    scaleAnimated.value = withSequence(
      withTiming(0.8, { duration: 200 }),
      withTiming(1, { duration: 200 }),
    )
  }

  return (
    <Area>
      <AreaInput/>

      <PressArea onPress={sendTask}>
        <AreaButtonSend>
          <Animated.View
            style={styleIcon}
          >
            <Ionicons 
              name="send" 
              size={24} 
              color={colors.percentage10} 
            />
          </Animated.View>
        </AreaButtonSend>
      </PressArea>
    </Area>
  )
}