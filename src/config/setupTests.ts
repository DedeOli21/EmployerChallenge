import * as dynamoose from 'dynamoose'

process.env.EMPLOYER_TABLE = 'employerNewChallenge-dev'
dynamoose.aws.sdk.config.update({
  region: 'us-east-1'
})
dynamoose.aws.ddb.local()