import { Screen, ListTasks, Input } from "../../components";

const data = [
  {
    id: "01",
    text: "Varrer a casa",
    checked: false
  },
  {
    id: "02",
    text: "Limpar",
    checked: false
  },
  {
    id: "03",
    text: "Fazer a tarefa",
    checked: false
  },
];

export default function HomeScreen() {
  return (
    <Screen>
      <Input/>
      <ListTasks
        data={data}
      />
    </Screen>
  )
}
