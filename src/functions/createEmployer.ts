import {
  APIGatewayEvent,
  Handler,
  Context,
  APIGatewayProxyResult,
} from "aws-lambda";
import * as uuid from "uuid";
import middify from "../core/middify";
import formatJSONResponse from "../core/formatJsonResponse";
import employerService from "../database/services";
import CreateEmployer from "../dtos/createEmployerDto";

export const handler: Handler = middify(
  async (
    event: APIGatewayEvent & CreateEmployer,
    context: Context
  ): Promise<APIGatewayProxyResult> => {
    const { age, name, occupation } = event.body;
    
    if (!name || !age || !occupation) return formatJSONResponse(400, "Missing required fields");
    
    try {
      const employerId: string = uuid.v4();
      const employer = await employerService.createEmployer({
        employerId,
        age,
        name,
        occupation
      });

      return formatJSONResponse(201, employer);
    } catch (err) {
      return formatJSONResponse(400, err);
    }
  }
);
