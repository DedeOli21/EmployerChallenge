import {
  APIGatewayEvent,
  Handler,
  APIGatewayProxyEvent,
} from "aws-lambda";
import middify from "../core/middify";
import formatJSONResponse from "../core/formatJsonResponse";
import employerService from "../database/services";

export const handler: Handler = middify(
  async (
    event: APIGatewayEvent,
  ): Promise<APIGatewayProxyEvent> => {
    const employerId: string = event.pathParameters.employerId;
    try {
      const result = await employerService.getEmployer(employerId);

      return formatJSONResponse(200, result);
    } catch (err) {
      return formatJSONResponse(400, err);
    }
  }
);
