import { View, Text, Button, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import EventList from '../../components/EventList'
import { AuthContext } from '../../context/auth'
import { getAuth, User } from "firebase/auth";
import { collection, query, where, getDocs, getDoc, doc } from "firebase/firestore";
import { db } from '../../../firebaseConfig'
import PlusIcon from '../../assets/icons/plus'
import colors from '../../assets/colors'
import ModalComponent from '../../components/Modal'



const home = () => {
  const { signOut } = useContext(AuthContext);

  const [user, setUser] = useState<User | null>(null);
  const [pet, setPet] = useState<string | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedElement, setSelectedElement] = useState(null);

  useEffect(() => {
    getPetDoc();
  }, []);

  // const getUser = async () => {
  //   try {
  //     const auth = getAuth();
  //     return auth.currentUser ? auth.currentUser.uid : null
  //     setUser(auth.currentUser);
      
  //     if (user) {
  //       // User is authenticated, and you can access user properties.
  //       console.log('User is logged in:', user.uid);
  //     } else {
  //       // User is not authenticated.
  //       console.log('User is not logged in.');
  //     }
  //   } catch (error) {
  //     console.error('Error checking user authentication:', error);
  //   }
  // };

  const getPetDoc = async () => {
      // if(user){
        console.log(user?.uid)
        
        const querySnapshot = await getDocs(collection(db, `users/${user?.uid}/pets`));
        querySnapshot.forEach((doc) => {
          console.log("Pet id: " + doc.id + " " + doc.data())
        })
      // }
  };
  
  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleElementClick = (element:any) => {
    setSelectedElement(element);
    closeModal();
    // Add navigation logic here based on the selected element
  };

  

  return (
    <View style={{ flex: 1, flexDirection: 'column' }}>
      <TouchableOpacity onPress={signOut}>
        <Text style={{ fontFamily: "inter-medium" }}>Kijelentkezés</Text>
      </TouchableOpacity>
      <Text>{user?.uid}</Text>
      <EventList></EventList>
      <View style={{ alignSelf: 'flex-end', position: 'absolute', bottom: 20, right: 20, backgroundColor: colors.light.primary, borderRadius: 99 }}>
        <TouchableOpacity onPress={() => openModal()} style={{padding: 16 }}><PlusIcon /></TouchableOpacity>
      </View>
      <ModalComponent
        isVisible={modalVisible}
        onClose={closeModal}
        onElementClick={handleElementClick}
      />
    </View>
  )
}

export default home

