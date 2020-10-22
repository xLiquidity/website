import React from 'react';
import './App.css';
import HomePage from './components/homepage'
import { useWallet, UseWalletProvider } from 'use-wallet'


// Wrap everything in <UseWalletProvider />
export default () => (
  <UseWalletProvider
    chainId={1}
    connectors={{
      // This is how connectors get configured
      portis: { dAppId: 'my-dapp-id-123-xyz' },
    }}
  >
    <HomePage />
  </UseWalletProvider>
)
