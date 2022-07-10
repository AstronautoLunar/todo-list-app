// Core
import { useState } from "react";
import 
Animated, { useSharedValue, useAnimatedStyle, withTiming, interpolateColor } from "react-native-reanimated";
import colors from "../../styles/colors";

// Components
import { 
  Area, 
  Text, 
  AreaCheckbox,
  PressArea
} from "./styles";

// Icons
import { Entypo } from '@expo/vector-icons';

type TaskProps = {
  children?: string;
  checked?: boolean;
  id: string;
}

const AreaCheckboxAnimated = Animated.createAnimatedComponent(AreaCheckbox);

export default function Task({ 
  children, 
  checked = false,
  id
}: TaskProps) {
  const [ newChecked, setNewChecked ] = useState(checked);
  const colorAreaCheck = useSharedValue(1);

  const checkedAreaStyle = useAnimatedStyle(() => {

    return {
      backgroundColor: interpolateColor(colorAreaCheck.value, [ 0, 1 ], [ colors.percentage10, colors.percentage60 ])
    }
  });

  function handleChecked() {
    setNewChecked(!newChecked);

    if (newChecked) {
      colorAreaCheck.value = withTiming(1, { duration: 200 });
    } else {
      colorAreaCheck.value = withTiming(0, { duration: 200 });
    }
  }

  return (
    <PressArea onPress={handleChecked}>
      <Area>
          <AreaCheckboxAnimated
            style={checkedAreaStyle}
          >
            <Entypo 
              name="check" 
              size={24} 
              color={colors.percentage60}
            />
          </AreaCheckboxAnimated>
        <Text>
          { children }
        </Text>
      </Area>
    </PressArea>
  )
}