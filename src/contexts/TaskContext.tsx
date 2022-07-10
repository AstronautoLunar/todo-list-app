// Core
import { createContext, useContext, useState } from "react";
import { Alert } from "react-native";

// Types
import TaskTypes from "../types/TaskTypes";

type TaskContextTypes = {
  tasks: TaskTypes[];
  addTask: (task: TaskTypes) => void;
  deleteTask: (id: string) => void;
  tasksLength: () => number;
  handleCheck: (id: string, check: boolean) => void;
  findTask: (id: string) => TaskTypes | undefined;
}

const TaskContext = createContext({} as TaskContextTypes);

type TaskProviderProps = {
  children: JSX.Element | JSX.Element[];
}

export function TaskProvider({ children }: TaskProviderProps) {
  const [ tasks, setTasks ] = useState([] as TaskTypes[]);
  
  function addTask(task: TaskTypes): void {
    try {
      setTasks([ ...tasks, task ]);
    } catch (error) {
      Alert.alert("Error ao adicionar uma nova tarefa");
    }
  }

  function deleteTask(id: string): void {
    try {
      setTasks(tasks.filter(item => item.id !== id));
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

  function handleCheck(id: string, check: boolean): void {
    try {
      const taskFoundIndex = tasks.findIndex(item => item.id === id);
      const taskFoundObject = findTask(id);
  
      if (!!taskFoundObject) {
        tasks[taskFoundIndex] = {
          ...taskFoundObject,
          checked: check,
        }
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

  function backupTasks() {
    
  }

  return (
    <TaskContext.Provider 
      value={{
        tasks,
        addTask,
        deleteTask,
        tasksLength,
        handleCheck,
        findTask
      }}
    >
      { children }
    </TaskContext.Provider>
  )
}

export function useTask() {
  return useContext(TaskContext);
}