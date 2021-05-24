// Third-party imports
import React from 'react';
// Global imports

// Local imports
import {
  Container,
  ImgContainer,
  InfoContainer,
  Username,
  Image,
  Text,
} from './styles';
import imageSrc from './doc.svg';

////////////////////////////////////////////////////////////////////////////////

const Card = ({
  city,
  area_of_expertise,
  facility,
  first_name,
  last_name,
  email,
}) => {

  const name = 'Dr. ' + first_name + ' ' + last_name;
  return (
    <Container>
      <ImgContainer>
        <Username>{name}</Username>
        <Image src={imageSrc} />
      </ImgContainer>
      <InfoContainer>
        <Text>{city}</Text>
        <Text>{area_of_expertise}</Text>
        <Text>{facility}</Text>
        <Text>{email}</Text>
      </InfoContainer>
    </Container>
  );
};
export default Card;
