import React from "react";
import { Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import exercises from "../../assets/data/exercises.json";

export default function ExerciseDetailsScreen() {
  const params = useLocalSearchParams();

  const exercise = exercises.find((item) => item.name === params.name);

  if (!exercise) return <Text>Exercise not found!</Text>;

  return (
    <View>
      <Text>
        Exercise Details: {exercise.name} {exercise.type}
      </Text>
    </View>
  );
}
