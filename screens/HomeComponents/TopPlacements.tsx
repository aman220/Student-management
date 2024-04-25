import React, { useEffect, useRef } from "react";
import { Animated, Easing, SafeAreaView, ScrollView, StyleSheet, Text, View, useColorScheme } from "react-native";
import Colors from "../../constants/Colors";
import FontSize from "../../constants/FontSize";
import Font from "../../constants/Font";

const TopPlacements: React.FC = () => {
    const colorScheme = useColorScheme();
    const scrollViewRef = useRef<ScrollView>(null);
    const translateValue = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        const moveText = () => {
            Animated.loop(
                Animated.timing(translateValue, {
                    toValue: -3000, 
                    duration: 100, 
                    easing: Easing.linear,
                    useNativeDriver: true,
                })
            ).start();
        };

        moveText();
    }, [translateValue]);

    const PlacementData = [
        { id: 1, data: "10 . Students Placed in infotech" },
        { id: 2, data: "20 . Students Placed in xyz company" },
        { id: 3, data: "15 . Students Placed in ABC corporation" },
        { id: 4, data: "18 . Students Placed in DEF solutions" },
        { id: 5, data: "25 . Students Placed in GHI corporation" },
        { id: 6, data: "30 . Students Placed in JKL group" },
    ];

    const styles = StyleSheet.create({
        container: {
            margin: 15,
            borderRadius: 10,
            padding: 5,
            backgroundColor: colorScheme === 'dark' ? Colors.black : Colors.white,
        },
        itemContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: 8,
            paddingHorizontal: 10,
            borderBottomColor: Colors.light,
        },
        itemText: {
            fontSize: FontSize.base,
            fontFamily: Font["poppins-regular"],
            color: colorScheme === 'dark' ? Colors.white : Colors.primary,
            transform: [{ translateX: translateValue }],
            fontStyle:"italic"
        },
    });

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                horizontal
                ref={scrollViewRef}
                showsHorizontalScrollIndicator={false}
            >
                {PlacementData.map((item) => (
                    <View key={item.id} style={styles.itemContainer}>
                        <Animated.Text style={styles.itemText}>{item.data}</Animated.Text>
                    </View>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
};

export default TopPlacements;
