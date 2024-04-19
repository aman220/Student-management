import React, { useState, useRef, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  useColorScheme,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  FlatList,
  Text,
  ImageSourcePropType,
} from 'react-native';
import Colors from '../../constants/Colors';
import Font from '../../constants/Font';
import FontSize from '../../constants/FontSize';
import Spacing from '../../constants/Spacing';


const BannerSlider: React.FC = () => {
  const colorScheme = useColorScheme();
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef<FlatList | null>(null);
  
  
  const images: { index: number; path: { uri: string } }[] = [
    { index: 0, path: { uri: 'https://kaspiunique.com/Temp/school1%20(1).png' } },
    { index: 1, path: { uri: 'https://kaspiunique.com/Temp/school2.png' } },
    { index: 2, path: { uri: 'https://kaspiunique.com/Temp/school3.png' } },
  ];
  
  
  interface ImageComponentProps {
    index: number;
    source: ImageSourcePropType;
  }

  const ImageComponent: React.FC<ImageComponentProps> = ({ source }) => (
    <Image source={source} style={styles.image} resizeMode="cover" />
  );



  const styles = StyleSheet.create({
    container: {
      backgroundColor: colorScheme === 'dark' ? Colors.darkBackground : Colors.light,
    },
    imageContainer: {
      borderRadius: 12,
      overflow: 'hidden',
      marginRight: 8,
    },
    image: {
      width: Dimensions.get('window').width - 40,
      height: 200,
      borderRadius: 12,
    },
    buttonContainer: {
      position: 'absolute',
      bottom: 15,
      right: 15,
    },
    dotContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 10,
    },
    dot: {
      width: 8,
      height: 8,
      borderRadius: 4,
      backgroundColor: '#888',
      marginHorizontal: 5,
    },
    activeDot: {
      backgroundColor: '#000',
    },
  });

 

  const renderDot = (index: number) => {
    return (
      <TouchableOpacity
        key={index}
        style={[styles.dot, activeIndex === index && styles.activeDot]}
        onPress={() => handleImageChange(index)}
      />
    );
  };

  const handleImageChange = (index: number) => {
    setActiveIndex(index);
    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({ index, animated: true });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex = (activeIndex + 1) % images.length;
      setActiveIndex(newIndex);
      if (flatListRef.current) {
        flatListRef.current.scrollToIndex({ index: newIndex, animated: true });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [activeIndex, images.length]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ padding: 16 }}>
      <FlatList
          ref={(ref) => {
            flatListRef.current = ref;
          }}
          data={images}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={{
            paddingHorizontal: 4,
          }}
          renderItem={({ item }) => (
            <View style={styles.imageContainer}>
              <ImageComponent source={item.path} index={0}/>
            </View>
          )}
          onMomentumScrollEnd={(event) => {
            const newIndex = Math.floor(event.nativeEvent.contentOffset.x / Dimensions.get('window').width);
            setActiveIndex(newIndex);
          }}
        />
        <View style={styles.dotContainer}>
          {images.map((_, index) => renderDot(index))}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BannerSlider;
