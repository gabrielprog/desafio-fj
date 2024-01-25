import * as yup from 'yup';

const schemaUser = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.string().required(),
    cord_x: yup.number().required(),
    cord_y: yup.number().required(),
});

export default schemaUser;