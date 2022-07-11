// Core
import Animated, { 
  useSharedValue, 
  useAnimatedStyle, 
  withTiming,
  withSequence
} from "react-native-reanimated";
import { useState, useEffect } from "react";
import { Alert } from "react-native";

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

// Contexts
import { useTask } from "../../contexts/TaskContext";

// Utils
import generateId from "../../utils/generateId";

export default function Input() {
  const scaleAnimated = useSharedValue(1);
  const [ valueInput, setValueInput ] = useState("");
  const { addTask, tasks } = useTask();

  const styleIcon = useAnimatedStyle(() => {
    
    return {
      transform: [
        { scale: scaleAnimated.value}
      ]
    };
  });

  function sendTask() {
    try {
      scaleAnimated.value = withSequence(
        withTiming(0.8, { duration: 200 }),
        withTiming(1, { duration: 200 }),
      );
  
      addTask({
        id: generateId(),
        text: valueInput,
        checked: false
      });

      setValueInput("");
    } catch (error) {
      Alert.alert("Error ao enviar a tarefa para a lista");
    }
  }

  return (
    <Area>
      <AreaInput
        value={valueInput}
        onChangeText={setValueInput}
        placeholder="Digite sua tarefa"
        placeholderTextColor={`${colors.percentage10}50`}
      />

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