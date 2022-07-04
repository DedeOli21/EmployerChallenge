import {
  APIGatewayEvent,
  Handler,
  Context,
  APIGatewayProxyResult,
} from "aws-lambda";
import middify from "../core/middify";
import formatJSONResponse from "../core/formatJsonResponse";
import employerService from "../database/services";
import UpdateEmployer from "../dtos/updateEmployerDto";

export const handler: Handler = middify(
  async (
    event: APIGatewayEvent & UpdateEmployer,
    context: Context
  ): Promise<APIGatewayProxyResult> => {
    const employerId: string = event.pathParameters.employerId;
    const { body } = event;
    try {
      const result = await employerService.updateEmployer(employerId, body);

      return formatJSONResponse(200, result);
    } catch (err) {
      return formatJSONResponse(400, err);
    }
  }
);
