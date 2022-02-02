import React, { useState } from 'react';
import { Button, Image, StyleSheet, View, Text } from 'react-native';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import Screen from '../components/Screen';
import * as Yup from 'yup';
import { Formik } from 'formik';
import AppText from '../components/AppText';
import AppError from '../components/AppError'


let validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.number().required().label('Password')
});

const WardenLogin = ({ navigation }) => {

  // function authentication(values) {
  //   if (
  //     values.email === "ajitha71099@gmail.com" &&
  //     values.password === "1999"
  //   ) {
  //     alert(`${values.email}  Login Successfully`);
  //     console.log(values.email);
  //     console.log(values.password);
  //   } else {
  //     alert("Enter valid email or password");
  //   }
  // }
  //   const [email, setemail] = useState('');
  //   const [password, setpassword] = useState('');
  return (
    <Screen style={styles.container}>

      <Formik
        initialValues={{ email: '', password: '' }}
        // onSubmit={authentication(values)}
         onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
          <>

            <Text style={{ fontSize: 20, marginRight: 300 }}>MobileNo</Text>
            <AppTextInput
              icon='phone'
              placeholder='contact'
              onChangeText={handleChange('contact')}
              onBlur={() => setFieldTouched('contact')}
            // onChangeText={(text)=>setemail(text)}
            />

            {touched.email && <AppError errors={errors.email} />}
            <Text style={{ fontSize: 20, marginRight: 300 }}>Password</Text>
            <AppTextInput
              icon='lock'
              placeholder='Password'
              secureTextEntry={true}
              keyboard='numeric'
              onChangeText={handleChange('password')}
              onBlur={() => setFieldTouched('password')}
            // onChangeText={(text)=>setpassword(text)}
            />

            {touched.password && <AppError errors={errors.password} />}

           
            <AppButton title="LOGIN"

              myPress={handleSubmit}
               myPress={() => navigation.navigate("HomeScreen1")}
              onPress={()=>console.log(email,password)} 
            />
             {/* <AppButton title="Register"

myPress={handleSubmit}
myPress={() => navigation.navigate("WardenRegister")}
//  onPress={()=>console.log(email,password)} 
/> */}
          </>
        )}
      </Formik>
    </Screen>
  )
}

export default WardenLogin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //marginTop:0.1,
    padding: 25,
    backgroundColor: 'skyblue'
  },
  image: {
    height: 130,
    width: 130,
    justifyContent: 'center',
    marginBottom: 30
  },

})
