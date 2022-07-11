// Core
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Screens
import HomeScreen from './src/screens/home';
import OptionsScreen from './src/screens/options';

// Types
import RootParamsTabBottomTypes from './src/types/RootParamsTabBottomTypes';

// Icons
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

// Styles
import colors from './src/styles/colors';

// Contexts
import { TaskProvider } from './src/contexts/TaskContext';

const BottomTab = createBottomTabNavigator<RootParamsTabBottomTypes>();

export default function App() {

  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <TaskProvider>

          <BottomTab.Navigator
            initialRouteName="home"
            screenOptions={{
              headerShown: false,
              tabBarShowLabel: false,
              tabBarStyle: {
                position: "absolute",
                bottom: 20,
                left: 20,
                right: 20,
                borderRadius: 20,
                height: 64,
                backgroundColor: colors.percentage60,
                borderWidth: 2,
                borderTopWidth: 2,
                borderColor: `${colors.percentage30}50`,
                borderTopColor: `${colors.percentage30}50`
              }
            }}
          >
            <BottomTab.Screen 
              name="home" 
              component={HomeScreen}
              options={{
                tabBarIcon: ({ size, focused }) => (
                  <Entypo 
                    name="home" 
                    size={size} 
                    color={focused ? colors.percentage10 : colors.percentage30 } 
                  />
                )
              }}
            />
            <BottomTab.Screen 
              name="options" 
              component={OptionsScreen}
              options={{
                tabBarIcon: ({ size, focused }) => (
                  <Ionicons 
                    name="options" 
                    size={size} 
                    color={focused ? colors.percentage10 : colors.percentage30 } 
                  />
                ),
                headerShown: true,
                headerStyle: {
                  backgroundColor: colors.percentage60,
                  borderBottomColor: `${colors.percentage30}50`,
                  borderBottomWidth: 2,
                },
                headerTitleAlign: "center",
                headerTitle: "Configurações",
                headerTitleStyle: {
                  color: colors.percentage30,
                },
              }}
            />
          </BottomTab.Navigator>
        </TaskProvider>
      </NavigationContainer>
    </>
  );
}