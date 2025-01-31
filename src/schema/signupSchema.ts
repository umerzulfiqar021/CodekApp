import * as yup from 'yup'
export const signUp = yup.object({
    email: yup.string().email('Enter email-address').required('cannot leave empty').matches(/^([\w-]{12,15})(@)([\w]{3,8})([\.\w]{2,4})([\.\w]{2,4})?$/,'valid eamil address'),
    password: yup.string().required('cannot leave empty').min(8,'should be of 8 characters').matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,'should be combination of upper case & lower case including special character with number')
})