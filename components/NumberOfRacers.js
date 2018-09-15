import React from 'react'
import { View, TextInput, TouchableOpacity } from 'react-native'
import { MonoText } from '../components/StyledText'



export default class NumberOfRacers extends React.Component {
    state = {
        value: 1
    }
    handleScrollChange = (name, value) => {
       this.setState({value})     
    }

    render() {

      

        


        return (
            <View style={{
                justifyContent: "center", alignItems: "center",
                flexDirection: "column"
            }}>
                <MonoText style={{ fontSize: 40, textAlign: "center" }}>
                    Enter Your # of Racers</MonoText>
                <TextInput
                    style={{
                        height: 40, width: "80%",
                        textAlign: "center"
                    }}

                    keyboardType={"numeric"}
                />
                <View style={{ flex: 2 }} />

              

                <TouchableOpacity
                    style={{
                        backgroundColor: "green",
                        borderRadius: 20, padding: 10
                    }}
                >
                    <MonoText
                        style={{ fontSize: 40 }}
                    >Enter</MonoText>
                </TouchableOpacity>

            </View>
        )
    }
}