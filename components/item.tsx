import { StyleSheet } from "react-native";
import { View, Text } from "react-native";
import { Image } from "expo-image"

export function Item({nome, idade, image} : {nome: string, idade: string, image: string})
{
    return(
    <>
        <View style={Styles.item}>
            <Text>{nome}</Text>
            <Text>{idade}</Text>
            <Image source={image} style={Styles.image}></Image>
        </View>
    </>
    )
}

const Styles = StyleSheet.create
({
    item:
    {
        display: "flex",
        flexDirection: "row"
    },
    image:
    {
        width: 20,
        height: "auto"
    }
})