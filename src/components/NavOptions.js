import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Text, View, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native'
import { useSelector } from 'react-redux';
import { selectOrigin } from '../redux/slices/navSlices';
import Icon from 'react-native-vector-icons/AntDesign';

const data = [
    {
        id: '123',
        title: 'Get a ride',
        image: 'https://links.papareact.com/3pn',
        screen: 'MapScreen'
    },
    {
        id: '456',
        title: 'Order food',
        image: 'https://links.papareact.com/28w',
        screen: 'EatsScreen'
    },
]

const NavOptions = () => {

    const navigation = useNavigation()
    const origin = useSelector(selectOrigin)

    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            horizontal
            renderItem={({ item }) => (
                <TouchableOpacity
                    style={styles.card}
                    onPress={() => navigation.navigate(item.screen)}
                    
                >
                    <View style={{
                    backgroundColor: 'white',
                    borderWidth: 2,
                    borderColor:  '#d1d1'}}>

                        <Image
                            source={{uri: item.image}}
                            style={{
                                width: 120,
                                height: 120,
                                resizeMode: 'contain'
                            }}
                        />
                      
                        <Text
                            style={styles.cardText}
                        >
                            {item.title}
                        </Text>

                        <Icon

                            size={26}
                            name="arrowright"
                            color="black"
                        />
                    </View>
                </TouchableOpacity>
            )}
        />
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        marginHorizontal: 30,
        // justifyContents: 'space-between',
    },
    cardText: {
        color: 'black',
        fontWeight: 'bold',
    },
})

export default NavOptions



