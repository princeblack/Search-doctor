// Third-party imports
import React, { useState } from 'react';

// Global imports

// Local imports
import { Container, ListOfDoctors, Note } from './styles';
import Form from './form';
import Card from './card';
import backgroundImg from './helloDoc.png';

////////////////////////////////////////////////////////////////////////////////

const App = () => {
  // State
  const [data, setData] = useState([]);
  const [doctorsIsFound, setDoctorsIsFound] = useState(true);

  // props

  // capitalize the first letter of the city because Api only accept uppercase is  case sensitive
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  // function that making Api request and
  const apiRequest = async (city, facility, area_of_expertise) => {
    // getting the city name  with first letter capitalized
    const newCity = capitalizeFirstLetter(city);
    const location = await newCity.trim();

    // getting the api endpoint with facitity as optional
    const endPoint = `medical/get_doctors?city=${location}&area_of_expertise=${area_of_expertise}${
      facility ? `&facility=${facility}` : ''
    }`;

    // define url and making request
    const url = `https://recruit-staging.searchtalent.de/${endPoint}`;
    const { doctors } = await (await fetch(`${url}`)).json();

    // checking if reponse have data or not
    if (doctors.length <= 0) {
      setDoctorsIsFound(false);
    } else if (doctors.length > 0) {
      setDoctorsIsFound(true);
    }

    setData(doctors);
  };

  //getting form value in onSubmit
  const searchFormProps = {
    onSubmit: async ({ city, facility, area_of_expertise }) => {
      // passing data to the apiRequest function
      apiRequest(city, facility, area_of_expertise);
    },
  };

  const doctorsCards = data.map((doctor) => {
    return <Card key={doctor.id} {...doctor} />;
  });

  const background = {
    src: backgroundImg,
  };

  return (
    <Container {...background}>
      <Form {...searchFormProps} />
      <ListOfDoctors>
        {!doctorsIsFound && <Note>SORRY NO DOCTOR WAS FOUND.</Note>}
        {doctorsCards}
      </ListOfDoctors>
    </Container>
  );
};
export default App;
