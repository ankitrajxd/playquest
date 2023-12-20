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
  Spinner,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { FaMagic } from "react-icons/fa";

const AiDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { VITE_GOOGLE_AI_API_KEY } = import.meta.env;

  const genAI = new GoogleGenerativeAI(VITE_GOOGLE_AI_API_KEY);

  const [text, setText] = useState<string[]>([]);
  const [isLoading, setIsloading] = useState<boolean>()

  useEffect(() => {
    async function run() {
      // For text-only input, use the gemini-pro model
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });



      const prompt =
        "Show me trending 5 video games in 2023. just give the games name and not the description";
        setIsloading(true)
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const resarray = response.text().split("\n");
      setText(resarray);
      setIsloading(false)
    }
    run();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  //   console.log(text);

  return (
    <>
      <Button colorScheme="teal" onClick={onOpen} leftIcon={<FaMagic />}>
        Ask AI
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Gemini AI</DrawerHeader>

          <DrawerBody>
            {isLoading && <Spinner/>}
            {isLoading === false && <List>
              {text.map((t, index) => (
                <ListItem key={index}>{t}</ListItem>
              ))}
            </List>}
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
