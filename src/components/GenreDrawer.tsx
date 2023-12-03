import {
  Show,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  useDisclosure,
} from "@chakra-ui/react";
import { ReactNode, useRef } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

interface Props {
  children: ReactNode;
}

const GenreDrawer = ({ children }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <Show below="lg">
        <Button bgColor='#B9B4C7' ref={btnRef} colorScheme="teal" onClick={onOpen}>
          <GiHamburgerMenu/>
        </Button>

        <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Genres</DrawerHeader>

            <DrawerBody>{children}</DrawerBody>

            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onClose}>
                Close
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Show>
    </>
  );
};

export default GenreDrawer;
