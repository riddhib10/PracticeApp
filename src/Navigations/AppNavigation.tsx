import React, {useEffect, useState} from 'react';
import {View, Text} from  'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import LoginPageScrean from '../Screens/LoginPageScrean';
import DrawerNavigation from './DrawerNavigation';
import AsyncStorage from '@react-native-async-storage/async-storage'

const Stack = createStackNavigator();

function AppNavigation(){
    const[isLogin, setIsLogin] = useState(false);

useEffect(()=>{
    loadUser();
},[]);

const loadUser= async ()=>{
    const name = await AsyncStorage.getItem('NAME');
    if(name){
        setIsLogin(true);
    }
}
return (
<NavigationContainer>
       <Stack.Navigator initialRouteName ={isLogin ? "loginPage" : "HomePageScreen"}>
       <Stack.Screen name="loginPage" component={LoginPageScrean} options={{headerShown : false}}/>
       <Stack.Screen name="HomePageScreen" component={DrawerNavigation} options={{headerShown : false}}/>
       </Stack.Navigator>
</NavigationContainer>
);
}

export default AppNavigation;