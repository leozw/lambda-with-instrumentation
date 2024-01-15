"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AWSWrapped = void 0;
const aws_sdk_1 = __importDefault(require("aws-sdk"));
const aws_xray_sdk_1 = __importDefault(require("aws-xray-sdk"));
const AWSWrapped = aws_xray_sdk_1.default.captureAWS(aws_sdk_1.default);
exports.AWSWrapped = AWSWrapped;
