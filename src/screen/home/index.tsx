// Core
import { useEffect } from "react";

// Components
import { 
  Screen, 
  ListTasks, 
  Input
} from "../../components";

// Contexts
import { useTask } from "../../contexts/TaskContext";

export default function HomeScreen() {
  const { tasks, toRestoreTasks } = useTask();

  useEffect(() => {
    toRestoreTasks();
  }, [ ]);

  return (
    <Screen>
      <Input/>
      <ListTasks
        data={tasks}
      />
    </Screen>
  )
}
