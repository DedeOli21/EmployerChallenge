import * as dynamose from 'dynamoose'
import { Document } from 'dynamoose/dist/Document'

export interface Employer {
  employerId: string;
  name: string;
  age: string;
  occupation: string;
}

export interface EmployerModel extends Document {
  employerId: string;
  name: string;
  age: string;
  occupation: string;
}

const EmployerSchema = new dynamose.Schema({
  id: {
    hashKey: true,
    type: String
  },
  nome: {
    type: String,
    required: true
  },
  idade: {
    type: Number,
    required: true
  },
  cargo: {
    type: String,
    required: true,
    default: 'Não informado'
  }
}, {
  saveUnknown: true,
  timestamps: true
})
const createTable = process.env.NODE_ENV === 'test'
export const employerModel = dynamose.model<EmployerModel>(process.env.EMPLOYER_TABLE, EmployerSchema, { create: createTable })
