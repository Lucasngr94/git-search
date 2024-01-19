import React, { useState } from 'react';
import { userProps } from '../../types/types';
import Link from '../Header/Link';
import './Search-style.css';
import { Heading, IconButton } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { Divider } from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react';
import { Card, CardBody, Text, Image } from '@chakra-ui/react';

interface SearchProps {
  userApi: () => Promise<userProps | null>;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
}

const Search: React.FC<SearchProps> = ({ userApi, setUsername }) => {
  const [dataUser, setDataUser] = useState<userProps | null>(null);
  const toast = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleClick = async () => {
    if (!username) {
      toast({
        title: 'Campo de valor vazio',
        status: 'error',
        duration: 7000,
        isClosable: true,
      });
    } else {
      const userData = await userApi();

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
            colorScheme=""
            aria-label="Search database"
            onClick={handleClick}
            icon={<SearchIcon />}
          />
        </div>
        <Divider />
        <div className="result">
          <Card
            overflow="hidden"
            variant="filed"
          >
            <CardBody>
              {dataUser?.avatar_url && (
                <Image
                  src={dataUser.avatar_url}
                  maxW={{ base: '100%', sm: '200px' }}
                  objectFit="cover"
                  borderRadius="lg"
                  alt="avatar_img"
                />
              )}
              {dataUser?.followers && (
                <Text pt="2" fontSize="sm">
                  Seguidores: {dataUser.followers}
                </Text>
              )}
              {dataUser?.following && (
                <Text pt="2" fontSize="sm">
                  Seguindo: {dataUser.following}
                </Text>
              )}
              {dataUser?.html_url && (
                <Text pt="2" fontSize="sm">
                  <a href={dataUser.html_url}>Ver perfil</a>
                </Text>
              )}
            </CardBody>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Search;
