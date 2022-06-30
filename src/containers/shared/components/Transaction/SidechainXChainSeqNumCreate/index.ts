import { TransactionMapping } from '../types';

import SidechainXChainSeqNumCreateSimple from './SidechainXChainSeqNumCreateSimple';
import sidechainXChainSeqNumCreateMapper from './sidechainXChainSeqNumCreateMapper';

export const SidechainXChainSeqNumCreateTransaction: TransactionMapping = {
  Description: null,
  Simple: SidechainXChainSeqNumCreateSimple,
  TableDetail: null,
  mapper: sidechainXChainSeqNumCreateMapper,
};
