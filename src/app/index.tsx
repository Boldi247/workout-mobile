import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  FlatListProps,
  ActivityIndicator,
} from "react-native";
import ExerciseListItem from "../components/ExerciseListItem";

export default function App() {
  const [exercisesData, setExercisesData] = useState<any>();
  const [fetchLoading, setFetchLoading] = useState<boolean>(false);

  useEffect(() => {
    setFetchLoading(true);
    fetch(`${process.env.APININJAS_BASEURL}`, {
      method: "GET",
      headers: {
        "X-Api-Key": `${process.env.APININJAS_KEY}`,
      },
    })
      .then((resp) => resp.json())
      .then((data) => setExercisesData(data))
      .catch((err) => console.error(err))
      .finally(() => setFetchLoading(false));
  }, []);

  return (
    <View style={styles.container}>
      {fetchLoading ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          data={exercisesData}
          contentContainerStyle={{ gap: 5 }}
          renderItem={({ item, index }) => (
            <ExerciseListItem item={item} key={index} />
          )}
        />
      )}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "ghostwhite",
    justifyContent: "center",
    padding: 10,
  },
});
