"use client";

import { Page } from "@/components/Page";
import { List, Text } from "@telegram-apps/telegram-ui";

import "./styles.css";
import { getAccessToken, usePrivy } from "@privy-io/react-auth";
import { useEffect, useState } from "react";

export default function ConnectWalletPage() {
  const [token, setToken] = useState<string | null>(null);

  const { authenticated, user } = usePrivy();

  useEffect(() => {
    getAccessToken().then((token) => {
      console.log("token:", token);
      setToken(token);
    });
  }, []);

  return (
    <Page>
      <List>
        {authenticated && (
          <div>
            <Text>Access Token: {token}</Text>
            <Text>Telegram ID: {user?.telegram?.telegramUserId}</Text>
            <Text>Telegram Username: {user?.telegram?.username}</Text>
          </div>
        )}
      </List>
    </Page>
  );
}
