import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';


export default function AccountDown() {
  const [activeTab, setActiveTab] = useState('About'); // Default tab

  // Content for each tab
  const renderTabContent = () => {
    switch (activeTab) {
      case 'About':
        return <Text style={styles.tabContent}>This is the Profile Tab</Text>;
      case 'Saved':
        return <Text style={styles.tabContent}>This is the Settings Tab</Text>;
      case 'Questions':
        return <Text style={styles.tabContent}>This is the Activity Tab</Text>;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      {/* Tab Navigation */}
      <View style={styles.tabs}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'About' && styles.activeTab]}
          onPress={() => setActiveTab('About')}
        >
          <Text style={[styles.tabText, activeTab === 'About' && styles.activeTabText]}>
          About Me
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tab, activeTab === 'Saved' && styles.activeTab]}
          onPress={() => setActiveTab('Saved')}
        >
          <Text style={[styles.tabText, activeTab === 'Saved' && styles.activeTabText]}>
          Saved
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tab, activeTab === 'Questions' && styles.activeTab]}
          onPress={() => setActiveTab('Questions')}
        >
          <Text style={[styles.tabText, activeTab === 'Questions' && styles.activeTabText]}>
          Questions
          </Text>
        </TouchableOpacity>
      </View>

      {/* Tab Content */}
      <View style={styles.content}>{renderTabContent()}</View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ECEDEE'
  },
  tab: {
   paddingBottom: 8,
   paddingHorizontal: 16,
  },
  activeTab: {
    borderBottomWidth: 8,
    borderBottomColor: '#0891b2'
  },
  tabText: {
    fontSize: 14,
    color: '#ECEDEE',
  },
  activeTabText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabContent: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});
