import { View, Text, ActivityIndicator, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { db } from '../firebaseConfig';
import { collection, getDocs } from "firebase/firestore";

const EventList = () => {
	const [loading, setLoading] = useState(true);
	const [records, setRecords] = useState([])

	const fetchRecords = async () => {
		await getDocs(collection(db, "pets"))
			.then((querySnapshot) => {
				const newData:any = querySnapshot.docs
					.map((doc) => ({ ...doc.data(), id: doc.id }));

				setRecords(newData);
				setLoading(false)
				console.log(records)
			})
	}

	useEffect(() => {
		fetchRecords();
	}, [])


	if (loading) {
		return <ActivityIndicator size={'small'} />
	}

	const Item = ({ title, description }:any) => (
		<View>
			<Text>{title} </Text>
			<Text>{description} </Text>
		</View>
	);
	
	const renderItem = ({ item }:any) => (
		<Item title={item.name} description={item.age} />
	);

	return (
		<View>
			<FlatList
			data={records}
			renderItem={renderItem }
			></FlatList>
		</View>
	)
}

export default EventList