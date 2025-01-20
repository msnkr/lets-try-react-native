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

import { StyleSheet, Text, View, Modal, Pressable } from "react-native";
import "@expo/metro-runtime";
import { useState } from "react";

export default function App() {
  const [isVisible, setIsVisible] = useState(false);
  const handlePress = () => {
    setIsVisible((prev) => {
      return !prev;
    });
  };
  return (
    <View style={styles.appContainer}>
      <View style={styles.container}>
        <Text style={styles.modalText}>Hello, World!</Text>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Show Modal</Text>
        </Pressable>
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
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  modalText: {
    fontSize: 22,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "salmon",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});
