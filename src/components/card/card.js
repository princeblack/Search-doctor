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

/**
 * @function card
 * @category Components
 * @description Displays a doctor Card.
 * @param {string} city - getting the doctor city.
 * @param {string} area_of_expertise - getting the doctor area of expertise .
 * @param {string} facility - getting the doctor facility.
 * @param {string} first_name - getting the doctor first name.
 * @param {string} last_name - getting the doctor last name.
 * @param {string} email - getting the doctor email.
 */
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
