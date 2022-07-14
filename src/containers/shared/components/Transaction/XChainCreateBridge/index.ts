import { TransactionMapping } from '../types';

import XChainCreateBridgeSimple from './XChainCreateBridgeSimple';
import XChainCreateBridgeMapper from './xchainCreateBridgeMapper';

export const XChainCreateBridgeTransaction: TransactionMapping = {
  Description: null,
  Simple: XChainCreateBridgeSimple,
  TableDetail: null,
  mapper: XChainCreateBridgeMapper,
};
