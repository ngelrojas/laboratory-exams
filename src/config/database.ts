import {ConnectionOptions} from 'typeorm';
import {Laboratory, Exam} from '../models';

const config: ConnectionOptions = {
    type: "postgres",
    host: process.env.POSTGRES_HOST || "localhost",
    port: Number(process.env.POSTGRES_PORT) || 5432,
    username: process.env.POSTGRES_USER || "postgres",
    password: process.env.POSTGRES_PASSWORD || "labex2021",
    database: process.env.POSTGRES_DB || "labexdb",
    entities: [Laboratory, Exam],
    synchronize: true
}

export default config;
