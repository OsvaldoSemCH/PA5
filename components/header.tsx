import { Text, View, Image, ImageSourcePropType, StyleSheet } from "react-native"


export const Header = ({image} : {image: ImageSourcePropType}) =>
{
    return(
    <>
        <View style={Styles.background}>
            <Text style={Styles.text}>Header</Text>
            <Image source={image}></Image>
        </View>
    </>
    )
}

const Styles = StyleSheet.create
({
    background:
    {
        backgroundColor: "#090909",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 10,
        paddingVertical: 5
    },
    text:
    {
        color: "#ffffff",
        fontWeight: "bold",
        fontSize: 30
    }
})