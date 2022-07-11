// Components
import { FlatList } from "react-native";
import Task from "../Task";

// Types
import TaskTypes from "../../types/TaskTypes";

type ListTasksProps = {
  data: TaskTypes[];
}

export default function ListTasks({ data }: ListTasksProps) {
  return (
    <FlatList
      style={{
        width: "100%",
        paddingLeft: 24,
        paddingRight: 24,
        
      }}
      data={data}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <Task
          id={item.id}
        >
          { item.text }
        </Task>
      )}
      contentContainerStyle={{
        paddingBottom: 100,
        paddingTop: 80,
      }}
      showsVerticalScrollIndicator={false}
    />
  )
}