import { Area, Title } from "./styles";

type OptionConfigProps = {
  children: string;
  elementRight?: JSX.Element;
}

export default function OptionConfig({ children, elementRight }: OptionConfigProps) {
  return (
    <Area>
      <Title>
        { children }
      </Title>
      { elementRight }
    </Area>
  )
}