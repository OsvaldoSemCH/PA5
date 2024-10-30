import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { Link, router } from 'expo-router'
import { Auth } from '@/services/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function Login()
{
    const [Email, SetEmail] = useState("");
    const [Password, SetPassword] = useState("");

    const PressBtn = () =>
    {
        signInWithEmailAndPassword(Auth, Email, Password)
        .then((UserData) => {
            console.log(UserData);
            router.push('/(tabs)')
        }).catch((err) => {
            alert(err.message);
        });
    }

    return (
    <>
        <SafeAreaView style={styles.Container}>
            <View>
                <Text style={[styles.Text, {textAlign: "center"}]}>Login</Text>
                <Text style={styles.Text}>Email</Text>
                <TextInput
                    style={styles.Input}
                    onChangeText={SetEmail}
                    value={Email}
                    placeholder='Email'
                    keyboardType='email-address'
                />
                <Text style={styles.Text}>Senha</Text>
                <TextInput
                    style={styles.Input}
                    onChangeText={SetPassword}
                    value={Password}
                    placeholder='Password'
                    keyboardType='numeric'
                    secureTextEntry={true}
                />
                <TouchableOpacity onPress={() => {PressBtn()}} style={styles.Btn}>
                    <Text style={styles.Text}>Enviar</Text>
                </TouchableOpacity>
                <Link href={"/(tabs)/explore"} style={[styles.Btn, styles.Text]}>Registrar-se</Link>
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
        alignSelf: "center",
        borderWidth: 1,
        backgroundColor: "#f0f0f0",
    },
});