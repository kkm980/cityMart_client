import React, { useRef, useState } from "react";
import {
    View,
    Image,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    FlatList,
    Text,
    Linking,
    ImageSourcePropType,
} from "react-native";
import Video from "react-native-video";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import Images from "../constants/images";
import colors from "../constants/colors";

type MediaType = {
    id: number;
    type: "image" | "video";
    source: string;
    articleLink: string;
};

const mediaItems: MediaType[] = [
    {
        id: 2,
        type: "video",
        source: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4", // Replace with video URL
        articleLink: "https://example.com/article2",
    },
    {
        id: 1,
        type: "image",
        source: Images.InviteBanner, // Replace with your image
        articleLink: "https://example.com/article1",
    },

];

const CarouselComponent: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const [isMuted, setIsMuted] = useState(false);
    const videoRef = useRef<React.ElementRef<typeof Video>>(null);

    const handleVideoPress = () => {
        setIsPlaying(!isPlaying);
    };

    const handleMuteToggle = () => {
        setIsMuted(!isMuted);
    };

    const handleLearnMore = (url: string) => {
        Linking.openURL(url);
    };

    return (
        <FlatList
            data={mediaItems}
            horizontal
            showsHorizontalScrollIndicator={false}
            snapToInterval={Dimensions.get("window").width}
            decelerationRate="fast"
            keyExtractor={(item) => item.id.toString()}
            onScroll={(event) => {
                const index = Math.round(
                    event.nativeEvent.contentOffset.x / Dimensions.get("window").width
                );
                setCurrentIndex(index);
            }}
            renderItem={({ item }) => (
                <View style={styles.container}>
                    {item.type === "image" ? (
                        <Image
                            source={item.source as ImageSourcePropType}
                            style={[styles.media, { resizeMode: 'contain' }]}
                        />
                    ) : (
                        <TouchableOpacity onPress={handleVideoPress}>
                            <Video
                                ref={videoRef}
                                source={{ uri: item.source }}
                                style={styles.media}
                                resizeMode="contain"
                                muted={isMuted}
                                paused={!isPlaying}
                                repeat
                            />
                        </TouchableOpacity>
                    )}
                    {item.type === "video" && (
                        <View style={styles.controls}>
                            <TouchableOpacity onPress={handleMuteToggle}>
                                <Text style={styles.controlText}>
                                    {isMuted ? "Unmute" : "Mute"}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    )}
                    <TouchableOpacity
                        style={styles.learnMoreButton}
                        onPress={() => handleLearnMore(item.articleLink)}
                    >
                        <Text style={styles.learnMoreText}>Learn More</Text>
                    </TouchableOpacity>
                </View>
            )}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get("window").width,
        height: responsiveHeight(50),
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.PrimaryWhite,
    },
    media: {
        width: responsiveWidth(90),
        height: responsiveHeight(40),
        borderRadius: responsiveFontSize(1),
    },
    controls: {
        position: "absolute",
        bottom: responsiveHeight(5),
        left: responsiveWidth(5),
        flexDirection: "row",
        alignItems: "center",
    },
    controlText: {
        color: "#fff",
        fontSize: responsiveFontSize(2),
        marginHorizontal: responsiveWidth(2),
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        paddingHorizontal: responsiveWidth(2),
        borderRadius: responsiveFontSize(1),
    },
    learnMoreButton: {
        position: "absolute",
        bottom: responsiveHeight(2),
        alignSelf: "center",
        backgroundColor: "rgba(0, 128, 0, 0.8)",
        paddingVertical: responsiveHeight(1),
        paddingHorizontal: responsiveWidth(5),
        borderRadius: responsiveFontSize(1),
    },
    learnMoreText: {
        color: "#fff",
        fontSize: responsiveFontSize(2),
        fontWeight: "bold",
    },
});

export default CarouselComponent;
