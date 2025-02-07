"use client";

import { Page } from "@/components/Page";
import { List, Text } from "@telegram-apps/telegram-ui";

import "./styles.css";
import { getAccessToken } from "@privy-io/react-auth";
import { useEffect, useState } from "react";

export default function ConnectWalletPage() {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    getAccessToken().then((token) => {
      console.log("token:", token);
      setToken(token);
    });
  }, []);

  return (
    <Page>
      <List>
        <Text>Token: {token}</Text>
      </List>
    </Page>
  );
}
