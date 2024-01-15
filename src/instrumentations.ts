import AWS from 'aws-sdk';
import AWSXRay from 'aws-xray-sdk';

const AWSWrapped = AWSXRay.captureAWS(AWS);

export { AWSWrapped };
