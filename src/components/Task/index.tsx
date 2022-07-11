// Core
import { useEffect } from "react";
import Animated, { 
  useSharedValue, 
  useAnimatedStyle, 
  withTiming, 
  interpolateColor 
} from "react-native-reanimated";
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
import { Feather } from '@expo/vector-icons';

// Contexts
import { useTask } from "../../contexts/TaskContext";
import { Alert } from "react-native";

type TaskProps = {
  children?: string;
  id: string;
}

const AreaCheckboxAnimated = Animated.createAnimatedComponent(AreaCheckbox);

export default function Task({ 
  children, 
  id
}: TaskProps) {
  const { handleCheck, findTask, deleteTask } = useTask();
  const colorAreaCheck = useSharedValue(1);
  const opacityAreaButton = useSharedValue(0);

  const checkedAreaStyle = useAnimatedStyle(() => {

    return {
      backgroundColor: interpolateColor(colorAreaCheck.value, [ 0, 1 ], [ colors.percentage10, colors.percentage60 ])
    }
  });

  const taskAreaStyle = useAnimatedStyle(() => {

    return {
      opacity: opacityAreaButton.value,
    }
  });

  function handleChecked() {
    try {
      const taskSelected = findTask(id);
  
      if (!!taskSelected) {
        handleCheck(id, !taskSelected.checked)
        
        if (taskSelected.checked) {
          colorAreaCheck.value = withTiming(1, { duration: 200 });
        } else {
          colorAreaCheck.value = withTiming(0, { duration: 200 });
        }
      } else {
        Alert.alert("Não foi possível marcar a tarefa como concluída");
      }
    } catch (error) {
      Alert.alert("Error ao marcar a tarefa como concluída");
    }
  }

  function handleDelete() {
    deleteTask(id);
  }

  useEffect(() => {
    opacityAreaButton.value = withTiming(1, { duration: 500 });

    const taskSelected = findTask(id);

    colorAreaCheck.value = taskSelected?.checked ? 0 : 1;
  }, []);

  return (
    <PressArea onPress={handleChecked}>
      <Animated.View style={taskAreaStyle}>
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
          <PressArea onPress={handleDelete}>
            <Feather
              name="delete" 
              size={32} 
              color="#ff0000aa" 
            />
          </PressArea>
        </Area>
      </Animated.View>
    </PressArea>
  )
}