import React, {useState}  from 'react';
import { Text,StyleSheet} from 'react-native';
import Screen from '../components/Screen';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import * as Yup from 'yup'
import { Formik } from 'formik';
import AppError from '../components/AppError'

let validationSchema  = Yup.object().shape({
    name : Yup.string().required().label('Name').min(1),
     contact : Yup.number().required().label('Contact'),
     department : Yup.string().required().label('Department'),
     regNo : Yup.number().required().label('RegNo'),
    email : Yup.string().required().email().label('Email'),
    password : Yup.number().required().label('Password'),
    

  });

const Register = ({navigation}) => {
    // function authentication(values) {
    //     if (
    //       values.email === "abirami@gmail.com" &&
    //       values.password === "12345"
    //     ) {
    //       alert(`${values.email}  Login Successfully`);
    //       console.log(values.name);
    //       console.log(values.email);
    //       console.log(values.password);
    //       console.log(values.department)
    //     } else {
    //       alert("Enter valid email or password");
    //     }
    //   }
//    const [account, setaccount] = useState(name);
return (
  //         // <Screen style={{padding:15}}>
          <Screen style={styles.container}>
        <Formik 
  initialValues={{name:'',email:'', password:''}}
    //onSubmit={authentication(values)}
    onSubmit={(values) => console.log(values)}
    validationSchema={validationSchema}
  >
    {({handleChange,handleSubmit,errors, setFieldTouched, touched})=>(
      <>
      <Text style={{fontSize:40,paddingBottom:100}}>Register</Text>
                <AppTextInput
                      
                      placeholder='Name'
                      icon='account'
                      onChangeText={handleChange('name')}
                      onBlur={()=>setFieldTouched('name')}
                   // onChangeText={(text)=>setemail(text)}
                 />
                     
                       {touched.name && <AppError errors={errors.name} />}
                       <AppTextInput
                      
                      placeholder='department'
                      icon='account'
                      onChangeText={handleChange('department')}
                      onBlur={()=>setFieldTouched('department')}
                   // onChangeText={(text)=>setemail(text)}
                 />
                     
                       {touched.name && <AppError errors={errors.name} />}
                       <AppTextInput
                      
                      placeholder='regNo'
                      icon='account'
                      onChangeText={handleChange('regNo')}
                      onBlur={()=>setFieldTouched('regnNo')}
                   // onChangeText={(text)=>setemail(text)}
                 />
                     
                       {touched.number && <AppError errors={errors.number} />}



                       <AppTextInput
                      
                      placeholder='contact'
                      icon='phone'
                      onChangeText={handleChange('contact')}
                      onBlur={()=>setFieldTouched('contact')}
                   // onChangeText={(text)=>setemail(text)}
                 />
                     
                       {touched.name && <AppError errors={errors.name} />}


                       <AppTextInput
                      
                       placeholder='Email'
                       icon='lock'
                       onChangeText={handleChange('email')}
                       onBlur={()=>setFieldTouched('email')}
                    // onChangeText={(text)=>setemail(text)}
                  />
                      
                        {touched.email && <AppError errors={errors.email} />}
                
                <AppTextInput
                   
                     placeholder='Password'
                     icon='lock'
                     secureTextEntry={true}
                     keyboard='numeric'
                     onChangeText={handleChange('password')}
                     onBlur={()=>setFieldTouched('password')}
                  // onChangeText={(text)=>setpassword(text)}
                 />
                        
                        {touched.password && <AppError errors={errors.password} />}


                        

                <AppButton title="Register" 
                  myPress={handleSubmit}
               onPress={()=>console.log(email,password)} 
             myPress={() => navigation.navigate("Login")}

                 />
      </>
    )} 
   </Formik>
        </Screen>
    );
}

export default Register;
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    //marginTop:0.1,
    padding:25,
    backgroundColor:'skyblue'
  }})






// import React, {useState}  from 'react';
// import { Button, Image, StyleSheet, View , Text} from 'react-native';
// import Screen from '../components/Screen';
// import AppTextInput from '../components/AppTextInput';
// import AppButton from '../components/AppButton';
// import * as Yup from 'yup'
// import { Formik } from 'formik';
// import AppError from '../components/AppError'

// let validationSchema  = Yup.object().shape({
//   name : Yup.string().required().label('Name').min(1),
//   contactNo : Yup.string().required().label('contactNo'),
//   email : Yup.string().required().email().label('Email'),
//   password : Yup.number().required().label('Password'),
//   conformPassword : Yup.number().required().label('conformPassword')

// });

// const Register = () => {
//     // function authentication(values) {
//     //     if (
//     //       values.email === "ajitha71099@gmail.com" &&
//     //       values.password === "1999"
//     //     ) {
//     //       alert(`${values.email}  Login Successfully`);
//     //       console.log(values.name);
//     //       console.log(values.email);
//     //       console.log(values.password);
//     //     } else {
//     //       alert("Enter valid email or password");
//     //     }
//     //   }
// //    const [account, setaccount] = useState(name);
//     return (
//         // <Screen style={{padding:15}}>
//         <Screen style={styles.container}>
       
//         <Formik 
//   initialValues={{name:'',email:'', password:''}}
//     //onSubmit={authentication(values)}
//     onSubmit={(values) => authentication(values)}
//     validationSchema={validationSchema}
//   >
//     {({handleChange,handleSubmit,errors, setFieldTouched, touched})=>(
//       <>
//       <Text style={{fontSize:40,paddingBottom:100}}>Register</Text>
//                 <AppTextInput
//                       icon ='account' 
//                       placeholder='Name'
//                       onChangeText={handleChange('name')}
//                       onBlur={()=>setFieldTouched('name')}
//                    // onChangeText={(text)=>setemail(text)}
//                  />
                     
//                        {touched.name && <AppError errors={errors.name} />}

//                        <AppTextInput
//                       icon ='phone' 
//                       placeholder='contactNo'
//                       onChangeText={handleChange('contact no')}
//                       onBlur={()=>setFieldTouched('contact no')}
//                    // onChangeText={(text)=>setemail(text)}
//                  />
                     
//                        {touched.name && <AppError errors={errors.name} />}

//                        <AppTextInput
//                        icon ='email' 
//                        placeholder='Email'
//                        onChangeText={handleChange('email')}
//                        onBlur={()=>setFieldTouched('email')}
//                     // onChangeText={(text)=>setemail(text)}
//                   />
                      
//                         {touched.email && <AppError errors={errors.email} />}
                
//                 <AppTextInput
//                      icon ='lock' 
//                      placeholder='Password'
//                      secureTextEntry={true}
//                      keyboard='numeric'
//                      onChangeText={handleChange('password')}
//                      onBlur={()=>setFieldTouched('password')}
//                   // onChangeText={(text)=>setpassword(text)}
//                  />
                        
//                         {touched.password && <AppError errors={errors.password} />}


//                         <AppTextInput
//                      icon ='lock' 
//                      placeholder='ConformPassword'
//                      secureTextEntry={true}
//                      keyboard='numeric'
//                      onChangeText={handleChange('conformpassword')}
//                      onBlur={()=>setFieldTouched('conformpassword')}
//                   // onChangeText={(text)=>setpassword(text)}
//                  />
                        
//                         {/* {touched.conformPassword && <AppError errors={errors.conformPassword} />} */}

//                 <AppButton title="Register" 
//                   myPress={handleSubmit}
//                 onPress={()=>console.log(email,password)} 
//                  />
//       </>
//     )} 
//    </Formik>
//         </Screen>
//     );
// }

// export default Register;

// const styles = StyleSheet.create({
//   container:{
//     flex:1,
//     justifyContent:'center',
//     alignItems:'center',
//     //marginTop:0.1,
//     padding:25,
//     backgroundColor:'skyblue'
//   }})