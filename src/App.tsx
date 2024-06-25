import CreditCardInput from './components/CreditCardInput/CreditCardInput';

const App = () => {
  const handleCreditCardChange = (value: string) => {
    console.log('Credit Card Number:', value);
  };

  return (
    <div className='container'>
      <h1>Zadejte číslo vaší karty</h1>
      <CreditCardInput onChange={handleCreditCardChange} />
      <p className='button'><button onClick={() => {window.location.reload()}}>Potvrdit</button></p>
    </div>
  );
};

export default App
