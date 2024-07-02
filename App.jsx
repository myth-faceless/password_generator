import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'


//Form validation using Yup package. 
import * as Yup from 'yup';

const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number()
  .min(4, 'Should be minimum of 4 characters !')
  .max(16, 'Should be maximum of 16 characters !')
  .required('Password length is required !')
})


const App = () => {

  const [password, setPassword] = useState('')
  const [isPassGenerated, setIsPassGenerated] = useState(false)

  const [lowerCase, setLowerCase] = useState(true)
  const [upperCase, setUpperCase] = useState(false)
  const [numbers, setNumbers] = useState(false)
  const [symbols, setSymbols] = useState(false)

  const generatePasswordString = (passwordLength) => {
    let characterList = '';
    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const digitChars = '0123456789';
    const specialChars = '!@#$%^&*()_+';

    if(upperCase) {
      characterList += upperCase
    }

    if (lowerCase) {
      characterList += lowerCase
    }

    if(numbers) {
      characterList += numbers
    }

    if (symbols) {
      characterList += symbols
    }

    const passwordResult = createPassword(characterList, passwordLength)

    setPassword(passwordResult)
    setIsPassGenerated(true)

  }

  const createPassword = (characters, passwordLength) => {
    let result = ''
    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.random(Math.random() * characters.length)
      result += characters.charAt(characterIndex)  
    }
    return result
  }

  const resetPasswordState = () => {
    setPassword('')
    setIsPassGenerated(false)
    setLowerCase(true)
    setUpperCase(false)
    setNumbers(false)
    setSymbols(false)
  }

  return (
    <View style = {{flex:1, backgroundColor: "tomato", justifyContent: 'center', alignItems:'center'}}>
      <Text style = {{color: 'white', fontSize: 25}}>App</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})