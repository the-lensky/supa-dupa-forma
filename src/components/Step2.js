import React from 'react'
import MainContainer from './MainContainer'
import {Typography,Checkbox} from '@material-ui/core'
import Form from './Form'
import {Input} from './Input'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import {useHistory} from 'react-router-dom'
import PrimaryButton from './PrimaryButton'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import {parsePhoneNumberFromString} from 'libphonenumber-js'


const schema = yup.object().shape({
    email: yup
        .string()
        .email('Email should have correct format')
        .required('Email is a required field')

})

const normalizePhoneNumber = (value) => {
    const phoneNumber = parsePhoneNumberFromString(value)
    if(!phoneNumber){
        return value
    }
    return (
        phoneNumber.formatInternational()
    )

}

const Step2 = () => {
    const {register, handleSubmit, errors, watch} = useForm({
        mode: 'onBlur',
        resolver: yupResolver(schema)
    })

    const hasPhone = watch('hasPhone')

    const history = useHistory()

    const onSubmit = (data) => {
        history.push('/step3')
    }

    return (
        <MainContainer>
            <Typography component='h2' variant='h5'> 🦄 Step 2</Typography>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    ref={register}
                    id='email'
                    type='email'
                    label='Email'
                    name='email'
                    required
                    error={!!errors.email}
                    helperText={errors?.email?.message}
                />

                <FormControlLabel
                    control={<Checkbox name='hasPhone' inputRef={register} color='primary'/>}
                    label='Do you have a phone?'
                />

                {
                    hasPhone && (
                        <Input
                            ref={register}
                            id='phoneNumber'
                            type='tel'
                            label='Phone Number'
                            name='phoneNumber'
                            onChange={(event) => {
                                event.target.value = normalizePhoneNumber(event.target.value)
                            }}
                        />
                    )
                }
                <PrimaryButton> Next </PrimaryButton>
            </Form>
        </MainContainer>
    )
}

export default Step2