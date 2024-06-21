import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import ApprovedScreen from './ApprovedScreen';

function HomePageScreen(){

useEffect(()=>{
console.log("call1");
},[]);

return(
    <TouchableOpacity>
        <Text>hii </Text>
    </TouchableOpacity>
);
}
export default HomePageScreen;



