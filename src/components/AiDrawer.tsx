import {
  useDisclosure,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  List,
  ListItem,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { VITE_GOOGLE_AI_API_KEY } from "../services/api-client";



const AiDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const genAI = new GoogleGenerativeAI(VITE_GOOGLE_AI_API_KEY);

  const [text, setText] = useState<string[]>([]);

  useEffect(() => {
    async function run() {
      // For text-only input, use the gemini-pro model
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      const prompt =
        "Show me trending 5 video games in 2023. just give the games name and not the description";
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const resarray = response.text().split("\n");
      setText(resarray);
    }
    run();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  //   console.log(text);

  return (
    <>
      <Button colorScheme="teal" onClick={onOpen}>
        Ask AI
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Gemini AI</DrawerHeader>

          <DrawerBody>
            <List>
              {text.map((t, index) => (
                <ListItem key={index}>{t}</ListItem>
              ))}
            </List>
          </DrawerBody>

          <DrawerFooter borderTopWidth="1px">
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Submit</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default AiDrawer;
