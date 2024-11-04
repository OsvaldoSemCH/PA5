import React, { useEffect, useState } from "react";
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View, FlatList, SafeAreaView } from "react-native";
import { Firestore } from "@/services/firebase"; 
import { collection, addDoc, deleteDoc, doc, onSnapshot, updateDoc } from "firebase/firestore";
import { Card } from "@/components/card";

interface Product
{
    id : string,
    Title : string,
    Album : string,
    Author : string,
    Price : number
}

export default function Loja()
{
    const [Products, SetProducts] = useState<Product[]>([]);
    useEffect(() => {
        const unsubscribe = onSnapshot(collection(Firestore, "products"), (snapshot) =>
        {
            const ProductList: Product[] = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Product[];
            SetProducts(ProductList);
        });

        return () => unsubscribe();
    }, []);
    return(
    <>
       <SafeAreaView style={Styles.Container}>
        {
            Products.map((item) =>
            {
                return(
                <View key={item.id}>
                    <Card Title={item.Title} Album={item.Album} Author={item.Author} Price={item.Price}/>
                </View>
                )
            })
        }
        </SafeAreaView> 
    </>
    )
}

const Styles = StyleSheet.create
({
    Container:
    {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#d0d0d0",
        fontFamily: "DefFont",
        overflow: 'scroll',
    }
})