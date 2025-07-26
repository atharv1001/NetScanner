import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('myapp.db');

useEffect(() => {
  db.transaction(tx => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT, password TEXT);'
    );
  });
}, []);

const handleLogin = () => {
  db.transaction(tx => {
    tx.executeSql(
      'INSERT INTO users (username,password) VALUES (?,?)',
      [username, password],
      () => console.log('✅ User inserted'),
      (_, error) => { console.log('❌', error); return true; }
    );
  });
};
 