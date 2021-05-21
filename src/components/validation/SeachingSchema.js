// Third-party imports
import * as Yup from 'yup';

// Local imports

////////////////////////////////////////////////////////////////////////////////

const SeachingSchema = Yup.object().shape({
    city: Yup.string()
    .min(2, 'Too Short!')
    .required('Required'),
    facility: Yup.string()
    .min(2, 'Too Short!')
    .required('Required'),
    area_of_expertise: Yup.string()
    .min(2, 'Too Short!')
    .required('Required'),
});

export default SeachingSchema;