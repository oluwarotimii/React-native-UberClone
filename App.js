import React from 'react';
import { Provider } from 'react-redux'
import { store } from './src/redux/store'
import HomeScreen from './src/screens/HomeScreen';
import MapScreen from './src/screens/MapScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler'
import { KeyboardAvoidingView, View, Platform, TouchableOpacity } from 'react-native'
// import tw from 'twrnc'
import Icon from 'react-native-vector-icons/AntDesign';
import RideOptionsCard from './src/components/RideOptionsCard';
import EatsScreen from './src/screens/EatsScreen';
import new

export default function App() {

  const Stack = createStackNavigator()

  return (
    // <View>
    //   <RideOptionsCard />
    // </View>
    // <Provider store={store}>
    //   <NavigationContainer>
    //     <SafeAreaProvider>
    //       <KeyboardAvoidingView
    //         style={{ flex: 1 }}
    //         behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    //         keyboardVerticalOffset={Platform.OS === 'ios' ? -64 : 0}
    //       >
    //         <Stack.Navigator>
    //           <Stack.Screen
    //             name="HomeScreen"
    //             component={HomeScreen}
    //             options={{
    //               headerStyle:{
    //                 elevation: 0
    //               },
    //               headerTitle: () => { },
    //               headerLeft: () => (
    //                 <TouchableOpacity>
    //                   {/* <Icon name="menu" size={30} style={{
    //                     marginLeft: 20,
    //                   }}/> */}
    //                   <Icon name="menu-fold" size={30} style={{
    //                     marginLeft: 20}} />
    //                 </TouchableOpacity>
    //               )
    //             }}
    //           />
    //           <Stack.Screen
    //             name="MapScreen"
    //             component={MapScreen}
    //             options={{
    //               headerShown: false,
    //             }}
    //           />
    //             <Stack.Screen
    //             name="EatsScreen"
    //             component={EatsScreen}
    //             options={{
    //               headerShown: false,
    //             }}
    //           />
    //         </Stack.Navigator>
    //       </KeyboardAvoidingView>
    //     </SafeAreaProvider>
    //   </NavigationContainer>
    // </Provider>
  );
}

