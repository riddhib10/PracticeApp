import React, {useState} from 'react';
import {View,Text, TouchableOpacity , StyleSheet} from 'react-native';
import ApprovedScreen from './ApprovedScreen';
import RequestedScreen from './RequestedScreen';

function ConsentsScreen(){
const[selectedVal, setSelectedVal] = useState('Requested');

const Selection=(value)=>{
setSelectedVal(value);
};

return(
    <View style= {styles.layout}>
    <View style={styles.container}>
        <TouchableOpacity style={[styles.radioButton, selectedVal === 'Requested' && styles.selectedButton]}
        onPress = {()=> Selection('Requested') }>
            <Text> Requested </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.radioButton, selectedVal === 'Approved' && styles.selectedButton ]}
        onPress = {()=> Selection('Approved') }>
           <Text> Approved </Text>
        </TouchableOpacity>
    </View>
    <View>
        {(selectedVal == "Requested") ?
        (<View>
            <RequestedScreen/>
        </View>) :
        (<View>
            <ApprovedScreen/>
        </View>)}
    </View>
    </View>
);

}

const styles = StyleSheet.create({
 container: {
    padding: 15,
    borderRadius: 5,
    elevation: 5,
//     margin: 10,
    flexDirection: 'row',

  },
radioButton: {
    paddingHorizontal: 57,
    paddingVertical: 10,
    borderRadius: 10,
    borderWidth: 2,
    alignItems: 'center',

  },
selectedButton: {
    backgroundColor: '#007bff',
},
layout:{
    paddingBottom:50
}

});

export default ConsentsScreen;
