import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { useRouter } from "expo-router";

export default function SignInScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleMockSignIn = () => {
    setLoading(true);

    // Simulate a brief loading delay before entering the dashboard
    setTimeout(() => {
      setLoading(false);
      router.replace("/dashboard");
    }, 500);
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.logoText}>KAVYO</Text>
        <Text style={styles.subtitle}>Sign in to your account</Text>

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#6B7280"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#6B7280"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <TouchableOpacity
            style={styles.button}
            onPress={handleMockSignIn}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color="#FFFFFF" />
            ) : (
              <Text style={styles.buttonText}>Sign In</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#D4EDBC",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  logoText: {
    fontSize: 56,
    fontWeight: "800",
    color: "#1F2937",
    letterSpacing: 6,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#374151",
    marginBottom: 32,
    fontWeight: "500",
  },
  form: {
    width: "100%",
    maxWidth: 320,
  },
  input: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    color: "#1F2937",
    marginBottom: 16,
  },
  button: {
    backgroundColor: "#1F2937",
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: "center",
    marginTop: 8,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },
});
