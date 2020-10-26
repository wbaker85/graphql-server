import { ConsoleLogger } from '@cdm-logger/server';
import * as Logger from 'bunyan';

const settings = {
  level: 'info',
  mode: 'short',
};

export default ConsoleLogger.create('test app', settings);
