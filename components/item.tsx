import { StyleSheet } from "react-native";
import { View, Text } from "react-native";

export function Item({nome, idade} : {nome: string, idade: string})
{
    return(
    <>
        <View style={Styles.item}>
            <Text>{nome}</Text>
            <Text>{idade}</Text>
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
    }
})