import { View, Text, SafeAreaView, TextInput, Platform, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import { useGlobalSearchParams, useLocalSearchParams } from 'expo-router';
import { useNavigation, useRoute } from '@react-navigation/native';
import colors from '../../assets/colors';
import style from '../../assets/style';
import PrimaryButton from '../../components/PrimaryButton';
import { db } from '../../firebaseConfig';
import { doc, updateDoc } from 'firebase/firestore';
import { useHeaderHeight } from '@react-navigation/elements'



const name = () => {
  const height = useHeaderHeight();
  const navigation:any = useNavigation();

  const route: any = useRoute();
  const petId = route.params?.petId;
  const userId = route.params?.userId;
  
  const [name, setName] = useState('');

  const updatePetName = async (userId:string, petId:string, newName:string) => {
    const petDocRef = doc(db, `users/${userId}/pets/${petId}`); 
    console.log("path: " + `users/${userId}/pets/${petId}`)
    await updateDoc(petDocRef, { name: newName });

    navigation.navigate('breed', {petId: petId, userId: userId});

  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFF', height: "100%" }}>
      <View style={{ flex: 1, marginHorizontal: 16 }}>
        <Text style={{
          color: '#1E1E2A',
          fontFamily: 'inter-bold',
          fontSize: 24,
          marginVertical: 8
        }}>Mi a kedvenced neve?</Text>
        <Text style={{
          fontFamily: 'inter-regular',
          color: colors.light.subtle
        }}>Add meg kérlek a kisállatod nevét</Text>
        <TextInput
          value={name}
          style={[style.input]}
          placeholder='Kisállat neve...'
          autoCapitalize="none"
          onChangeText={(text: any) => setName(text)}
        />
      </View>
      <KeyboardAvoidingView keyboardVerticalOffset={height + 8} behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1, flexDirection: 'column-reverse', marginHorizontal: 16, marginBottom: 8}}>
        <PrimaryButton title='Következő' disabled={name === ''} onPress={() => updatePetName(userId,petId,name)} />
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default name