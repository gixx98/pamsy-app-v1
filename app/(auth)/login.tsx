import { View, Text, TextInput, KeyboardAvoidingView, ActivityIndicator, Button, Image, StyleSheet, Dimensions, Platform } from 'react-native'
import React, { useContext, useState } from 'react'
import style from '../../assets/style'
import colors from '../../assets/colors'
import PrimaryButton from '../../components/PrimaryButton';
import { Link } from 'expo-router';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { FIREBASE_AUTH } from '../../firebaseConfig';

export default function login(): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const signInFirebase = async () => {
    try {
      const response = await signInWithEmailAndPassword(FIREBASE_AUTH, email, password);
      console.log("Response:" + response);
    } catch (error: any) {
      console.log("Error:" + error);
      alert(error);
      throw error;
    }
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={style.container}>
      <Text style={{fontFamily: 'inter-bold', fontSize: 28, marginBottom: 8, color:colors.light.text}}>Bejelentkezés</Text>
      <Text style={{fontFamily: 'inter-regular', fontSize: 14, marginBottom: 16, color:colors.light.subtle}}>Jelentkezz be, hogy elérj minden egészségügyi információt a kisállatodról</Text>
      <Text style={style.body}>Email</Text>
      <TextInput
        value={email}
        style={style.input}
        placeholder='example@pamsy.com'
        autoCapitalize="none"
        onChangeText={(text) => setEmail(text)}
      />
      <Text style={style.body}>Jelszó</Text>
      <TextInput
        value={password}
        style={style.input}
        placeholder='*******'
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />

      <View style={{flexDirection: 'row', marginTop:4}}>
        <Text style={{marginRight: 4,fontFamily:'inter-regular', color:colors.light.text}}>Nincs még fiókod?</Text> 
        <Link href="/registration" style={{}}>
          <Text style={{color:'#0645AD', fontFamily:'inter-medium'}}>Regisztrálj egyet</Text>
        </Link>
      </View>

      {loading ? (
        <ActivityIndicator size={"small"} color={'#0000ff'} />
      ) : (
        <PrimaryButton title='Bejelentkezés' onPress={() => signInFirebase()} />
      )
      }
      
    </KeyboardAvoidingView>
  )
}