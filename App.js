import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {

  const [validCode, setValidCode] = useState('');

  const getNumber = () => {
    if (validCode === '1234') {
      return <Text style={{ color: 'yellow' }}>輸入正確</Text>
    } else if (validCode === '') {
      return <Text style={{ color: 'green' }}>請輸入密碼</Text>
    } else {
      return <Text style={{ color: 'red' }}>輸入錯誤</Text>
    }
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <TextInput
        style={styles.input}
        maxLength={4}
        onChangeText={(text) => { setValidCode(text) }}
        value={validCode}
        secureTextEntry={true}  // 隱藏輸入內容
        autoFocus={true}  // 自動聚焦
      />
      {/* 使用function來做判斷 */}
      {getNumber()}
      {getNumber()}   {/* git測試 */}
      {/* 使用三元運算來判斷 */}
      {validCode.length === 4 ? (
        validCode === '1234' ?
          <Text style={{ color: 'yellow' }}>輸入正確</Text> :
          <Text style={{ color: 'red' }}>輸入錯誤</Text>
      ) : <Text style={{ color: 'green' }}>請輸入密碼</Text>}

      <TouchableOpacity style={styles.btn}>
        <Text style={{ color: '#f4f4f4', fontSize: 24 }}>Enter</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282828',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 50,
    width: 300,
    backgroundColor: '#f4f4f4',
    fontSize: 28,
    textAlign: 'center',
    marginBottom: 20
  },
  btn: {
    paddingHorizontal: 100,
    paddingVertical: 14,
    backgroundColor: '#00aeef',
    borderRadius: 50,
    marginTop: 20
  }
});
