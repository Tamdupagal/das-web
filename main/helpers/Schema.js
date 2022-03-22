import * as yup from 'yup';


const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/


export const LOGIN_FORM_SCHEMA = (isAdmin) => {
    if (isAdmin) {
        return yup.object().shape({
            email: yup.string().email().required("Email is required!"),
            password: yup.string().min(4).max(14).required("Password is required!"),
        })
    }
   return yup.object().shape({
        username: yup.string().min(4).max(14).required("Username is required!"),
        email: yup.string().email().required("Email is required!"),
        qualification: yup.string().required("Qualification is required!"),
        number: yup.string().required("Number is required!").matches(phoneRegExp, 'Number is not valid'),
    })
}