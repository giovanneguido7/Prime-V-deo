import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import PrimeVideoLogo from "../../assets/prime_video.png";
import AmazonLogo from "../../assets/amazon_logo.png";
import MovieTheWhell from "../../assets/movies/the_wheel_of_time.png"
import { MoviesCard } from "../../components/MoviesCard";
import { MOVIESWATCHING } from "../../utils/moviesWatching";
import { MOVIESCRIME } from "../../utils/moviesCrimes";
import { MOVIESWATCH } from "../../utils/moviesWatch";

export const Home = () => {
    return (
       <View style={styles.conteiner}>
            <View style={styles.header}>
                <Image style={styles.primeLogoImg} source={PrimeVideoLogo}/>
                <Image style={styles.amazonLogoImg} source={AmazonLogo}/>
            </View>

            <View style={styles.category}>
                <TouchableOpacity>
                    <Text style={styles.categoryTex}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.categoryTex}>Tv Shows</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.categoryTex}>Movies</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.categoryTex}>Kids</Text>
                </TouchableOpacity>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} style={styles.contentMovies}>

            <TouchableOpacity style={styles.theWhellImg}>
                <Image source={MovieTheWhell}/>
            </TouchableOpacity>

            <Text style={styles.movieText}>Continue Watching</Text>
            <FlatList 
            data={MOVIESWATCHING}
            keyExtractor={(item) => item.id} 
            renderItem={({item}) => <MoviesCard movieURL={item.moviesURL} />} 
            horizontal
            contentContainerStyle={styles.contentList}
            showsHorizontalScrollIndicator={false}
            />

            <Text style={styles.movieText}>Crime Movies</Text>
            <FlatList 
            data={MOVIESCRIME}
            keyExtractor={(item) => item.id} 
            renderItem={({item}) => <MoviesCard movieURL={item.moviesURL} />} 
            horizontal
            contentContainerStyle={styles.contentList}
            showsHorizontalScrollIndicator={false}
            />

            <Text style={styles.movieText}>Watch in your language</Text>
            <FlatList 
            data={MOVIESWATCH}
            keyExtractor={(item) => item.id} 
            renderItem={({item}) => <MoviesCard movieURL={item.moviesURL} />} 
            horizontal
            contentContainerStyle={styles.contentList}
            showsHorizontalScrollIndicator={false}
            />

        </ScrollView>
       </View> 
    );
};

const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        backgroundColor: "#232f3E",
        alignItems: "   ",
    },

    header: {
        width: "100%",
        paddingTop: 80,
        alignItems: "center",
        justifyContent: "center",
    },


    amazonLogoImg: {
        marginTop: -32,
        marginLeft: 30,
    },
    
    category: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: 30,
        marginBottom: 15,
    },

    categoryTex: {
        fontSize: 14,
        fontWeight: "700",
        color: "#FFF",
    },

    movieText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "700",
        padding: 15,
    },

    theWhellImg: {
        width: "100%",
        alignItems: "center",
    },

    contentList: {
        paddingLeft: 18,
        paddingRight: 30,
    },

    contentMovies: {},
    
});