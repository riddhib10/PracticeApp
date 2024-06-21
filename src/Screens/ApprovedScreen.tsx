import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const dummyData = require('../Services/dummyData.json');

function RequestedScreen() {
  const [data, setData] = useState(null);
  const [selectedData, setSelectedData] = useState([]);
  const [activeTab, setActiveTab] = useState('Granted');

  useEffect(() => {
    const organizedD = organizeDataSimple(dummyData);
    setData(organizedD);
    setSelectedData(organizedD[activeTab]);
  }, []);

  const organizeDataSimple = (data) => {
    const organizedData = {};
    for (const item of data) {
      if (!organizedData[item.status]) {
        organizedData[item.status] = [];
      }
      organizedData[item.status].push(item);
    }
    return organizedData;
  };

  const selectedTab = (value) => {
    setActiveTab(value);
    setSelectedData(data[value] || []);

  };

  return (
    <View>
      <View style={styles.container}>
        {['Granted', 'Expired', 'Revoked'].map((Tab) => (
          <TouchableOpacity
             key={Tab}
            style={[styles.radioButton, activeTab === Tab && styles.activeTab]}
            onPress={() => selectedTab(Tab)}>
            <Text>{Tab}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <ScrollView>
        <View>
          {selectedData.map((item, index) => (
            <View key={index} style={styles.dataItem}>
              <Text>{item.hospitalName}</Text>
              <Text>{item.requestType}</Text>
              <Text>{item.dateOfRequest}</Text>
              <Text>{item.status}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 5,
    elevation: 5,
    margin: 10,
    flexDirection: 'row',
  },
  radioButton: {
    paddingHorizontal: 37,
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: '#ccc',
  },
  dataItem: {
    borderColor: '#ccc',
    borderRadius: 5,
    padding :5,
    borderWidth:2,
    margin: 1,
  },
});

export default RequestedScreen;
