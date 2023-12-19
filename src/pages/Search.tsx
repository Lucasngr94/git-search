import { useState } from "react";
import { userProps } from '../types/user';
import Link from "./Link";
import './Search-style.css'
import { Heading, IconButton } from '@chakra-ui/react'
import {SearchIcon} from '@chakra-ui/icons'
import { Divider } from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, Text, Image } from '@chakra-ui/react'

const Search = () => {
    const [data, setData] = useState<userProps | null>(null);
    const [username, setUsername] = useState<string>('');
    const [dataUser, setDataUser] = useState<userProps | null>(null);
    const toast = useToast()

    const getUser = async () => {
        try {
          const response = await fetch(`https://api.github.com/users/${username}`);
          
          if (!response.ok) {
            return null; 
          }
          
          const data = await response.json();
          setData(data);
      
          const { avatar_url, followers, following, html_url } = data;
          const dataUser = {
            avatar_url,
            followers,
            following,
            html_url
          };
          setDataUser(dataUser);
          
          return dataUser; 
      
        } catch (err) {
          console.error(err);
          return null; 
        }
      };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    }

    const handleClick = async () => {
        if (!username) {
          toast({
            title: 'Campo de valor vazio',
            status: 'error',
            duration: 7000,
            isClosable: true,
          });
        } else {
          const userData = await getUser();
        
          if (userData) {
            toast({
              title: 'Usuário encontrado',
              status: 'success',
              duration: 7000,
              isClosable: true,
            });
          } else {
            toast({
              title: 'Usuário não encontrado',
              status: 'error',
              duration: 7000,
              isClosable: true,
            });
          }
        }
      };

    return (
        <>
            <Link />
            <div>
                <div className="input">
                    <h1>Search</h1>
                    <input 
                        type="text"
                        placeholder="Informe o nome do Usuario"
                        value={username}
                        onChange={handleChange}
                    />
                    <IconButton
                        colorScheme=''
                        aria-label='Search database'
                        onClick={handleClick}
                        icon={<SearchIcon />}
                    />
                </div>
                <Divider />
                <div className="result">
                { Response ? (
                <Card   
                    direction={{ base: 'column', sm: 'row' }}
                    overflow='hidden'
                    variant='filed'>
                <CardBody>
                    {dataUser?.avatar_url && <Image src={dataUser.avatar_url} maxW={{ base: '100%', sm: '200px' }} objectFit='cover' borderRadius='lg' alt='avatar_img' />}
                    {dataUser?.followers && <Text pt='2' fontSize='sm'>Seguidores: {dataUser.followers}</Text>}
                    {dataUser?.following && <Text pt='2' fontSize='sm'>Seguindo: {dataUser.following}</Text>}
                    {dataUser?.html_url && <Text pt='2' fontSize='sm'><a href={dataUser.html_url}>Ver perfil</a></Text>}
                </CardBody>
                </Card>) : null}
                </div>
            </div>
        </>
    )
}

export default Search;


