import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { useLocalSearchParams, Stack } from "expo-router";
import exercises from "../../assets/data/exercises.json";
import { iExercise } from "../components/ExerciseListItem";

export default function ExerciseDetailsScreen() {
  const params = useLocalSearchParams();

  const exerciseName = params.name?.toString().replace(/ /g, "_").toLowerCase();
  console.log(exerciseName);

  const [selectedExercise, setSelectedExercise] = useState<iExercise>();
  const [fetchLoading, setFetchLoading] = useState<boolean>(false);

  useEffect(() => {
    setFetchLoading(true);
    fetch(`${process.env.APININJAS_BASEURL}?name=${exerciseName}`, {
      method: "GET",
      headers: {
        "X-Api-Key": `${process.env.APININJAS_KEY}`,
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data[0]);
        setSelectedExercise(data[0]);
      })
      .catch((err) => console.error(err))
      .finally(() => setFetchLoading(false));
  }, []);

  const [instructionsExpanded, setInstructionsExpanded] =
    useState<boolean>(false);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Stack.Screen options={{ title: params.name?.toString() }} />

      {fetchLoading ? (
        <ActivityIndicator size="large" />
      ) : (
        selectedExercise && (
          <>
            <View style={styles.panel}>
              <Text style={styles.exerciseName}>{selectedExercise.name}</Text>
              <Text style={styles.exerciseSubtitle}>
                <Text style={styles.subValue}>{selectedExercise.muscle}</Text> |{" "}
                <Text style={styles.subValue}>
                  {selectedExercise.equipment}
                </Text>
              </Text>
            </View>

            <View style={styles.panel}>
              <Text
                style={styles.instructions}
                numberOfLines={instructionsExpanded ? 0 : 3}
              >
                {selectedExercise.instructions}
              </Text>
              <Text
                style={styles.seeMore}
                onPress={() => setInstructionsExpanded(!instructionsExpanded)}
              >
                {instructionsExpanded ? "See less" : "See more"}
              </Text>
            </View>
          </>
        )
      )}
    </ScrollView>
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
  seeMore: {
    alignSelf: "center",
    padding: 10,
    fontWeight: "600",
    color: "gray",
  },
});
