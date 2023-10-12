import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import { api } from 'http-module';

export default function App() {
  //const [result, setResult] = React.useState<number | undefined>();

  React.useEffect(() => {
      const loadProducts = async () =>{
        const response = await api.get('/read-products');
        console.log(`RESPOSTA ... ${JSON.stringify(response)}`);
      };
      loadProducts();
  }, []);

  return (
    <View style={styles.container}>
     {/*} <Text>Result: {result}</Text>*/}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
