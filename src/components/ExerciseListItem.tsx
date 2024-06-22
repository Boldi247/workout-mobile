import React from "react";
import { Text, Pressable, StyleSheet } from "react-native";
import { Link } from "expo-router";

export interface iExercise {
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
    <Link href={`${item.name}`} asChild>
      <Pressable style={styles.exerciseContainer}>
        <Text style={styles.exerciseName}>{item.name}</Text>
        <Text style={styles.exerciseSubtitle}>
          <Text style={styles.subValue}>{item.muscle.replace(/_/g, " ")}</Text>{" "}
          | <Text style={styles.subValue}>{item.equipment}</Text>
        </Text>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  exerciseContainer: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    gap: 5,
    marginHorizontal: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
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
