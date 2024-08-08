export default function CalcScreen() {
    const [number, setNumber] = React.useState(0);
    const [number2, setNumber2] = React.useState(0);
    const [result, setResult] = React.useState('');

      function somar() {
        let n1 = Number(number);
        let n2 = Number(number2);
        let res = n1 + n2;
        setResult(res)
      }

      function subtrair() {
         let n1 = Number(number);
         let n2 = Number(number2);
        let res = n1 - n2;
        setResult(res)
}

      function multiplicar() {
            let n1 = Number(number);
            let n2 = Number(number2);
            let res = n1 * n2;
            setResult(res)
      }

      function dividir() {
            let n1 = Number(number);
            let n2 = Number(number2);
            let res = n1 / n2;
            setResult(res)
      }

      function limpar() {
            setnumber(0);
            setNumber(0);
            setResult('');
}
return(
  <Container>
  <Title>CalcScreen</Title>

  <TextInput>Informe o primeiro numero</TextInput>
  <Input onChangeText={(v) => setNumber(v)} inputMode="numeric" />

  <TextInput>Informe o segundo numero</TextInput>
  <Input onChangeText={(v) => setNumber2(v)} inputMode="numeric" />

  <Button onPress={somar}>
    <TextButton>Somar</TextButton>
  </Button>

  <Button onPress={subtrair}>
    <TextButton>Subtrair</TextButton>
  </Button>

  <Button onPress={multiplicar}>
    <TextButton>Multiplicar</TextButton>
  </Button>

  <Button onPress={dividir}>
    <TextButton>Dividir</TextButton>
  </Button>

  <TextResult>Resultado: {setResult}</TextResult>
</Container>
)
  };