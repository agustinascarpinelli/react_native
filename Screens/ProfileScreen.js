import React from 'react'
import { TouchableOpacity ,Text} from 'react-native'
import { useDispatch } from 'react-redux'
import { logout } from '../Features/Auth'

 const ProfileScreen =()=>{
const dispatch=useDispatch()
const handleLogOut =()=>{
    dispatch(logout())
}

    return (
        <TouchableOpacity onPress={handleLogOut}><Text>Logout</Text></TouchableOpacity>
    )
}

export default ProfileScreen