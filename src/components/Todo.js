import { AddIcon } from "@chakra-ui/icons";
import { Box, Text, VStack, Button, Modal, useDisclosure, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalFooter, ModalBody, FormLabel, Input } from "@chakra-ui/react";

const Todo = () => {
   const { isOpen, onOpen, onClose } = useDisclosure()

   const ModalNewTask = () => {
      return (
         <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
               <ModalHeader>
                  <Text fontSize={"2xl"} fontWeight={"bold"}>Adicionar uma nova tarefa</Text>
               </ModalHeader>
               <ModalCloseButton />
               <ModalBody>
                  <FormLabel>Título da tarefa</FormLabel>
                  <Input placeholder="Título da tarefa" />
               </ModalBody>

               <ModalFooter>
                  <Button colorScheme='red' mr={3} onClick={onClose}>
                     Close
                  </Button>
                  <Button variant='ghost' colorScheme={"green"}>Adicionar</Button>
               </ModalFooter>
            </ModalContent>
         </Modal>
      )
   }

   return (
      <Box display={"flex"} alignItems={"center"} justifyContent={"center"} pt={10} flexDir="column">
         <Text fontSize={"2xl"} fontWeight={"bold"}>Todo list</Text>

         <ModalNewTask/>

         <VStack backgroundColor="whiteAlpha.100" width={550} py={5} borderRadius={5}>
            <Button onClick={onOpen} px={20} py={5} display="flex" alignItems={"center"} justifyContent="center" gap={5} border="1px solid rgba(255,255,255, .1)" borderRadius={5}>
               <AddIcon />
               <Text>Adicionar uma nova tarefa</Text>
            </Button>
         </VStack>
      </Box>
   )
}

export default Todo;