import {useState} from 'react'
import Head from 'next/head'
import Page from '../components/page'
import CustomInput from '../components/custom-input'
import CustomButton from '../components/custom-button'
import Comment from '../components/comment-password'
import Title from '../components/title'


export default function Signup() {
    const [Data, setData] = useState({
        email: '',
        password: ''
    })

    const [passwordToggle, setPasswordToggle] = useState({
        moreThan8: 'waiting',
        oneCharacter: 'waiting',
        passwordInput: 'waiting'
    })
    
    const formHandler = (event)=>{
        let {name, value} = event.target
        setData({...Data, [name]:value})
    }

    const handleBlur =(event)=>{
        let {value} = event.target
        setPasswordToggle({moreThan8:'loading',oneCharacter:'loading', passwordInput: 'loading'})
    }

    return (
        <Page title='Sign up - ecommerce' description='Sign up page built usign next js and django'>
            <Head>
                <title>Sign up</title>
            </Head>
            <Title type='primary' align='center'>Sign up</Title>
            <CustomInput 
                label='Email' 
                value={Data.email} 
                handleChange={formHandler} 
                name='email'/>

            <CustomInput 
                label='Password' 
                value={Data.password} 
                handleChange={formHandler} 
                handleBlur={handleBlur}
                name='password'
                needsLoading={passwordToggle.passwordInput}/>
            <Comment needsLoading={passwordToggle.moreThan8}>The password must have more than 8 characters</Comment>
            <Comment needsLoading={passwordToggle.oneCharacter}>The password must have more sthan 8 characters</Comment>
            <CustomButton>Next</CustomButton>
        </Page>
    )
}
