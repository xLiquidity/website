import React, { useState } from 'react';
import { Connectors } from 'web3-react'
import Web3 from 'web3';
const { InjectedConnector, NetworkOnlyConnector } = Connectors

const MetaMask = new InjectedConnector({ supportedNetworks: [1, 4] })

const Infura = new NetworkOnlyConnector({
  providerURL: 'http://127.0.0.1:8545'
})

const connectors = { MetaMask, Infura }



const EthData = () => {

  const [accts, setAccts] = useState([]);

  let web3 = new Web3('ws://localhost:8545');
  console.log(connectors)

  const getAccts = async () => {
    const as = await web3.eth.getAccounts();
    setAccts(as)
  }
  getAccts()
  return (
    accts.map(a => {
      return <div>{a}</div>
    })
  );

}


export default EthData;
