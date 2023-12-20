import { Text } from "@chakra-ui/react";
import useAI from "../hooks/useAI";

const Title = () => {
  const prompt = "Give me a random fact about video games in 30 words with emoji.";

  const { data } = useAI(prompt);

  return <Text display={{ base: "none", md: "block" }}>{data}</Text>;
};

export default Title;
