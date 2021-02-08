import React from 'react'
import MainContainer from './MainContainer'
import {Typography} from '@material-ui/core'
import Form from './Form'
import FileInput from './FileInput'
import {useForm} from 'react-hook-form'
import PrimaryButton from './PrimaryButton'
import {useHistory} from 'react-router-dom'
import {useData} from '../DataContex'

const Step3 = () => {
    const { data, setValues} = useData()
    const { control, handleSubmit} = useForm({
        defaultValues: {
            files: data.files
        }
    })

    const history = useHistory()

    const onSubmit = (data) => {
        history.push('/result')
        setValues(data)
    }

    return (
        <MainContainer>
            <Typography component='h2' variant='h5'> 🦄 Step 3</Typography>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <FileInput name='files' control={control} />
                <PrimaryButton> Next </PrimaryButton>
            </Form>

        </MainContainer>
    )
}

export default Step3