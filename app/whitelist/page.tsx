"use client"

import { darkTheme, getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import {
    QueryClientProvider,
    QueryClient,
} from "@tanstack/react-query";
import { mainnet } from "viem/chains";
import { trustWallet, metaMaskWallet, rainbowWallet, walletConnectWallet, coinbaseWallet } from "@rainbow-me/rainbowkit/wallets";

import "@rainbow-me/rainbowkit/styles.css";

const config = getDefaultConfig({
    appName: "FATMAN",
    projectId: "9dc0750c4b599b1dd9aeb9413bc76f94",
    chains: [mainnet],
    wallets: [
        {
            groupName: "Recommended",
            wallets: [trustWallet, metaMaskWallet, rainbowWallet, walletConnectWallet, coinbaseWallet],
        }
    ],
    ssr: true
});

const customTheme = darkTheme({
    accentColor: "#fbbf24",       // <-- changes ConnectButton background
    accentColorForeground: "white", // <-- text/icon color
    borderRadius: "large",
});

const queryClient = new QueryClient();

import Whitelist from "@/components/Whitelist"

const WhitelistPage = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <WagmiProvider config={config}>
                <RainbowKitProvider theme={customTheme}>
                    <Whitelist />
                </RainbowKitProvider>
            </WagmiProvider>
        </QueryClientProvider>
    )
}

export default WhitelistPage;