import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  List,
  ListItem,
  Spinner,
  useDisclosure,
} from "@chakra-ui/react";
import { FaMagic } from "react-icons/fa";
import useAI from "../hooks/useAI";
import { useState } from "react";

const AiDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [clicked, setisclicked] = useState(false);
  const { data, isLoading, isError } = useAI(clicked);

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
            {isError && <p>Oops! Something broked from our side.</p>}
            {isLoading && <Spinner />}
            {isLoading === false && (
              <List>
                {data?.map((t, index) => (
                  <ListItem key={index}>{t}</ListItem>
                ))}
              </List>
            )}
          </DrawerBody>

          <DrawerFooter borderTopWidth="1px">
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={() => setisclicked(!clicked)} colorScheme="blue">
              Generate
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default AiDrawer;
