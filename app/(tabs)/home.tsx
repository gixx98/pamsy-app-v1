import { View, Text, Button, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import ChevronLeftIcon from '../../assets/icons/chevronLeft'
import EventList from '../../components/EventList'
import { AuthContext } from '../../context/auth'
import { getAuth } from "firebase/auth";
import { collection, query, where, getDocs, getDoc, doc } from "firebase/firestore";
import { db } from '../../firebaseConfig'


const auth = getAuth();
const user = auth.currentUser;

const getRecords = async () => {
  if (user) {
    const userUid = auth.currentUser.uid;
    console.log(userUid)
    const docsSnap = await getDocs(collection(db, `users/${userUid}/pets/7HvIm9kOHki5fv1xL7SO/records`));
    docsSnap.forEach((doc) => {
      console.log("PET DATA: " + doc.data()['name']);
    });
  }
}

const home = () => {
  const { signOut } = useContext(AuthContext);

  return (
    <View style={{ flex: 1, flexDirection: 'column' }}>
      <TouchableOpacity onPress={signOut}>
        <Text style={{ fontFamily: "inter-medium" }}>Kijelentkezés</Text>
      </TouchableOpacity>
      <Text>{user?.uid}</Text>
      <EventList></EventList>
      <View style={{ alignSelf: 'flex-end', position: 'absolute', bottom: 32 }}>
        <TouchableOpacity style={{ width: 20, height: 20, borderRadius: 12 }}><ChevronLeftIcon /></TouchableOpacity>
      </View>
    </View>
  )
}

export default home