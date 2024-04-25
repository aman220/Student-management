import React, { useEffect, useState } from "react";
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image,
    TextInput,
    useColorScheme,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import Spacing from "../../constants/Spacing";
import FontSize from "../../constants/FontSize";
import Font from "../../constants/Font";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";


const LiberaryScreen: React.FC = () => {

    const colorScheme = useColorScheme();
    const navigation = useNavigation()
    const styles = StyleSheet.create({
        container: {
            marginTop: Spacing.margin.xxl,
            flex: 1,
            backgroundColor: colorScheme === 'dark' ? Colors.black : Colors.light,
        }, bookContainer: {
            backgroundColor: colorScheme === 'dark' ? Colors.black : Colors.white,
            borderRadius: 10,
            overflow: "hidden",
            shadowColor: "#7F5DF0",
            shadowOffset: {
                width: 0,
                height: 10,
            },
            shadowOpacity: 1.25,
            shadowRadius: 3.5,
            elevation: 15,
            margin: 15,
            padding: 10,
        },
        bookTitle: {
            fontFamily: Font["poppins-semiBold"],
            fontSize: FontSize.lg,
        },
        bookInfo: {
            fontFamily: Font["poppins-regular"],
        },
        issueReturnInfo: {
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 5,
        },
        noDataText: {
            fontFamily: Font["poppins-regular"],
            textAlign: "center",
            color: Colors.primary,
            marginTop: 20,
        },
    });

    const libraryBooks = [
        {
            id: 1,
            title: "Introduction to Algorithm",
            author: "Coremen, Thomas K.",
            publicationYear: "2006",
            issueDate: "02 Aug 2023",
            returnDate: "27 Nov 2023",
        },
        {
            id: 2,
            title: "Data Structures and Algorithms",
            author: "Cormen, Leiserson, Rivest, Stein",
            publicationYear: "2009",
            issueDate: "15 Sep 2023",
            returnDate: "10 Dec 2023",
        },
    ];
    

    return (
        <SafeAreaView style={styles.container}>
            <View style={{
                backgroundColor: Colors.white,
            }}>
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginHorizontal: 15,
                    marginBottom: 5
                }}>
                    <TouchableOpacity style={{ backgroundColor: colorScheme === 'dark' ? Colors.textGray : Colors.light, width: 50, height: 50, borderRadius: Spacing.borderRadius.xl, justifyContent: "center", alignItems: "center" }} onPress={() => navigation.goBack()}>
                        <Ionicons name='chevron-back' size={24} color={colorScheme === 'dark' ? Colors.white : Colors.textGray} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: FontSize.lg, fontFamily: Font["poppins-semiBold"], color: colorScheme === 'dark' ? Colors.white : Colors.text }}>Library</Text>
                    <TouchableOpacity style={{ backgroundColor: colorScheme === 'dark' ? Colors.textGray : Colors.light, width: 50, height: 50, borderRadius: Spacing.borderRadius.xl, justifyContent: "center", alignItems: "center" }}>
                        <Ionicons name='heart-outline' size={30} color={colorScheme === 'dark' ? Colors.white : Colors.textGray} />
                    </TouchableOpacity>
                </View>
            </View>
            {libraryBooks.length > 0 ? (
                libraryBooks.map((book, index) => (
                    <View style={styles.bookContainer} key={index}>
                        <Text style={styles.bookTitle}>{book.title}</Text>
                        <Text style={styles.bookInfo}>Author: {book.author}</Text>
                        <Text style={styles.bookInfo}>Publication: {book.publicationYear}</Text>
                        <View style={styles.issueReturnInfo}>
                            <Text style={[styles.bookInfo, { color: Colors.primary }]}>Issue On: {book.issueDate}</Text>
                            <Text style={[styles.bookInfo, { color: "red" }]}>Return On: {book.returnDate}</Text>
                        </View>
                    </View>
                ))
            ) : (
                <Text style={styles.noDataText}>No data found.</Text>
            )}
        </SafeAreaView>
    );
};

export default LiberaryScreen;
