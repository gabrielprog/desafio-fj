import React, { useRef , useState, useEffect } from 'react';
import { Tr, Td, Button, Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody, ModalFooter } from '@chakra-ui/react';
import List from '../List';
import api from '../../serivce/api';

function ModalUserFilter({ isOpen, onClose }) {
    const initialRef = useRef(null);
    const finalRef = useRef(null);
    const [loadClients, setLoadClient] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await api.get("/api/users/travel");
                setLoadClient(result.data);
            } catch (error) {
                console.error('Erro ao enviar dados:', error);
            }
        }
        fetchData();
    }, []);

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
                <ModalCloseButton />
                <ModalBody pb={6}>

                </ModalBody>
                    <List> 
                        {loadClients.map(item => (
                            <Tr>
                                <Td>{item.nome}</Td>
                                <Td>{item.email}</Td>
                                <Td>{item.telefone}</Td>
                                <Td isNumeric>{item.coordenada_x}</Td>
                                <Td isNumeric>{item.coordenada_y}</Td>
                            </Tr>
                        ))} 
                    </List>
                <ModalFooter>
                    <Button onClick={onClose}>Cancelar</Button>
                </ModalFooter>
            </ModalContent>
            </Modal>
        </>
        );
}

export default ModalUserFilter;
