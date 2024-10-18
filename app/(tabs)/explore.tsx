import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { Link, router } from 'expo-router'

export default function Login()
{
    const [Email, SetEmail] = useState("");
    const [Password, SetPassword] = useState("");
    const [Password2, SetPassword2] = useState("");

    const PressBtn = () =>
    {
        if(Password == Password2)
        {
            router.push("../");
        }
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
                    placeholder='Senha'
                    keyboardType='numeric'
                    secureTextEntry={true}
                />
                <Text style={styles.Text}>Repita a Senha</Text>
                <TextInput
                    style={styles.Input}
                    onChangeText={SetPassword2}
                    value={Password2}
                    placeholder='Repita a Senha'
                    keyboardType='numeric'
                    secureTextEntry={true}
                />
                <TouchableOpacity onPress={() => {PressBtn()}} style={styles.Btn}>
                    <Text style={styles.Text}>Registrar-se</Text>
                </TouchableOpacity>
            </View>
            {
                Password == Password2 ? <View style={{height: 30}}></View>:<Text style={[styles.Text, {height: 20}]}>As senhas não são iguais</Text>
            }
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