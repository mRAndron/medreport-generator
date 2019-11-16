import app from 'firebase/app';
import 'firebase/database';

import { config } from './config';

class Firebase {
  private static instance: Firebase;
  private db: app.database.Database;

  private constructor() {
    app.initializeApp(config);

    this.db = app.database();
  }

  public static getInstance(): Firebase {
    if (!Firebase.instance) {
      Firebase.instance = new Firebase();
    }
    return Firebase.instance;
  }
}

export { Firebase };