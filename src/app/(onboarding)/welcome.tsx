import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { router } from 'expo-router'
import colors from '../../assets/colors'
import PrimaryButton from '../../components/PrimaryButton'
import { getAuth } from 'firebase/auth'
import { doc, collection, addDoc } from 'firebase/firestore';
import { db } from '../../../firebaseConfig'
import { useNavigation } from '@react-navigation/native'

const welcome = () => {
  const navigation:any = useNavigation();
  const speciesOptions = ['Kutya', 'Macska'];
  const [selectedSpecies, setSelectedSpecies] = useState('');

  const auth = getAuth();
  const user = auth.currentUser;

  const addPetToFirestore = async (userUID: any, species:any) => {
    const userPetsRef = collection(db, `users/${userUID}` ,'pets');
    const response = await addDoc(userPetsRef, {species, createdAt: new Date()});

    navigation.navigate('name', {petId: response.id, userId: userUID});
  }
  const handleSpeciesSelection = (species: string) => {
    setSelectedSpecies(species);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFF', height: "100%" }}>
      <View style={{flex: 1}}>
        <Text style={{
          color: '#1E1E2A',
          fontFamily: 'inter-bold',
          fontSize: 24,
          margin: 16
        }}>Üdvözöl a Pamsy!</Text>
        <Text style={{
          marginHorizontal: 16,
          fontFamily: 'inter-regular',
          color: colors.light.subtle
        }}>Ahhoz, hogy elkezdhesd használni az alkalmazást, hozz létre egy kisállat profilt!</Text>
        <Text style={{
          marginTop: 16,
          marginHorizontal: 16,
          fontFamily: 'inter-regular',
          color: colors.light.subtle
        }}>Kezdetben, válaszd ki milyen kisállatot szeretnél létrehozni!</Text>

        <View style={styles.container}>
          {speciesOptions.map((species) => (
            <TouchableOpacity
              key={species}
              style={[
                styles.speciesOption,
                selectedSpecies === species && styles.selectedOption,
              ]}
              onPress={() => handleSpeciesSelection(species)}
            >
              <Text style={[styles.speciesText, selectedSpecies === species && styles.selectedText]}>{species}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <View style={{ flex: 1, flexDirection:'column-reverse', marginHorizontal: 16, marginBottom: 8}}>
        <PrimaryButton title='Következő' disabled={selectedSpecies === ''} onPress={() => addPetToFirestore(user?.uid, selectedSpecies)} />
      </View>
    </SafeAreaView>
  )
}

export default welcome

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 16,
    marginTop: 8,
    gap: 8
  },
  speciesOption: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    backgroundColor: '#F0F0F0',
    borderRadius: 99,
    marginVertical: 4,
    alignItems: 'center'
  },
  selectedOption: {
    backgroundColor: colors.light.primary,
    color: '#fff'
  },
  speciesText: {
    color: colors.light.text,
    fontFamily: 'inter-regular',
    fontSize: 14
  },
  selectedText: {
    color: 'white',
    fontFamily: 'inter-regular',
    fontSize: 14
  },
});