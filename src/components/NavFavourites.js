import React from 'react'
import { FlatList, TouchableOpacity, Text, View } from 'react-native'


const data = [
    {
        id: '123',
        location: 'Home',
        destination: 'Fate, Ilorin'
    },
    {
        id: '456',
        location: 'Work',
        destination: 'Post-Office, Ilorin'
    },
]

const NavFavourites = () => {
    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => (
                <View style={{
                }}/>
            )}
            renderItem={({item}) => (
                <TouchableOpacity style={{
                    flexDirection: 'row',
                    // alignSelf:'center',
                    marginTop: 50,
                }}>
                    

                    <View style={{
                        marginTop: 20,
                    }}>
                        <Text style={{
                            fontWeight: 'bold',
                        }}>{item.location}</Text>
                        <Text style={{
                            // fontWeight: 'bold',
                        }}>{item.destination}</Text>
                    </View>
                </TouchableOpacity>
            )}
        />
    )
}

export default NavFavourites

