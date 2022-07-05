import Input from "../Components/Input";
import { useDispatch } from "react-redux";
import { colors } from "../Styles/colors";
import loginValidationSchema from "../Utils/validateSchemas";
import { signUp } from "../Features/Auth";
import { login } from "../Features/Auth";
import { Button,StyleSheet,View,Text,TouchableOpacity } from "react-native";
import React, {useState} from "react";
import { Formik } from "formik";
import { createEntityAdapter, isRejectedWithValue } from "@reduxjs/toolkit";
const LoginScreen = () => {
    const [registerScreen, setRegisterScreen] = useState(false)
    const [passwordError,setPasswordError]=useState("")

    const dispatch = useDispatch()
    
    const handleLogin =()=> {

        const validateEmailandPassword = loginValidationSchema.validate({ email,password})

        
        }


    const handleSubmit = (values)=>{
        if(registerScreen){
            if(values.password===values.confirmPassword){
                dispatch(signUp({email:values.email,password:values.password}))
            }
            else{
                setPasswordError("Password must match")
            }
        }
        else{
            dispatch(login({email:values.email,password:values.password}))
            if(login()===isRejectedWithValue){
                setPasswordError("Wrong username or password")
            }
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>{registerScreen ? "SignUp" : "Login"}</Text>
                <Formik 
                    onSubmit={handleSubmit}
                    initialValues={{email: "", password: "", confirmPassword: ""}}
                    validationSchema = {loginValidationSchema}
                    validateOnChange = {false}
                    validateOnBlur = {false}
                >   
                    {({handleChange, errors, handleSubmit, values, handleBlur}) => (
                        <>
                            <Input  label="Email" password={false} onChange={handleChange('email')} value={values.email} error={errors.email} onBlur={handleBlur('email')}/>
                            <Input  label="Password" password={true} onChange={handleChange('password')} value={values.password}  onBlur={handleBlur('password')} error={passwordError}/>
                            {registerScreen && <Input label="Confirm password" password={true} onChange={handleChange('confirmPassword')} value={values.confirmPassword} onBlur={handleBlur('confirmPassword')} error={passwordError}/>}
                            {registerScreen ?
                             <TouchableOpacity style={styles.buttonAlign}  onPress={handleSubmit} ><Text  style={styles.button} >SignUp</Text></TouchableOpacity>
                                :
                                <TouchableOpacity style={styles.buttonAlign}  onPress={handleSubmit} ><Text  style={styles.button} >Login</Text></TouchableOpacity>
                            }
                            <View style={styles.textContainer}>
                                {registerScreen ?
                                    <TouchableOpacity onPress={() => setRegisterScreen(false)}>
                                        <Text>Already signup? <Text
                                            style={styles.link}
                                        >Login</Text></Text>
                                    </TouchableOpacity>
                                    :
                                    <TouchableOpacity onPress={() => setRegisterScreen(true)}
                                    >
                                        <Text>Don't you have an account? <Text
                                            style={styles.link}
                                        >Sign up here!</Text></Text>
                                    </TouchableOpacity>
                                }
                            </View>
                        </>
                    )}
                </Formik>

            </View>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.black,
    },
    content: {
        backgroundColor: colors.darkerWhite,
        padding: 20,
        justifyContent: 'center',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
    },
    title: {
        fontFamily:'Saira',
        fontSize: 24,
        textAlign: 'center',
        color:colors.dark,
        textTransform:'uppercase'
    },
    textContainer: {
        padding: 10,
        fontFamily: 'Saira',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    link: {
        color: colors.grey,
        textDecorationLine: "underline"
    },
    buttonAlign:{
        
        alignItems:"center",
        backgroundColor:colors.black, 
        borderRadius:5,
        height:30,
        justifyContent:'center',
        marginBottom:10,
        marginTop:10
        
        

    },
    button:{
      alignItems:"center",
      backgroundColor:colors.black, 
        color:colors.white,
        textTransform:'uppercase',
        textAlign:'center',
        

    },

})