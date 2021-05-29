import React from "react";
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
    FlatList
} from 'react-native';

import { COLORS, SIZES, icons, images } from '../constants';

const LineDivider = () => {
    return (
        <View style={{ width: 1, paddingVertical: 18 }}>
            <View style={{ flex: 1, borderLeftColor: COLORS.lightGray, borderLeftWidth: 1 }}></View>
        </View>
    )
}

const Home = ({ navigation }) => {

    const elevenTwentyTwoSixtyThree = {
        id: 1,
        bookName: "11/22/63",
        bookCover: images.elevenTwentyTwoSixtyThree,
        rating: 5,
        language: "eng",
        pageNo: 849,
        author: "Stephen King",
        genre: [
            "Science fiction; Alternate history"
        ],
        description: "Jake Epping is a thirty-five-year-old high school English teacher in Lisbon Falls, Maine, who makes extra money teaching adults in the GED program. He receives an essay from one of the students—a gruesome, harrowing first person story about the night 50 years ago when Harry Dunning’s father came home and killed his mother, his sister, and his brother with a hammer. Harry escaped with a smashed leg, as evidenced by his crooked walk. Not much later, Jake’s friend Al, who runs the local diner, divulges a secret: his storeroom is a portal to 1958. He enlists Jake on an insane—and insanely possible—mission to try to prevent the Kennedy assassination.So begins Jake’s new life as George Amberson and his new world of Elvis and JFK, of big American cars and sock hops, of a troubled loner named Lee Harvey Oswald and a beautiful high school librarian named Sadie Dunhill, who becomes the love of Jake’s life—a life that transgresses all the normal rules of time.",
        backgroundColor: "rgba(240,240,232,0.9)",
        navTintColor: "#000"
    }

    const toKillAMockingBird = {
        id: 2,
        bookName: "To Kill a MockingBird",
        bookCover: images.toKillAMockingBird,
        rating: 4.2,
        language: "eng",
        pageNo: 281,
        author: "Harper Lee",
        genre: [
            "Southern Gothic, Bildungsroman"
        ],
        description: "The unforgettable novel of a childhood in a sleepy Southern town and the crisis of conscience that rocked it, To Kill A Mockingbird became both an instant bestseller and a critical success when it was first published in 1960. It went on to win the Pulitzer Prize in 1961 and was later made into an Academy Award-winning film, also a classic. Compassionate, dramatic, and deeply moving, To Kill A Mockingbird takes readers to the roots of human behavior - to innocence and experience, kindness and cruelty, love and hatred, humor and pathos.Now with over 18 million copies in print and translated into forty languages, this regional story by a young Alabama woman claims universal appeal.Harper Lee always considered her book to be a simple love story.Today it is regarded as a masterpiece of American literature.",
        backgroundColor: "rgba(247,239,219,0.9)",
        navTintColor: "#000"
    }

    const investing = {
        id: 3,
        bookName: "The Little Book of Common Sense Investing",
        bookCover: images.investing,
        rating: 4.5,
        language: "Eng",
        pageNo: 304,
        author: "John C. Bogle",
        genre: [
            "Investing"
        ],
        description: "The Little Book of Common Sense Investing is the classic guide to getting smart about the market. Legendary mutual fund  pioneer John C. Bogle reveals his key to getting more out of investing: low-cost index funds. Bogle describes the simplest and most effective investment strategy for building wealth over the long term: buy and hold, at very low cost, a mutual fund that tracks a broad stock market Index such as the S&P 500. While the stock market has tumbled and then soared since the first edition of Little Book of Common Sense was published in April 2007, Bogle’s investment principles have endured and served investors well.This tenth anniversary edition includes updated data and new information but maintains the same long- term perspective as in its predecessor. Bogle has also added two new chapters designed to provide further guidance to investors: one on asset allocation, the other on retirement investing. A portfolio focused on index funds is the only investment that effectively guarantees your fair share of stock market returns.This strategy is favored by Warren Buffett, who said this about Bogle: “If a statue is ever erected to honor the person who has done the most for American investors, the hands - down choice should be Jack Bogle.For decades, Jack has urged investors to invest in ultra - low - cost index funds. . . .Today, however, he has the satisfaction of knowing that he helped millions of investors realize far better returns on their savings than they otherwise would have earned.He is a hero to them and to me.”Bogle shows you how to make index investing work for you and help you achieve your financial goals, and finds support from some of the world's best financial minds: not only Warren Buffett, but Benjamin Graham, Paul Samuelson, Burton Malkiel, Yale’s David Swensen, Cliff Asness of AQR, and many others.",
        backgroundColor: "rgba(119,77,143,0.9)",
        navTintColor: "#FFF"
    }

    const beyondOrder = {
        id: 4,
        bookName: "Beyond Order",
        bookCover: images.beyondOrder,
        rating: "idk",
        language: "eng",
        pageNo: 432,
        author: "Jordan B. Peterson ",
        genre: [
            "self-help"
        ],
        description: "In 12 Rules for Life, clinical psychologist and celebrated professor at Harvard and the University of Toronto Dr. Jordan B. Peterson helped millions of readers impose order on the chaos of their lives. Now, in this bold sequel, Peterson delivers twelve more lifesaving principles for resisting the exhausting toll that our desire to order the world inevitably takes. In a time when the human will increasingly imposes itself over every sphere of life—from our social structures to our emotional states—Peterson warns that too much security is dangerous.What’s more, he offers strategies for overcoming the cultural, scientific, and psychological forces causing us to tend toward tyranny, and teaches us how to rely instead on our instinct to find meaning and purpose, even—and especially—when we find ourselves powerless. While chaos, in excess, threatens us with instability and anxiety, unchecked order can petrify us into submission.Beyond Order provides a call to balance these two fundamental principles of reality itself, and guides us along the straight and narrow path that divides them.",
        backgroundColor: "rgba(119,77,143,0.9)",
        navTintColor: "#FFF"
    }

    const myBooksData = [
        {
            ...elevenTwentyTwoSixtyThree,
            completion: "100%",
            lastRead: "4 years",

        },
        {
            ...toKillAMockingBird,
            completion: "100%",
            lastRead: "3 years",

        },
        {
            ...investing,
            completion: "30%",
            lastRead: "1 week 2 days",

        }
    ]

    const wishList = [
        {
            ...beyondOrder
        }
    ]

    const categoriesData = [
        {
            id: 1,
            categoryName: "Best Seller",
            books: [
                elevenTwentyTwoSixtyThree, toKillAMockingBird, investing
            ]
        },
        {
            id: 2,
            categoryName: "The Latest",
            books: [
                investing
            ]
        },
        {
            id: 3,
            categoryName: "Coming Soon",
            books: [
                beyondOrder
            ]
        },
    ]

    const [myBooks, setMyBooks] = React.useState(myBooksData);
    const [categories, setCategories] = React.useState(categoriesData);
    const [selectedCategory, setSelectedCategory] = React.useState(1);

    function renderHeader() {
        return (
            <View style={{ flex: 1, flexDirection: 'row', paddingHorizontal: SIZES.padding, alignItems: 'center' }}>
                {/* Greetings */}
                <View style={{ flex: 1 }}>
                    <View style={{ marginRight: SIZES.padding }}>
                        <Text style={{  color: COLORS.white }}>Good Morning, Almar</Text>
                    </View>
                </View>
        
            </View>
        )
    }

    function renderMyBookSection(myBooks, wishList) {

        const renderItem = ({ item, index }) => {
            return (
                <TouchableOpacity
                    style={{
                        flex: 1,
                        marginLeft: index == 0 ? SIZES.padding : 0,
                        marginRight: SIZES.radius
                    }}
                    onPress={() => navigation.navigate("qwe", {
                        book: item
                    })}
                >
                    {/* Book Cover */}
                    <Image
                        source={item.bookCover}
                        resizeMode="cover"
                        style={{
                            width: 180,
                            height: 250,
                            borderRadius: 20
                        }}
                    />

                    {/* Book Info */}
                    <View style={{ marginTop: SIZES.radius, flexDirection: 'row', alignItems: 'center' }}>
                        <Image
                            source={icons.clock_icon}
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: COLORS.lightGray
                            }}
                        />
                        <Text style={{ marginLeft: 5, color: COLORS.lightGray }}>{item.lastRead}</Text>

                        <Image
                            source={icons.page_icon}
                            style={{
                                marginLeft: SIZES.radius,
                                width: 20,
                                height: 20,
                                tintColor: COLORS.lightGray
                            }}
                        />
                        <Text style={{ marginLeft: 5, color: COLORS.lightGray }}>{item.completion}</Text>
                    </View>
                </TouchableOpacity>
            )
        }

        return (
            <>
                <View style={{ flex: 1 }}>
                    {/* Header */}
                    <View style={{ paddingHorizontal: SIZES.padding, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ color: COLORS.white, fontSize: 22, letterSpacing: 1.3, color: "lightgreen" }}>Your List</Text>

                        <TouchableOpacity
                            onPress={() => console.log("See More")}
                        >
                        </TouchableOpacity>
                    </View>

                    {/* Books */}
                    <View style={{ flex: 1, marginTop: SIZES.padding }}>
                        <FlatList
                            data={myBooks}
                            renderItem={renderItem}
                            keyExtractor={item => `${item.id}`}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                </View>
                <View style={{ flex: 1, marginTop: 40 }}>
                    {/* Header */}
                    <View style={{ paddingHorizontal: SIZES.padding, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ color: COLORS.white, fontSize: 22, letterSpacing: 1.3, color: "lightgreen" }}>Wish List</Text>

                        <TouchableOpacity
                            onPress={() => console.log("See More")}
                        >
                        </TouchableOpacity>
                    </View>

                    {/* Books */}
                    <View style={{ flex: 1, marginTop: SIZES.padding }}>
                        <FlatList
                            data={wishList}
                            renderItem={renderItem}
                            keyExtractor={item => `${item.id}`}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                </View>
            </>
            
        )
    }

    function renderCategoryHeader() {

        const renderItem = ({ item }) => {
            return (
                <TouchableOpacity
                    style={{ flex: 1, marginRight: SIZES.padding }}
                    onPress={() => setSelectedCategory(item.id)}
                >
                    {
                        selectedCategory == item.id &&
                        <Text style={{ color: COLORS.white }}>{item.categoryName}</Text>
                    }
                    {
                        selectedCategory != item.id &&
                        <Text style={{ color: COLORS.lightGray }}>{item.categoryName}</Text>
                    }
                </TouchableOpacity>
            )
        }

        return (
            <View style={{ flex: 1, paddingLeft: SIZES.padding }}>
                <FlatList
                    data={categories}
                    showsHorizontalScrollIndicator={false}
                    renderItem={renderItem}
                    keyExtractor={item => `${item.id}`}
                    horizontal
                />
            </View>
        )
    }

    function renderCategoryData() {
        var books = []

        let selectedCategoryBooks = categories.filter(a => a.id == selectedCategory)

        if (selectedCategoryBooks.length > 0) {
            books = selectedCategoryBooks[0].books
        }

        const renderItem = ({ item }) => {
            return (
                <View style={{ marginVertical: SIZES.base }}>
                    <TouchableOpacity
                        style={{ flex: 1, flexDirection: 'row' }}
                        onPress={() => navigation.navigate("qwe", {
                            book: item
                        })}
                    >
                        {/* Book Cover */}
                        <Image
                            source={item.bookCover}
                            resizeMode="cover"
                            style={{ width: 100, height: 150, borderRadius: 10 }}
                        />

                        <View style={{ flex: 1, marginLeft: SIZES.radius }}>
                            {/* Book name and author */}
                            <View>
                                <Text style={{ paddingRight: SIZES.padding, color: COLORS.white }}>{item.bookName}</Text>
                                <Text style={{ color: COLORS.lightGray }}>{item.author}</Text>
                            </View>

                            {/* Book Info */}
                            <View style={{ flexDirection: 'row', marginTop: SIZES.radius }}>
                                <Image
                                    source={icons.page_filled_icon}
                                    resizeMode="contain"
                                    style={{
                                        width: 20,
                                        height: 20,
                                        tintColor: COLORS.lightGray
                                    }}
                                />
                                <Text style={{ color: COLORS.lightGray, paddingHorizontal: SIZES.radius }}>{item.pageNo}</Text>

                                <Image
                                    source={icons.read_icon}
                                    resizeMode="contain"
                                    style={{
                                        width: 20,
                                        height: 20,
                                        tintColor: COLORS.lightGray
                                    }}
                                />
                                <Text style={{ color: COLORS.lightGray, paddingHorizontal: SIZES.radius }}>{item.readed}</Text>
                            </View>

                            {/* Genre */}
                            <View style={{ flexDirection: 'row', marginTop: SIZES.base }}>
                                {
                                    item.genre.includes("Adventure") &&
                                    <View style={{ justifyContent: 'center', alignItems: 'center', padding: SIZES.base, marginRight: SIZES.base, backgroundColor: COLORS.darkGreen, height: 40, borderRadius: SIZES.radius }}>
                                        <Text style={{ color: COLORS.lightGreen }}>Adventure</Text>
                                    </View>
                                }
                                {
                                    item.genre.includes("Romance") &&
                                    <View style={{ justifyContent: 'center', alignItems: 'center', padding: SIZES.base, marginRight: SIZES.base, backgroundColor: COLORS.darkRed, height: 40, borderRadius: SIZES.radius }}>
                                        <Text style={{ color: COLORS.lightRed }}>Romance</Text>
                                    </View>
                                }
                                {
                                    item.genre.includes("Drama") &&
                                    <View style={{ justifyContent: 'center', alignItems: 'center', padding: SIZES.base, marginRight: SIZES.base, backgroundColor: COLORS.darkBlue, height: 40, borderRadius: SIZES.radius }}>
                                        <Text style={{ color: COLORS.lightBlue }}>Drama</Text>
                                    </View>
                                }
                            </View>
                        </View>
                    </TouchableOpacity>

                    {/* Bookmark Button */}
                    <TouchableOpacity
                        style={{ position: 'absolute', top: 5, right: 15 }}
                        onPress={() => console.log("Bookmark")}
                    >
                        <Image
                            source={icons.bookmark_icon}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: COLORS.lightGray
                            }}
                        />
                    </TouchableOpacity>
                </View>
            )
        }

        return (
            <View style={{ flex: 1, marginTop: SIZES.radius, paddingLeft: SIZES.padding }}>
                <FlatList
                    data={books}
                    renderItem={renderItem}
                    keyExtractor={item => `${item.id}`}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.black }}>
    

            {/* Body Section */}
            <ScrollView style={{ marginTop: SIZES.radius }}>
                {/* Books Section */}
                <View>
                    {renderMyBookSection(myBooks, wishList)}
                </View>

                {/* Categories Section */}
                <View style={{ marginTop: SIZES.padding }}>
                    <View>
                        {renderCategoryHeader()}
                    </View>
                    <View>
                        {renderCategoryData()}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;