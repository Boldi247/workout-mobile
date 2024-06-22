import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { useLocalSearchParams, Stack } from "expo-router";
import exercises from "../../assets/data/exercises.json";

export default function ExerciseDetailsScreen() {
  const params = useLocalSearchParams();

  const exercise = exercises.find((item) => item.name === params.name);

  if (!exercise) return <Text>Exercise not found!</Text>;

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: exercise.name }} />

      <View style={styles.panel}>
        <Text style={styles.exerciseName}>{exercise.name}</Text>
        <Text style={styles.exerciseSubtitle}>
          <Text style={styles.subValue}>{exercise.muscle}</Text> |{" "}
          <Text style={styles.subValue}>{exercise.equipment}</Text>
        </Text>
      </View>

      <View style={styles.panel}>
        <Text style={styles.instructions}>{exercise.instructions}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    gap: 10,
  },
  exerciseName: {
    fontSize: 20,
    fontWeight: "500",
  },
  exerciseSubtitle: {
    color: "dimgray",
  },
  subValue: {
    textTransform: "capitalize",
  },
  instructions: {
    fontSize: 16,
    lineHeight: 22,
  },
  panel: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
  },
});
