import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet } from 'react-native';

const ReservationForm = () => {
  const [departure, setDeparture] = useState('');
  const [arrival, setArrival] = useState('');
  const [seats, setSeats] = useState('');
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleReservation = () => {
    // Ajouter la logique de validation et de redirection ici
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={{ uri: 'https://johneys.com/wp-content/uploads/2022/09/cropped-transparent_logo_white.png' }}
          style={styles.logo}
        />
      </View>
      <Text style={styles.title}>Réservation</Text>
      <View style={styles.form}>
        <Text style={styles.label}>Départ *</Text>
        <TextInput
          value={departure}
          onChangeText={setDeparture}
          placeholder="Entrez le lieu de départ"
          style={styles.input}
        />
        <Text style={styles.label}>Arrivée *</Text>
        <TextInput
          value={arrival}
          onChangeText={setArrival}
          placeholder="Entrez le lieu d'arrivée"
          style={styles.input}
        />
        <Text style={styles.label}>Nombre de sièges *</Text>
        <TextInput
          value={seats}
          onChangeText={setSeats}
          placeholder="Entrez le nombre de sièges"
          keyboardType="numeric"
          style={styles.input}
        />
        <Text style={styles.label}>Nom et prénom *</Text>
        <TextInput
          value={fullName}
          onChangeText={setFullName}
          placeholder="Entrez votre nom et prénom"
          style={styles.input}
        />
        <Text style={styles.label}>Numéro de téléphone *</Text>
        <TextInput
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          placeholder="Entrez votre numéro de téléphone"
          keyboardType="phone-pad"
          style={styles.input}
        />
        <Button title="Réserver" onPress={handleReservation} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    marginBottom: 15,
    width: '100%', 
    height: '80', 
  },

  logo: {
    width: 150,
    height: 100,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  form: {
    width: '80%',
  },
  label: {
    marginBottom: 5,
    color: 'green',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 2,
    borderRadius: 4,
    fontSize: 16,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});

export default ReservationForm;
