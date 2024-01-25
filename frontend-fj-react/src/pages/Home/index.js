import React, { useState, useEffect } from 'react';
import {
  Box,
  Grid,
  ButtonGroup,
  Tr,
  Td
} from '@chakra-ui/react';
import List from '../../components/List';
import ButtonUserRegister from '../../components/ButtonUserRegister';
import ButtonFilterTsp from '../../components/ButtonFilterTsp';
import api from '../../serivce/api';

function Home() {
    const [loadClients, setLoadClient] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await api.get("/api/users");
                setLoadClient(result.data);
            } catch (error) {
                console.error('Erro ao enviar dados:', error);
            }
        };

        fetchData();
    
        const intervalId = setInterval(fetchData, 5000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <Box textAlign="center" fontSize="xl">
            
            <ButtonGroup gap='2'>
                <ButtonUserRegister />
                <ButtonFilterTsp />
            </ButtonGroup>

            <Grid minH="100vh" p={3}>
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
            </Grid>
        </Box>
    );
}

export default Home;
