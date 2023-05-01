import {Text, View, StyleSheet, Pressable} from "react-native";

function GoalItem({itemData, onDeleteItem, id}) {
    return (
        <View style={styles.goalItem}>
            <Pressable onPress={onDeleteItem.bind(this, id)} android_ripple={{color: '#210644'}}
                       style={({pressed}) => pressed && styles.pressedItem}>
                {/*This is for iPhone that not supports radios on Text*/}
                <Text style={styles.goalTextItem}>{itemData.item.text}</Text>
            </Pressable>
        </View>
    )
}

export default GoalItem;

const styles = StyleSheet.create({
    goalTextItem: {
        padding: 6,
        color: "white",
    },
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: "#5e0acc",
    },
    pressedItem: {opacity: 0.5}
})
