import React from 'react';
import { Button, useDisclosure } from '@chakra-ui/react';
import ModalUserFilter from '../ModalUserFilter';

function ButtonFilterTsp() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button colorScheme='blue' onClick={onOpen}>Filtrar rota</Button>
      <ModalUserFilter isOpen={isOpen} onClose={onClose} />
    </>
  );
}

export default ButtonFilterTsp;
