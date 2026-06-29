import { open } from 'sqlite';
import sqlite3 from 'sqlite3';

const db = await open({
    filename: './../login.db',
    driver: sqlite3.Database
});