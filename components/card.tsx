import { Text, View, Image, ImageSourcePropType, StyleSheet } from "react-native"

interface Product
{
    Title : string,
    Album : string,
    Author : string,
    Price : number
}

export const Card = ({Title,Album,Author,Price} : Product) =>
{
    return(
    <>
        <View style={Styles.background}>
            <Image source={require("@/assets/images/mp3.png")} style={{width: 100, height: 120}}></Image>
            <View style={{flexDirection: "column", flexWrap: "wrap"}}>
                <Text style={Styles.Title}>{Title}</Text>
                <Text>Álbum: {Album == "" ? "Desconhecido" : Album}</Text>
                <Text>Autor: {Author == "" ? "Desconhecido" : Author}</Text>
                <Text style={Styles.price}>R$ {Price.toFixed(2)}</Text>
            </View>
        </View>
    </>
    )
}

const Styles = StyleSheet.create
({
    background:
    {
        backgroundColor: "#d0d0d0",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        paddingHorizontal: 10,
        paddingVertical: 5,
        width: 300,
        height: 200,
    },
    price:
    {
        fontWeight: "bold",
        fontSize: 24
    },
    Title:
    {
        fontWeight: "bold",
        fontSize: 24
    }
})