import React from 'react';
import {View , Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomePageScreen from '../Screens/HomePageScreen';
import TabNavigation from './TabNavigation';
import LoginPage from '../Screens/LoginPageScrean';
import SignOut from '../Screens/SignOut';

const Drawer = createDrawerNavigator();

function DrawerNavigation(){

return(
    <Drawer.Navigator >

    <Drawer.Screen name='Home' component={TabNavigation}/>
    <Drawer.Screen name='HomePageScreen' component={HomePageScreen} />
    <Drawer.Screen name='SignOut' component={SignOut} />
    <Drawer.Screen name='Homepage1' component={HomePageScreen} />
    <Drawer.Screen name='Homepage2' component={HomePageScreen} />

    </Drawer.Navigator>
);

}
export default DrawerNavigation;