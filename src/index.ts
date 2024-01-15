import { S3 } from 'aws-sdk';
import { APIGatewayProxyHandler } from 'aws-lambda';
import { AWSWrapped } from './instrumentations';

const s3 = new AWSWrapped.S3();

export const handler: APIGatewayProxyHandler = async (event) => {
  const bucketName = 'lambda-x-ray';
  const fileName = 'test.txt';
  const fileContent = 'Hello, World!';

  try {
    await s3.putObject({
      Bucket: bucketName,
      Key: fileName,
      Body: fileContent,
    }).promise();

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'File uploaded successfully.' }),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'File upload failed.' }),
    };
  }
};
