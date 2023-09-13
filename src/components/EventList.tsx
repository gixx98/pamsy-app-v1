import { View, Text, ActivityIndicator, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { db } from '../../firebaseConfig';
import { QuerySnapshot, collection, getDocs } from "firebase/firestore";
import { getAuth } from 'firebase/auth';

const EventList = () => {
	const [loading, setLoading] = useState(true);
	const [records, setRecords] = useState([])

	const auth = getAuth();
	const user = auth.currentUser;

	// const fetchRecords = async () => {
	// 	await getDocs(collection(db, "pets"))
	// 		.then((querySnapshot) => {
	// 			const newData:any = querySnapshot.docs
	// 				.map((doc) => ({ ...doc.data(), id: doc.id }));

	// 			setRecords(newData);
	// 			setLoading(false)
	// 			console.log(records)
	// 		})
	// }

	// useEffect(() => {
	// 	fetchRecords();
	// }, [])

	const fetchRecords = async () => {
		if (user) {
			const userUid = auth.currentUser.uid;
			
			await getDocs(collection(db, `users/${userUid}/pets/7HvIm9kOHki5fv1xL7SO/records`))
				.then((querySnapshot) => {
					const newData: any = querySnapshot.docs
						.map((doc) => ({ ...doc.data(), id: doc.id }));

					setRecords(newData);
					setLoading(false);
					console.log(records);
				})
			// docsSnap.forEach((doc) => {
			// 	console.log("PET DATA: " + doc.data()['name']);
			// });
		}
	}

	useEffect(() => {
		fetchRecords();
	}, [])

	if (loading) {
		return <ActivityIndicator size={'small'} />
	}

	const Item = ({ title }: any) => (
		<View>
			<Text>{title} </Text>
		</View>
	);

	const renderItem = ({ item }: any) => (
		<Item title={item.name} />
	);

	return (
		<View>
			<FlatList
				data={records}
				renderItem={renderItem}
			></FlatList>
		</View>
	)
}

export default EventList