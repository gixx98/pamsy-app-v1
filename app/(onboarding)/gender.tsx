import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import colors from '../../assets/colors'
import PrimaryButton from '../../components/PrimaryButton';
import {useRoute } from '@react-navigation/native';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import { router } from 'expo-router';

const gender = () => {
    const genderOptions = ['Hím', 'Nőstény'];
    const [selectedGender, setSelectedGender] = useState('');

    const route: any = useRoute();

    const petId = route.params?.petId;
    const userId = route.params?.userId;

    const handleGenderSelection = async (gender: any) => {
        const petDocRef = doc(db, `users/${userId}/pets/${petId}`);

        await updateDoc(petDocRef, { gender });

        router.replace('/(tabs)/home');
        const userDocRef = doc(db, `users/${userId}`);
		await updateDoc(userDocRef, {onboardingCompleted: true})
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#FFF', height: "100%" }}>
            <View style={{ flex: 1 }}>
                <Text style={{
                    color: '#1E1E2A',
                    fontFamily: 'inter-bold',
                    fontSize: 24,
                    margin: 16
                }}>Milyen nemű?</Text>

                <Text style={{
                    marginHorizontal: 16,
                    fontFamily: 'inter-regular',
                    color: colors.light.subtle
                }}>Válaszd ki a kutyád nemét!</Text>

                <View style={styles.container}>
                    {genderOptions.map((gender) => (
                        <TouchableOpacity
                            key={gender}
                            style={[
                                styles.speciesOption,
                                selectedGender === gender && styles.selectedOption,
                            ]}
                            onPress={() => setSelectedGender(gender)}
                        >
                            <Text style={[styles.speciesText, selectedGender === gender && styles.selectedText]}>{gender}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
            <View style={{ flex: 1, flexDirection: 'column-reverse', marginHorizontal: 16, marginBottom: 8 }}>
                <PrimaryButton title='Következő' disabled={selectedGender === ''} onPress={() => handleGenderSelection(selectedGender)} />
            </View>
        </SafeAreaView>
    )
}

export default gender

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