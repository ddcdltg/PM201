import React, { useState } from "react";
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet, Modal, } from "react-native";
import { useLocalSearchParams, router } from "expo-router";

export default function DetallesUsuarioScreen() {
  const usuario = useLocalSearchParams();

  const [modalVisible, setModalVisible] = useState(false);

  const eliminarUsuario = async () => {
  try {
    const respuesta = await fetch(
      `http://192.168.100.13:5000/v1/usuarios/${usuario.id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: "Basic YWRtaW46MTIzNA==", // admin:1234
        },
      }
    );

    if (!respuesta.ok) {
      const error = await respuesta.json();
      console.log(error);
      return;
    }

    setModalVisible(false);
    router.back();
  } catch (error) {
    console.log(error);
  }
};

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Detalles del Usuario</Text>

      <TouchableOpacity onPress={() => router.back()}>
        <Text style={styles.regresar}>← Regresar</Text>
      </TouchableOpacity>

      <View style={styles.card}>
        <Text style={styles.info}>
          <Text style={styles.label}>Nombre: </Text>
          {usuario.nombre}
        </Text>

        <Text style={styles.info}>
          <Text style={styles.label}>Edad: </Text>
          {usuario.edad} años
        </Text>
      </View>

      <TouchableOpacity
        style={styles.botonEditar}
        onPress={() =>
          router.push({
            pathname: "/editar",
            params: usuario,
          })
        }
      >
        <Text style={styles.textoBoton}>Actualizar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botonEliminar}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textoBoton}>Eliminar</Text>
      </TouchableOpacity>

      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="fade"
      >
        <View style={styles.modalFondo}>
          <View style={styles.modal}>
            <Text style={styles.modalTitulo}>Confirmar eliminación</Text>

            <Text style={styles.modalTexto}>
              ¿Estás seguro de que deseas eliminar al usuario {usuario.nombre}?
            </Text>

            <View style={styles.modalBotones}>
              <TouchableOpacity
                style={styles.cancelar}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.textoBoton}>Cancelar</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.confirmar}
                onPress={eliminarUsuario}
              >
                <Text style={styles.textoBoton}>Si, eliminar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FA",
    padding: 20,
  },

  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: "#1F2937",
    marginBottom: 20,
  },

  regresar: {
    fontSize: 16,
    color: "#020202",
    marginBottom: 15,
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    padding: 18,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    marginBottom: 30,
  },

  info: {
    fontSize: 17,
    color: "#4B5563",
    marginBottom: 12,
  },

  label: {
    fontWeight: "bold",
    color: "#1F2937",
  },

  botonEditar: {
    backgroundColor: "#FBBF24",
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    alignItems: "center",
  },

  botonEliminar: {
    backgroundColor: "#DC2626",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
  },

  textoBoton: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 16,
  },

  modalFondo: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.45)",
    justifyContent: "center",
    alignItems: "center",
  },

  modal: {
    width: "85%",
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    padding: 25,
  },

  modalTitulo: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },

  modalTexto: {
    textAlign: "center",
    marginBottom: 20,
    color: "#555",
  },

  modalBotones: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  cancelar: {
    backgroundColor: "#6B7280",
    padding: 12,
    borderRadius: 10,
    width: "45%",
    alignItems: "center",
  },

  confirmar: {
    backgroundColor: "#DC2626",
    padding: 12,
    borderRadius: 10,
    width: "45%",
    alignItems: "center",
  },
});