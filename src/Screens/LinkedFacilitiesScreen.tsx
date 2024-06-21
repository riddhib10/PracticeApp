import React, { useEffect, useState } from 'react';
import { Text, View , FlatList, StyleSheet} from 'react-native';
import axios from 'axios';

function LinkedFacilitiesScreen() {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        fetchData().then(data => {
                console.log('Data fetched:', data);
                setEmployees(data);
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
            });
    }, []);

    async function fetchData() {
        try {
            const response = await axios.get('https://dummy.restapiexample.com/api/v1/employees');
            console.log(response.data.data);
            return response.data.data;
        } catch (error) {
            console.error('Error fetching data: ', error);
            throw error;
        }
    }

const renderItem = ({ item }) => (
    <View style = {styles.container}>
      <Text >Name: {item.employee_name}</Text>
      <Text >Age: {item.employee_age}</Text>
      <Text >Salary: ${item.employee_salary}</Text>
    </View>
  );

  return (
     <View>
        <FlatList
          data={employees}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}/>
     </View>
  );
}

const styles = StyleSheet.create({

container:{
    backgroundColor: 'skyblue',
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 16,
    borderRadius: 10,
    }
});

export default LinkedFacilitiesScreen;
