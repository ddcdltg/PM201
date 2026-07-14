import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Inicio",
          href: null,
        }}
      />

      <Tabs.Screen
        name="alta"
        options={{
          title: "Alta",
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="create-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="consulta"
        options={{
          title: "Consulta",
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="happy-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}