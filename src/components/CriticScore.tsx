import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  const colorScheme = score > 70 ? "green" : score > 50 ? "yellow" : "";
  return (
    <Badge
      fontSize="14px"
      paddingX={2}
      borderRadius="4px"
      colorScheme={colorScheme}
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
