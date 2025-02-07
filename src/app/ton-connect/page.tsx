"use client";

import { Page } from "@/components/Page";
import { List, Text } from "@telegram-apps/telegram-ui";

import "./styles.css";
import { getAccessToken, usePrivy } from "@privy-io/react-auth";
import { useEffect, useState } from "react";

export default function ConnectWalletPage() {
  const [token, setToken] = useState<string | null>(null);

  const { login, authenticated } = usePrivy();

  useEffect(() => {
    getAccessToken().then((token) => {
      console.log("token:", token);
      setToken(token);
    });
  }, []);

  return (
    <Page>
      <List>
        {authenticated && <Text>Token: {token}</Text>}
        <button onClick={() => login({ loginMethods: ["telegram"] })}>
          Login with Telegram
        </button>
      </List>
    </Page>
  );
}
