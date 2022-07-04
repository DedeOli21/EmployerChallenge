import { DocumentClient } from "aws-sdk/clients/dynamodb";
import Employer from "../../models/Employer";

class EmployerService {
  constructor(
    private readonly docClient: DocumentClient,
    private readonly tableName: string
  ) {}

  async getAllEmployer(): Promise<Employer[]> {
    const result = await this.docClient
      .scan({
        TableName: this.tableName,
      })
      .promise();

    return result.Items as Employer[];
  }

  async getEmployer(employerId: string): Promise<Employer> {
    const result = await this.docClient
      .get({
        TableName: this.tableName,
        Key: { employerId },
      })
      .promise();

    return result.Item as Employer;
  }

  async createEmployer(employer: Employer): Promise<Employer> {
    await this.docClient
      .put({
        TableName: this.tableName,
        Item: employer,
      })
      .promise();

    return employer;
  }

  async updateEmployer(employerId: string, partialEmployer: Partial<Employer>): Promise<Employer> {
    const updated = await this.docClient
      .update({
        TableName: this.tableName,
        Key: { employerId },
        UpdateExpression:
          "set #name = :name, age = :age, occupation = :occupation",
        ExpressionAttributeNames: {
          "#name": "name",
        },
        ExpressionAttributeValues: {
          ":name": partialEmployer.name,
          ":age": partialEmployer.age,
          ":occupation": partialEmployer.occupation,
        },
        ReturnValues: "ALL_NEW",
      })
      .promise();

    return updated.Attributes as Employer;
  }

  async deleteEmployer(employerId: string) {
    return this.docClient
      .delete({
        TableName: this.tableName,
        Key: { employerId },
      })
      .promise();
  }
}

export default EmployerService;
