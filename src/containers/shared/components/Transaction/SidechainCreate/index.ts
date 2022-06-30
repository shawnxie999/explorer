import { TransactionMapping } from '../types';

import SidechainCreateSimple from './SidechainCreateSimple';
import sidechainCreateMapper from './sidechainCreateMapper';

export const SidechainCreateTransaction: TransactionMapping = {
  Description: null,
  Simple: SidechainCreateSimple,
  TableDetail: null,
  mapper: sidechainCreateMapper,
};
