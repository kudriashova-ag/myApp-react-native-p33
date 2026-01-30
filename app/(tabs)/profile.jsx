import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useAuth } from '../../context/AuthContext';
import Login from '../(auth)/login';

const Profile = () => {
    const { user } = useAuth();
   
    if (!user) { 
        return <Login />
    }
    
    return (
      <View>
        <Text>Profile</Text>
        <Text>{user.email}</Text>
        <Text>{user.name}</Text>
      </View>
    );
}

const styles = StyleSheet.create({})

export default Profile;
