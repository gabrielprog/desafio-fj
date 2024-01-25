import React from 'react';
import { Button, useDisclosure } from '@chakra-ui/react';
import ModalUserRegister from '../ModalUserRegister';

function ButtonUserRegister() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Button colorScheme='green' onClick={onOpen}>Registrar cliente</Button>
            <ModalUserRegister isOpen={isOpen} onClose={onClose} />
        </>
    );
}

export default ButtonUserRegister;
