import React, { useEffect, useState } from "react";
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View, FlatList, SafeAreaView } from "react-native";
import { Firestore } from "@/services/firebase"; 
import { collection, addDoc, deleteDoc, doc, onSnapshot, updateDoc } from "firebase/firestore";

interface Product
{

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
    },
    price:
    {
        fontWeight: "bold",
        fontSize: 24
    }
})