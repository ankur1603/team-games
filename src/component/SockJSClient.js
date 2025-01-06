import SockJS from "sockjs-client";
import { Client } from "@stomp/stompjs";

let clientInstance = null;
export const SockJSClient = (playerState) => {
    let playerName = playerState.name;
    let teamName = playerState.teamName;
    const backend_url = process.env.BACKEND_URL;
    if (!clientInstance) {
        clientInstance = new Client({
          brokerURL: null, // Use null for SockJS
          webSocketFactory: () => new SockJS("https://team-games-backend-92069822177.asia-southeast1.run.app/team-games"), // Replace with your SockJS URL
          reconnectDelay: 5000,
          heartbeatIncoming: 15000,
          connectHeaders: {
            'playerName': playerName,
            'teamName': teamName
          },
          disconnectHeaders: {
            'playerName': playerName,
            'teamName': teamName
          },
          onConnect: () => {
            console.log("WebSocket connected");
          },
          onDisconnect: () => {
            console.log("WebSocket disconnected");
          },
          //debug: (msg) => console.log("WebSocket Debug:", msg),
          onStompError: (frame) => {
            console.error("Broker error:", frame);
          }
        });
      }
      return clientInstance;
    };