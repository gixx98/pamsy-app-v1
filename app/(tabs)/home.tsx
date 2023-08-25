import { View, Text, Button, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { signOut} from 'firebase/auth'
import { FIREBASE_AUTH } from '../../firebaseConfig'
import ChevronLeftIcon from '../../assets/icons/chevronLeft'
import EventList from '../../components/EventList'
import { AuthContext } from '../../context/auth'

const home = () => {
  const { signOut } = useContext(AuthContext);

  return (
    <View style={{flex:1, flexDirection: 'column'}}>
      <TouchableOpacity onPress={signOut}>
        <Text style={{fontFamily: "inter-medium"}}>Kijelentkezés</Text>
      </TouchableOpacity>
      <EventList></EventList>
      <View style={{alignSelf:'flex-end', position: 'absolute', bottom: 32}}>
        <TouchableOpacity style={{width: 20, height: 20, borderRadius: 12}}><ChevronLeftIcon /></TouchableOpacity>
      </View>
    </View>
  )
}

export default home