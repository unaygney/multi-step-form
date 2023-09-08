import * as Yup from 'yup';

export const StepperValidation = Yup.object().shape({

    //STEP 1
    name:Yup.string().when('step',{
        is:1,
        then:schema => schema.required('This field is required')
    }),
    "email-address" : Yup.string().when('step', {
        is:1,
        then:schema =>schema.required('This field is required').email('Invalid email')
    }),

    "phone-number" : Yup.number().typeError('Please enter phone number').when('step', {
        is:1,
        then:schema =>schema.required('This field is required')
    })

}) 