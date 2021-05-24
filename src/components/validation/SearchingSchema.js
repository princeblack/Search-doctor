// Third-party imports
import * as Yup from 'yup';

// Local imports

////////////////////////////////////////////////////////////////////////////////

const SeachingSchema = Yup.object().shape({
  city: Yup.string().min(2, 'Too Short to by a city name!').required('Required'),
  facility: Yup.string().min(2, 'Make an effort, it\'s too short for the name of an facility!'),
  area_of_expertise: Yup.string().min(2, 'Really you don\'t think is Too Short for a area of expertise!').required('Required'),
});

export default SeachingSchema;
