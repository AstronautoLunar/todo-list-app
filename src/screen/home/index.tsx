// Components
import { Screen, ListTasks, Input } from "../../components";

// Contexts
import { useTask } from "../../contexts/TaskContext";

export default function HomeScreen() {
  const { tasks } = useTask();

  return (
    <Screen>
      <Input/>
      <ListTasks
        data={tasks}
      />
    </Screen>
  )
}
