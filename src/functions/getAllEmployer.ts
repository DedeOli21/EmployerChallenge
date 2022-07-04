import {
  APIGatewayEvent,
  Handler,
  Context,
  APIGatewayProxyResult,
} from "aws-lambda";
import middify from "../core/middify";
import formatJSONResponse from "../core/formatJsonResponse";
import employerService from "../database/services";

export const handler: Handler = middify(
  async (
    event: APIGatewayEvent,
    context: Context
  ): Promise<APIGatewayProxyResult> => {
    try {
      const result = await employerService.getAllEmployer();

      return formatJSONResponse(200, result);
    } catch (err) {
      return formatJSONResponse(400, err);
    }
  }
);
