import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Text,
  Avatar,
  FormLabel,
  Input,
} from "@chakra-ui/react";

import { FaUserAlt } from "react-icons/fa";
import { auth } from "../firebase/firebase";

export function ModalAccount({ dataUser }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const user = dataUser;

  return (
    <>
      <Button
        leftIcon={<FaUserAlt />}
        size={"sm"}
        background={"brand.primary"}
        color={"brand.background"}
        _hover={{ background: "brand.secondary" }}
        onClick={onOpen}
      >
        {user.displayName.split(" ")[0]}
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          backgroundColor={"brand.background"}
          boxShadow={
            "-1px 4px 22px rgba( 90, 192, 147, 0.20), inset 1px 1px 50px 9px rgba(0, 0, 0, 0.25);"
          }
        >
          <ModalHeader display={"flex"} alignItems="center">
            <Avatar src={user.photoURL} />
            <Text ml={2} fontSize="2xl">
              Olá {user.displayName.split(" ")[0]}
            </Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={5}>
            <Text fontSize={"sm"} as="b">
              Nome:
            </Text>
            <Input disabled value={user.displayName} />
            <Text fontSize={"sm"} as="b">
              Email:
            </Text>
            <Input disabled value={user.email} />
          </ModalBody>
          <ModalFooter>
            <Button
              size={"sm"}
              background={"brand.primary"}
              color={"brand.background"}
              _hover={{ background: "brand.secondary" }}
              onClick={() => auth.signOut()}
            >
              Logout
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
