import { View, Text, KeyboardAvoidingView, Platform, TextInput, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import style from '../../assets/style'
import colors from '../../assets/colors'
import PrimaryButton from '../../components/PrimaryButton'
import { Link } from 'expo-router'
import { addDoc, collection, doc, setDoc } from 'firebase/firestore'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { FIREBASE_AUTH, db } from '../../firebaseConfig'


const registration = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const docRef = collection(db, "users");

  const createUser = async () => {
    try {
      const userCredential = createUserWithEmailAndPassword(FIREBASE_AUTH, email, password)
      const user = (await userCredential).user;
      const userRef = doc(db, 'users', user.uid);
      const userData = {
        email: email
      };

      await setDoc(userRef,userData)

      console.log('User registered:' + userCredential)
    } catch (error: any) {
      alert(error);
      throw error;
    }
  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={style.container}>
      <Text style={{ fontFamily: 'inter-bold', fontSize: 28, marginBottom: 8, color: colors.light.text }}>Regisztráció</Text>
      <Text style={{ fontFamily: 'inter-regular', fontSize: 14, marginBottom: 16, color: colors.light.subtle }}>Csatlakozz, hogy azonnal elkezdhesd vezetni kisállatod egészségügyeit</Text>
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
      <Text style={style.body}>Jelszó mégegyszer</Text>
      <TextInput
        value={password}
        style={style.input}
        placeholder='*******'
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />

      <View style={{ flexDirection: 'row', marginTop: 4 }}>
        <Text style={{ marginRight: 4, fontFamily: 'inter-regular', color: colors.light.text }}>Már van fiókod?</Text>
        <Link href="/login" style={{}}>
          <Text style={{ color: '#0645AD', fontFamily: 'inter-medium' }}>Jelentkezz be!</Text>
        </Link>
      </View>

      {loading ? (
        <ActivityIndicator size={"small"} color={'#0000ff'} />
      ) : (
        <PrimaryButton title='Regisztráció' onPress={createUser} />
      )
      }

    </KeyboardAvoidingView>
  )
}

export default registration