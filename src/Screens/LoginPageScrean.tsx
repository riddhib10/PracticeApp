import React, {useEffect, useState} from 'react';
import {TouchableOpacity, Text, View, StyleSheet,Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


function LoginPageScreen(){

    const [data, setData] = useState('');

    useEffect(()=>{
        console.log(data);
        handleLogin();

    },[data]);

    const handleLogin= async ()=>{
        setData("nashik");
        await AsyncStorage.setItem("NAME" ,data);
    }

return(
    <View style={styles.container}>
        <Button onPress={handleLogin} title="Login With Google" color="blue"/>
    </View>
);
}

const styles = StyleSheet.create({
container:{
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
}
});

export default LoginPageScreen;



