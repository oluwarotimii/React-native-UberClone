import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, SafeAreaView, View } from 'react-native'
// import { Icon } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { useDispatch } from 'react-redux'
import tw from 'twrnc'
import { setDestination } from '../redux/slices/navSlices'
import NavFavourites from './NavFavourites'
import Icon from 'react-native-vector-icons/AntDesign';
import Mat from 'react-native-vector-icons/MaterialCommunityIcons';

const NavigateCard = () => {

    // const GOOGLE_MAPS_APIKEY = ''

    const dispatch = useDispatch(setDestination)

    const navigation = useNavigation()

    return (
        <SafeAreaView style={{
            backgroundColor: 'white', 
            flex: 1,}}>
            <Text style={{
                color: '#123',
                fontWeight: '400',
                fontSize: 26,
                alignSelf: 'center',
                height: 50,
            }}>Good morning, User!</Text>
            <View style={{
        }}>
                <View>
                    <GooglePlacesAutocomplete
                        placeholder="Where to?"
                        nearbyPlacesAPI="GooglePlacesSearch"
                        debounce={400}
                        fetchDetails={true}
                        enablePoweredByContainer={false}
                        query={{
                            // key: GOOGLE_MAPS_APIKEY,
                            language: 'en',
                        }}
                        returnKeyType={'search'}
                        minLength={2}
                        onPress={(data, details = null) => {
                            dispatch(
                                setDestination({
                                    location: details.geometry.location,
                                    description: data.description
                                })
                            )
                            navigation.navigate('RideOptionsCard')

                        }}
                        styles={toInputBoxStyles}
                    />
                </View>

                <NavFavourites/>

            </View>

            <View style={tw`flex-row bg-white justify-evenly py-2 mt-auto`}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('RideOptionsCard')}
                    style={tw`flex flex-row justify-between bg-black w-24 px-4 py-3 rounded-full border-t border-gray-100`}
                >
                    <Icon
                        name="car"
                        type="font-awesome"
                        color="white"
                        size={16}
                    />
                    <Text style={tw`text-white text-center`}>Rides</Text>
                </TouchableOpacity>

                <TouchableOpacity style={tw`flex flex-row justify-between w-24 px-4 py-3 rounded-full`}
                // onPress={}
                >
                    <Mat
                        name="food"
                        color="black"
                        size={16}
                    />
                    <Text style={tw`text-center text-black`}>Eats</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default NavigateCard

const toInputBoxStyles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingTop: 20,
        flex: 0
    },
    textInput: {
        backgroundColor: '#dddddf',
        borderRadius: 0,
        fontSize: 18
    },
    textInputContainer: {
        paddingHorizontal: 20,
        paddingBottom: 0,
    }
})
