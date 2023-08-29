import { View, Text, SafeAreaView, TextInput, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { db } from '../../firebaseConfig';
import { useRoute, useNavigation } from '@react-navigation/native';
import { doc, updateDoc } from 'firebase/firestore';
import style from '../../assets/style';
import PrimaryButton from '../../components/PrimaryButton';

const breed = () => {
	const navigation:any = useNavigation();
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
		navigation.navigate('birthday')

	};

	const filteredBreeds = breeds.filter(breed =>
		breed.toLowerCase().includes(searchText.toLowerCase())
	);

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: '#FFF', height: "100%" }}>
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
							<Text>{item}</Text>
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
		borderWidth: 1,
		borderColor: '#ccc',
		borderRadius: 5,
		marginVertical: 5,
		alignItems: 'center',
	},

	selectedBreedOption: {
		backgroundColor: '#F0F0F0'
	}
})