import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePageScreen from '../Screens/HomePageScreen';
import LinkedFacilitiesScreen from '../Screens/LinkedFacilitiesScreen';
import ConsentsScreen from '../Screens/ConsentsScreen';

const Tab = createBottomTabNavigator();
function TabNavigation(){

return(
    <Tab.Navigator>
        <Tab.Screen name="HomePageScreen" component={HomePageScreen} />
        <Tab.Screen name="Linked Facilities" component={LinkedFacilitiesScreen} />
        <Tab.Screen name="Consents" component={ConsentsScreen} />
    </Tab.Navigator>
);

}

export default TabNavigation;