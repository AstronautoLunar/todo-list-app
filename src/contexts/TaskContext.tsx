// Core
import { createContext, useContext, useState } from "react";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Types
import TaskTypes from "../types/TaskTypes";

type TaskContextTypes = {
  tasks: TaskTypes[];
  addTask: (task: TaskTypes) => void;
  deleteTask: (id: string) => void;
  tasksLength: () => number;
  handleCheck: (id: string, check: boolean) => void;
  findTask: (id: string) => TaskTypes | undefined;
  toRestoreTasks: () => void;
}

const TaskContext = createContext({} as TaskContextTypes);

type TaskProviderProps = {
  children: JSX.Element | JSX.Element[];
}

export function TaskProvider({ children }: TaskProviderProps) {
  const [ tasks, setTasks ] = useState([] as TaskTypes[]);
  
  async function addTask(task: TaskTypes) {
    try {
      const newListTasks = [ ...tasks, task ];

      setTasks(newListTasks);

      await AsyncStorage.setItem("@tasks", JSON.stringify(newListTasks));
    } catch (error) {
      Alert.alert("Error ao adicionar uma nova tarefa");
    }
  }

  async function deleteTask(id: string) {
    try {
      const newListTasks = tasks.filter(item => item.id !== id);

      setTasks(newListTasks);

      await AsyncStorage.setItem("@tasks", JSON.stringify(newListTasks));
    } catch (error) {
      Alert.alert("Error ao deletar uma nova tarefa");
    }
  }

  function tasksLength(): number {
    try {
      return tasks.length;
    } catch (error) {
      Alert.alert("Error ao mostrar a quantidade de tarefas salvas");
      return 0
    }
  }

  async function handleCheck(id: string, check: boolean) {
    try {
      const taskFoundIndex = tasks.findIndex(item => item.id === id);
      const taskFoundObject = findTask(id);
      const newListTasks = tasks;

      if (!!taskFoundObject) {
        newListTasks[taskFoundIndex] = {
          ...taskFoundObject,
          checked: check,
        }

        await AsyncStorage.setItem("@tasks", JSON.stringify(newListTasks));
      } else {
        Alert.alert("Não foi encontrado a tarefa");
      }
  
      setTasks(tasks);
    } catch (error) {
      Alert.alert("Error marcar a tarefa como concluída");
    }
  }

  function findTask(id: string) {
    try {
      return tasks.find(item => item.id === id);
    } catch (error) {
      Alert.alert("Error ao encontrar a tarefa em especifico");
    }
  }

  async function toRestoreTasks() {
    try {
      const tasksSaveApp = await AsyncStorage.getItem("@tasks");

      if (typeof tasksSaveApp === "string") {
        const listTasksSaved = JSON.parse(tasksSaveApp);

        setTasks(listTasksSaved);
      }
    } catch (error) {
      Alert.alert("Error ao restaurar tarefas salvas");
    }
  }

  return (
    <TaskContext.Provider 
      value={{
        tasks,
        addTask,
        deleteTask,
        tasksLength,
        handleCheck,
        findTask,
        toRestoreTasks
      }}
    >
      { children }
    </TaskContext.Provider>
  )
}

export function useTask() {
  return useContext(TaskContext);
}