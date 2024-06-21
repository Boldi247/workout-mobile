import React from "react";
import { Text, View, StyleSheet } from "react-native";

interface iExercise {
  name: string;
  type: string;
  muscle: string;
  equipment: string;
  difficulty: string;
  instructions: string;
}

interface iExerciseListItemProps {
  item: iExercise;
}

export default function ExerciseListItem({ item }: iExerciseListItemProps) {
  return (
    <View style={styles.exerciseContainer}>
      <Text style={styles.exerciseName}>{item.name}</Text>
      <Text style={styles.exerciseSubtitle}>
        <Text style={styles.subValue}>{item.muscle}</Text> |{" "}
        <Text style={styles.subValue}>{item.equipment}</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  exerciseContainer: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    gap: 5,
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
});
