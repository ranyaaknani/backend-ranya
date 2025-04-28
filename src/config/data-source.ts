import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
import { User } from 'users/user.entity';

dotenv.config();

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '5432'),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [User],
  synchronize: false,
  migrations: ['migrations/*.ts'], // ou ./src/migrations/*.ts
});
