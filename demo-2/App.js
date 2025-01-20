// import { StatusBar } from "expo-status-bar";
// import {
//   StyleSheet,
//   Text,
//   View,
//   FlatList,
//   Pressable,
//   TextInput,
//   Button,
//   Modal,
// } from "react-native";
// import "@expo/metro-runtime";

// import { use, useState } from "react";
// export default function App() {
//   const [addChange, setAddChange] = useState("");
//   const [addTodo, setAddTodo] = useState([
//     "todo1",
//     "todo2",
//     "todo3",
//     "todo1",
//     "todo2",
//     "todo3",
//     "todo1",
//     "todo2",
//     "todo3",
//     "todo1",
//     "todo2",
//     "todo3",
//     "todo1",
//     "todo2",
//     "todo3",
//     "todo1",
//     "todo2",
//     "todo3",
//     "todo1",
//     "todo2",
//     "todo3",
//     "todo1",
//     "todo2",
//     "todo3",
//   ]);

//   const handlePress = () => {
//     setAddTodo((prevTodo) => {
//       return [...prevTodo, addChange];
//     });
//     setAddChange("");
//   };

//   const handleChange = (e) => {
//     setAddChange(e);
//   };

//   const handleDelete = (index) => {
//     setAddTodo((prevTodo) => {
//       return prevTodo.filter((item, i) => {
//         return i !== index;
//       });
//     });
//   };
//   return (
//     <View style={styles.appContainer}>
//       <View style={styles.modalView}>
//         <View style={styles.textInputContainer}>
//           <TextInput
//             style={styles.textInputComponent}
//             placeholder="Add todo"
//             onChangeText={handleChange}
//             value={addChange}
//           />
//           <Button title="Add Todo" onPress={handlePress} />
//         </View>
//       </View>
//       <View>
//       </View>
//       <View style={styles.todoListContainer}>
//         <FlatList
//           showsHorizontalScrollIndicator={false}
//           data={addTodo}
//           renderItem={(item) => {
//             return (
//               <View style={styles.textItemContainer}>
//                 <Pressable onPress={() => handleDelete(item.index)}>
//                   <Text style={styles.textItem}>
//                     {item.index + 1}: {item.item}
//                   </Text>
//                 </Pressable>
//               </View>
//             );
//           }}
//         />
//       </View>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   appContainer: {
//     flex: 1,
//     marginTop: 60,
//   },

//   todoListContainer: {
//     flex: 5,
//     paddingTop: 50,
//   },
//   textItemContainer: {
//     backgroundColor: "black",
//     marginTop: 12,
//   },
//   textItem: {
//     fontSize: 20,
//     textTransform: "capitalize",
//     color: "white",
//     padding: 12,
//     paddingLeft: 50,
//   },
//   textInputContainer: {
//     flexDirection: "row",
//     borderBottomWidth: 2,
//     paddingBottom: 50,
//     justifyContent: "center",
//   },
//   textInputComponent: {
//     width: "60%",
//     borderWidth: 1,
//     borderColor: "black",
//     paddingLeft: 10,
//   },
//   modalView: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });

// import { StyleSheet, Text, View, Modal, Pressable } from "react-native";
// import "@expo/metro-runtime";
// import { useState } from "react";

// export default function App() {
//   const [isVisible, setIsVisible] = useState(false);
//   const handlePress = () => {
//     setIsVisible((prev) => {
//       return !prev;
//     });
//   };
//   return (
//     <View style={styles.appContainer}>
//       <Modal
//         visible={isVisible}
//         style={styles.modalContainer}
//         animationType="slide"
//       >
//         <View style={styles.container}>
//           <Text style={styles.modalText}>lorem ipsum</Text>
//           <Pressable style={styles.button} onPress={handlePress}>
//             <Text style={styles.buttonText}>Dont Show Modal</Text>
//           </Pressable>
//         </View>
//       </Modal>
//       <View style={styles.container}>
//         <Text style={styles.modalText}>Hello, World!</Text>
//         <Pressable style={styles.button} onPress={handlePress}>
//           <Text style={styles.buttonText}>Show Modal</Text>
//         </Pressable>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   appContainer: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   modalText: {
//     fontSize: 22,
//     fontWeight: "bold",
//   },
//   button: {
//     backgroundColor: "salmon",
//     paddingVertical: 8,
//     paddingHorizontal: 12,
//     borderRadius: 8,
//     marginTop: 20,
//   },
//   buttonText: {
//     color: "white",
//     fontWeight: "bold",
//   },
//   modalContainer: {
//     marginTop: 100,
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });

import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Pressable,
  Modal,
  ScrollView,
  FlatList,
} from "react-native";
import "@expo/metro-runtime";
import { useState } from "react";

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [changeGoal, setChangeGoal] = useState("");
  const [goals, setGoals] = useState(["todo1", "todo2", "todo3"]);

  const handleAdd = () => {
    setGoals((prevGoals) => {
      return [...prevGoals, changeGoal];
    });
    setModalVisible(false);
  };

  const handleChange = (e) => {
    setChangeGoal(e);
  };

  const handlePress = () => {
    setModalVisible((prev) => {
      return !prev;
    });
  };

  return (
    <View style={styles.appContainer}>
      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInputComponent}
            placeholder="Add todo"
            onChangeText={handleChange}
          />
          <Pressable style={styles.buttonContainer} onPress={handleAdd}>
            <Text style={styles.buttonText}>Add</Text>
          </Pressable>
          <Pressable style={styles.buttonContainer} onPress={handlePress}>
            <Text style={styles.buttonText}>Cancel</Text>
          </Pressable>
        </View>
      </Modal>
      <View style={styles.goalsContainer}>
        <Pressable style={styles.buttonContainer} onPress={handlePress}>
          <Text
            style={[
              styles.buttonText,
              {
                textAlign: "center",
              },
            ]}
          >
            Add
          </Text>
        </Pressable>
        <View style={styles.flatListContainer}>
          <FlatList
            data={goals}
            renderItem={(item) => {
              return (
                <Pressable style={styles.flatListContainerPressable}>
                  <Text style={styles.flatListContainerText}>{item.item}</Text>
                </Pressable>
              );
            }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textInputContainer: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textInputComponent: {
    borderWidth: 1,
    paddingHorizontal: 8,
    width: "60%",
    paddingVertical: 8,
  },
  buttonContainer: {
    backgroundColor: "purple",
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginHorizontal: 5,
  },
  buttonText: {
    color: "white",
  },
  goalsContainer: {
    flex: 2,
    marginTop: 100,
    width: "60%",
  },
  flatListContainer: {
    flex: 5,
    marginTop: 100,
  },
  flatListContainerPressable: {
    backgroundColor: "black",
    margin: 5,
    padding: 8,
    borderRadius: 8,
  },
  flatListContainerText: {
    fontSize: 22,
    textTransform: "capitalize",
    color: "white",
  },
});
