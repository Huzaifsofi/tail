import Ionic from '@expo/vector-icons/Ionicons'
import { Tabs } from 'expo-router'
import '../../global.css'

export default function TabLayout() {
    return (
        <Tabs  screenOptions={{ tabBarActiveTintColor: 'white', tabBarStyle: { backgroundColor: '#212121'} }} >
            <Tabs.Screen
            name='index'
            options={{
                title: 'Home',
                tabBarIcon: ({ color }) => <Ionic size={25} name='home' color={color}  />,
                headerShown: false
                
            }}
            />
            <Tabs.Screen
            name='search'
            options={{
                title: 'Search',
                tabBarIcon: ({ color }) => <Ionic size={25} name='search' color={color}  />,
                headerShown: false
            }}
            />
            
            <Tabs.Screen
            name='jobs'
            options={{
                title: 'Jobs',
                tabBarIcon: ({ color }) => <Ionic size={25} name='briefcase' color={color}  />,
                headerShown: false
            }}
            />

            <Tabs.Screen
            name='account'
            options={{
                title: 'Account',
                tabBarIcon: ({ color }) => <Ionic size={25} name='person-circle' color={color}  />,
                headerShown: false
            }}
            />
            
        </Tabs>

    )
}
