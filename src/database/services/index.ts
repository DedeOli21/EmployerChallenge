import createDynamoDBClient from "../db";
import EmployerService from "./employerService";

const employerService = new EmployerService(createDynamoDBClient(), "employerNewChallenge-dev");

export default employerService;
