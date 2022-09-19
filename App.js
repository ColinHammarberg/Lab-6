import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
} from "react-native";
import react, { useState } from "react";

export default function App() {
  let names = ["Colin", "Hammarberg"];
  const [resultOne, setResultOne] = useState(0);
  const [resultTwo, setResultTwo] = useState(0);
  const [number, set_number] = useState(null);
  const [text, set_text] = useState([]);
  const [welcome, set_welcome] = useState("Who are you?");

  function Click() {
    let result = "";
    for (let xx of names) {
      result = result + " Hi " + xx;
    }
    set_welcome(result);
  }
  function Click2() {
    let n = 0;
    let s = 0;
    while (s < number) {
      n = n + 1;
      s = s + n;
    }
    setResultOne(n);
    setResultTwo(s);
  }
  function Click3() {
    let result_text = [];
    for (let i = 1; i <= 10; i++) {
      let result = i * number;
      result_text.push(i.toString() + "=" + result.toString());
    }
    set_text(result_text);
  }

  return (
    <View style={styles.container}>
      <Text style={{ margin: "10px" }}>{welcome}</Text>
      <Button title="welcome" onPress={Click}></Button>
      <TextInput
        placeholder="1 to 100"
        onSubmitEditing={Click2}
        onChangeText={(number) => set_number(number)}
        style={{
          padding: "10px",
          borderRadius: "5px",
          backgroundColor: "lightyellow",
          textAlign: "center",
          margin: "20px",
        }}
      />
      <Text>
        {" "}
        Result is {resultOne}, {resultTwo}{" "}
      </Text>
      <TextInput
        placeholder="1-9"
        onSubmitEditing={Click3}
        onChangeText={(number) => set_number(number)}
        style={{
          padding: "10px",
          borderRadius: "5px",
          backgroundColor: "lightyellow",
          textAlign: "center",
          margin: "20px",
        }}
      />
      <FlatList data={text} renderItem={({ item }) => <Text>{item}</Text>} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    margin: 100,
  },
});
