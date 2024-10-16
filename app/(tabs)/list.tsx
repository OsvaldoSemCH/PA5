import { FlatList, SafeAreaView, Text, StyleSheet } from "react-native";
import Data from "@/constants/Data.json"
import { Item } from "@/components/item";

export default function List()
{
    return(
    <>
        <Text>Lista</Text>
        <SafeAreaView style={style.container}>
            <FlatList
                data={Data}
                renderItem={({item}) => (<Item nome={item.nome} idade={item.idade}/>)}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    </>
    );
}

const style = StyleSheet.create
({
    container:
    {
        flex: 1,
    }
});