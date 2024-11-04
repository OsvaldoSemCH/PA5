import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { Link, router } from 'expo-router';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Auth } from '@/services/firebase';
import { Firestore } from '@/services/firebase';
import { doc, addDoc, collection } from 'firebase/firestore';

export default function AddProduct()
{
    const [Title, SetTitle] = useState("");
    const [Album, SetAlbum] = useState("");
    const [Author, SetAuthor] = useState("");
    const [Price, SetPrice] = useState("");

    const PressBtn = async () =>
    {
        const Valor = Number.parseFloat(Price);
        if(isNaN(Valor)){return;}
        if(Title == ""){return;}
        await addDoc(collection(Firestore, "products"), {Title: Title, Album: Album, Author: Author, Price: Valor});
    }

    return (
    <>
        <SafeAreaView style={styles.Container}>
            <View>
                <Text style={[styles.Text, {textAlign: "center"}]}>Novo Produto</Text>
                <Text style={styles.Text}>Titulo</Text>
                <TextInput
                    style={styles.Input}
                    onChangeText={SetTitle}
                    value={Title}
                    placeholder='Titulo'
                />
                <Text style={styles.Text}>Álbum</Text>
                <TextInput
                    style={styles.Input}
                    onChangeText={SetAlbum}
                    value={Album}
                    placeholder='Álbum'
                />
                <Text style={styles.Text}>Autor</Text>
                <TextInput
                    style={styles.Input}
                    onChangeText={SetAuthor}
                    value={Author}
                    placeholder='Autor'
                />
                <Text style={styles.Text}>Preco</Text>
                <TextInput
                    style={styles.Input}
                    onChangeText={SetPrice}
                    value={Price}
                    placeholder='Preco'
                />
                <TouchableOpacity onPress={() => {PressBtn()}} style={styles.Btn}>
                    <Text style={styles.Text}>Salvar Produto</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    </>
    );
}

const styles = StyleSheet.create({
    Container:
    {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#d0d0d0",
    },
    LoginBox:
    {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
    },
    Input:
    {
        paddingHorizontal: 10,
        paddingVertical: 3,
        borderWidth: 1,
        fontFamily: "DefFont",
        backgroundColor: "#f0f0f0",
    },
    Text:
    {
        marginVertical: 5,
        fontFamily: "DefFont",
    },
    Btn:
    {
        marginVertical: 5,
        paddingHorizontal: 2,
        alignSelf: "center",
        borderWidth: 1,
        backgroundColor: "#f0f0f0",
    },
});