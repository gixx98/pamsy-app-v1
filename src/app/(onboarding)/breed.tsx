import { View, Text, SafeAreaView, TextInput, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { db } from '../../../firebaseConfig';
import { useRoute, useNavigation } from '@react-navigation/native';
import { doc, updateDoc } from 'firebase/firestore';
import style from '../../assets/style';
import PrimaryButton from '../../components/PrimaryButton';
import colors from '../../assets/colors';


const breed = () => {
	const navigation: any = useNavigation();
	const route: any = useRoute();
	const petId = route.params?.petId;
	const userId = route.params?.userId;

	const [breeds, setBreeds] = useState(['Tacskó', 'Dobermann', 'Foxterrier', 'Francia bulldog',
		'Vizsla', 'Husky', 'Ír szetter']);

	const [selectedBreed, setSelectedBreed] = useState('');
	const [searchText, setSearchText] = useState('');

	const handleBreedSelect = async (breed: any) => {
		setSelectedBreed(breed);
		// Update Firestore with the selected breed
		const petDocRef = doc(db, `users/${userId}/pets/${petId}`);
		await updateDoc(petDocRef, { breed });

		navigation.navigate('birthday', { petId: petId, userId: userId })

	};

	const filteredBreeds = breeds.filter(breed =>
		breed.toLowerCase().includes(searchText.toLowerCase())
	);

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: '#FFF', height: "100%" }}>
			<View style={{ marginHorizontal: 16 }}>
				<Text style={{
					color: '#1E1E2A',
					fontFamily: 'inter-bold',
					fontSize: 24,
					marginTop: 16
				}}>Milyen fajta?</Text>
			</View>

			<View style={{ flex: 5, marginHorizontal: 16 }}>
				<TextInput
					style={style.input}
					placeholder='Próbáld ki: Tacskó'
					value={searchText}
					onChangeText={setSearchText}
				/>

				<FlatList
					data={filteredBreeds}
					renderItem={({ item }) => (
						<TouchableOpacity
							style={[
								styles.breedOption,
								selectedBreed === item && styles.selectedBreedOption,
							]}
							onPress={() => setSelectedBreed(item)}
						>
							<Text style={[
								styles.breedText,
								selectedBreed === item && styles.selectedBreedText
							]}>{item}</Text>
						</TouchableOpacity>
					)}
					keyExtractor={(item) => item}
				/>
			</View>

			<View style={{ flex: 1, flexDirection: 'column-reverse', marginHorizontal: 16, marginBottom: 8 }}>
				<PrimaryButton title='Következő' disabled={selectedBreed === ''} onPress={() => handleBreedSelect(selectedBreed)} />
			</View>
		</SafeAreaView>
	)
}

export default breed

const styles = StyleSheet.create({
	breedOption: {
		fontFamily: 'inter-medium',
		padding: 10,
		height: 44,
		backgroundColor: '#F4F4F4',
		borderRadius: 12,
		marginVertical: 4,
		alignItems: 'center',
		justifyContent: 'center'
	},

	selectedBreedOption: {
		backgroundColor: colors.light.primary
	},

	breedText: {
		fontFamily: 'inter-medium',
		color: colors.light.text
	},

	selectedBreedText: {
		color: '#FFF'
	}
})