import { View, Text, Button, SafeAreaView, KeyboardAvoidingView, Platform } from 'react-native'
import React, { useState } from 'react'
import DatePicker from 'react-native-date-picker'
import colors from '../../assets/colors'
import PrimaryButton from '../../components/PrimaryButton'
import { useHeaderHeight } from '@react-navigation/elements'
import { db } from '../../firebaseConfig'
import { Timestamp, doc, serverTimestamp, updateDoc } from 'firebase/firestore'
import { useNavigation, useRoute } from '@react-navigation/native'


const birthday = () => {
  const height = useHeaderHeight();


  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const navigation: any = useNavigation();
  const route: any = useRoute();

  const petId = route.params?.petId;
  const userId = route.params?.userId;

  const handleDateChange = async (selectedDate: any) => {
    const birthdayTimestamp = Timestamp.fromDate(selectedDate);

    const petDocRef = doc(db, `users/${userId}/pets/${petId}`);

    await updateDoc(petDocRef, { birthday: birthdayTimestamp });
    navigation.navigate('gender', { petId: petId, userId: userId })

  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFF', height: "100%" }}>
      <View style={{ flex: 1, marginHorizontal: 16 }}>
        <Text style={{
          color: colors.light.text,
          fontFamily: 'inter-bold',
          fontSize: 24,
          marginVertical: 8
        }}>Mikor született?</Text>
        <Text style={{
          color: colors.light.subtle,
          fontFamily: 'inter-regular',
          fontSize: 16,
          marginVertical: 8
        }}>Válaszd ki mikor született, hogy személyre szabott ajánlásokat tudjunk küldeni a korának megfelelően.</Text>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <DatePicker date={date} onDateChange={setDate} mode='date' />
        </View>
      </View>

      <KeyboardAvoidingView keyboardVerticalOffset={height + 8} behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1, flexDirection: 'column-reverse', marginHorizontal: 16, marginBottom: 8 }}>
        <PrimaryButton title='Következő' onPress={() => handleDateChange(date)} />
      </KeyboardAvoidingView>

    </SafeAreaView>
  )
}

export default birthday