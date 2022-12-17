import React from 'react';
import './App.css';
import { Types, AptosClient } from 'aptos';

// Create an AptosClient to interact with devnet.
const client = new AptosClient('https://fullnode.devnet.aptoslabs.com/v1');


function App() {
  // Retrieve aptos.account on initial render and store it.
  const [address, setAddress] = React.useState<string | null>(null);
  
  /**
   * init function
   */
  const init = async() => {
    // connect
    const { address, publicKey } = await window.aptos.connect();
    setAddress(address);
  }
  
  React.useEffect(() => {
     init();
  }, []);

  // Use the AptosClient to retrieve details about the account.
  const [account, setAccount] = React.useState<Types.AccountData | null>(null);
  React.useEffect(() => {
    if (!address) return;
    client.getAccount(address).then(setAccount);
  }, [address]);


  return (
    <div className="App">
      <p><code>{ address }</code></p>
      <p><code>{ account?.sequence_number }</code></p>
    </div>
  );
}

export default App;