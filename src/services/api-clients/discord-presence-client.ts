import { DiscordPresenceData, UserPresence } from '@/types/responses/discord-presence/user-presence';
import { UserPresenceWebSocket } from '@/types/responses/discord-presence/user-presence-web-socket';
import axios, { AxiosResponse } from 'axios';

export class DiscordPresenceClient {
  static #instance: DiscordPresenceClient | undefined;

  private readonly apiUrl: string = 'https://api.lanyard.rest/v1';

  private constructor() {}

  static getInstance(): DiscordPresenceClient {
    if (!this.#instance) {
      this.#instance = new DiscordPresenceClient();
    }

    return this.#instance;
  }

  async userPresence(userId: string): Promise<UserPresence | null> {
    try {
      const response: AxiosResponse<UserPresence> = await axios.get(`${this.apiUrl}/users/${userId}`);

      if (response.status !== 200) {
        return null;
      }

      return response.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        console.error(error.message);
      }

      return null;
    }
  }

  userPresenceWebSocket(userId: string, callback: (data: DiscordPresenceData | null) => void): () => void {
    const ws = new WebSocket(`wss://api.lanyard.rest/socket/`);

    ws.onopen = () => {
      ws.send(JSON.stringify({ op: 2, d: { subscribe_to_id: userId } }));
    };

    ws.onmessage = (event: MessageEvent) => {
      const data: UserPresenceWebSocket = JSON.parse(event.data);

      if (['INIT_STATE', 'PRESENCE_UPDATE'].includes(data.t)) {
        callback(data.d);
      }
    };

    ws.onerror = () => {
      callback(null);
    };

    return () => {
      if (ws.readyState === WebSocket.OPEN || ws.readyState === WebSocket.CONNECTING) {
        ws.close();
      }
    };
  }
}
