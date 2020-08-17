import React, { useEffect, useState } from 'react';
import { Image } from 'react-native';

import api from '../../services/api';

import {
  Container,
  Header,
  HeaderTitle,
  UserButton,
  List,
  Card,
  CardTitle,
  CardInformations,
  CardTagline,
  CardResume,
  CardAuthor,
} from './styles';

import ProfileIcon from '../../assets/Icons/profile.png';

interface Audio {
  id: string;
  title: string;
  author: string;
  tagline: string;
  description: string;
  thumbImageUrl: string;
  audioUrl: string;
}

const Main: React.FC = () => {
  const [audios, setAudios] = useState<Audio[]>([]);

  useEffect(() => {
    api.get('96f0177a-118f-43b8-9c99-e84e3dc3fa81').then(response => {
      setAudios(response.data);
    });
  }, [audios]);

  return (
    <Container>
      <Header>
        <HeaderTitle>Para Você</HeaderTitle>
        <UserButton>
          <Image source={ProfileIcon} />
        </UserButton>
      </Header>
      <List>
        <Card>
          <Image
            source={{
              uri:
                'https://cdn.12min.com/books/books_background/163_chief_customer.thumb.jpg?1497471445',
            }}
            style={{ borderRadius: 12, width: 106, height: 106 }}
          />
          <CardInformations>
            <CardTitle>Title</CardTitle>
            <CardTagline>Como Fazer Amigos e Influenciar Pessoas</CardTagline>
            <CardAuthor>Autor/Cantor</CardAuthor>
            <CardResume>
              Um breve resumo sobre o que o podcast ou o enredo do audio book
              aqui.
            </CardResume>
          </CardInformations>
        </Card>
      </List>
    </Container>
  );
};

export default Main;
