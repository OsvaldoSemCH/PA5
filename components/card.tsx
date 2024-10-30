import { Text, View, Image, ImageSourcePropType, StyleSheet } from "react-native"

interface CardData
{
    name: string;
    price: number;
    image: ImageSourcePropType;
}

export const Card = ({name, price, image} : CardData) =>
{
    return(
    <>
        <View style={Styles.background}>
            <Text>{name}</Text>
            <Text style={Styles.price}>R$ {price.toFixed(2)}</Text>
            <Image source={image}></Image>
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
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 10,
        paddingVertical: 5,
        width: 80,
        height: 120,
        borderColor: "#606060",
        borderStyle: "solid",
        borderWidth: 1
    },
    price:
    {
        fontWeight: "bold",
        fontSize: 24
    }
})