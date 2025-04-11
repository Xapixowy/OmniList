import { tryCatch } from '@/functions/try-catch';
import { Account, AppwriteException, Client, ID, Models } from 'appwrite';

export class AuthClient {
  static #instance: AuthClient | undefined;

  private readonly projectId = '67f3f120003e5f1d01bc';
  private readonly endpoint = 'http://localhost:8080/v1';

  private readonly client = new Client();
  private readonly account: Account;

  private constructor() {
    this.client.setEndpoint(this.endpoint).setProject(this.projectId);
    this.account = new Account(this.client);
  }

  static getInstance(): AuthClient {
    if (!this.#instance) {
      this.#instance = new AuthClient();
    }

    return this.#instance;
  }

  async register(email: string, password: string, name?: string): Promise<Models.User<Models.Preferences> | null> {
    const promise = await tryCatch<Models.User<Models.Preferences>, AppwriteException>(
      this.account.create(ID.unique(), email, password, name),
    );

    console.log(promise);

    if (promise.error) {
      return null;
    }

    return promise.data;
  }

  async login(email: string, password: string): Promise<Models.Session | null> {
    const promise = await tryCatch<Models.Session, AppwriteException>(
      this.account.createEmailPasswordSession(email, password),
    );

    console.log(promise, await this.account.get());

    if (promise.error) {
      return null;
    }

    return promise.data;
  }
}
