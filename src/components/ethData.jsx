import React, { useState, useEffect } from 'react';
import { Connectors } from 'web3-react'
import Web3 from 'web3';
import { useWallet, UseWalletProvider } from 'use-wallet'


const EthData = () => {

  const wallet = useWallet()

  //this connects to the ganache localRPC running
  //  gives you access to those 10 generated accounts
  // let web3 = new Web3('ws://localhost:8545');


  //WONT WORK IF YOU DONT HAVE WEB3
  let web3 = new Web3(window.ethereum)

  const [accts, setAccts] = useState([]);

  useEffect(() => {
    (async () => {
      const as = await web3.eth.getAccounts();
      setAccts(as)
    })();
  }, []);




  return (
    <>
      <h1>Wallet</h1>
      {wallet.status === 'connected' ? (
        <div>
          <div>Account: {wallet.account}</div>
          <div>Balance: {wallet.balance}</div>
          <button onClick={() => wallet.reset()}>disconnect</button>
        </div>
      ) : (
        <div>
          Connect:
          <button onClick={() => wallet.connect()}>MetaMask</button>
          <button onClick={() => wallet.connect('frame')}>Frame</button>
          <button onClick={() => wallet.connect('portis')}>Portis</button>
        </div>
      )}

      {accts.map(a => {
        return <div>{a}</div>
      })}
    </>
  );

}


export default EthData;
