import React, { useRef , useState } from 'react';
import { useToast, FormControl, Input, FormLabel, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from '@chakra-ui/react';
import api from '../../serivce/api';


function ModalUserRegister({ isOpen, onClose }) {
    const initialRef = useRef(null);
    const finalRef = useRef(null);
    const toastIdRef = useRef()
    const toast = useToast();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [cordX, setCordX] = useState(0.0);
    const [cordY, setCordY] = useState(0.0);

    const handleRegisterUser = async () => {
        if(name === "" || email === "" || phone === "" || cordX === "" || cordY === "" ) return;

        const postData = {
            name,
            email,
            phone,
            cord_x: cordX,
            cord_y: cordY
        }

        const response = await api.post("/api/user", postData);
    
        if(response.status == 200) {
            toastIdRef.current = toast({ description: 'some text' });
        }
    }

    return (
        <>
            <Modal
            initialFocusRef={initialRef}
            finalFocusRef={finalRef}
            isOpen={isOpen}
            onClose={onClose}
            >
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Crie seu cliente</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                <FormControl>
                    <FormLabel>Nome: </FormLabel>
                    <Input placeholder='Nome completo' onChange={e => setName(e.target.value)} />
                </FormControl>

                <FormControl mt={4}>
                    <FormLabel>Email: </FormLabel>
                    <Input placeholder='email@exemplo.com' onChange={e => setEmail(e.target.value)} />
                </FormControl>

                <FormControl mt={4}>
                    <FormLabel>Telefone: </FormLabel>
                    <Input type='number' placeholder='12345678900' onChange={e => setPhone(e.target.value)} />
                </FormControl>

                <FormControl mt={4}>
                    <FormLabel>Cordenada x: </FormLabel>
                    <Input type='number' placeholder='0.000000' onChange={e => setCordX(e.target.value)} />
                </FormControl>

                <FormControl mt={4}>
                    <FormLabel>Cordenada y: </FormLabel>
                    <Input type='number' placeholder='0.000000' onChange={e => setCordY(e.target.value)} />
                </FormControl>
                </ModalBody>

                <ModalFooter>
                <Button colorScheme='blue' mr={3} onClick={() => {
                    handleRegisterUser()
                    onClose()
                    toast({
                        title: 'Cliente criado.',
                        description: "Cliente criado com sucesso!",
                        status: 'success',
                        duration: 5000,
                        isClosable: true,
                    })
                }}>
                    Criar cliente
                </Button>
                <Button onClick={onClose}>Cancelar</Button>
                </ModalFooter>
            </ModalContent>
            </Modal>
        </>
        );
}

export default ModalUserRegister;
