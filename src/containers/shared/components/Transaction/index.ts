import { OfferCreateTransaction as OfferCreate } from './OfferCreate';
import { SidechainCreateTransaction as SidechainCreate } from './SidechainCreate';
import { SidechainXChainSeqNumCreateTransaction as SidechainXChainSeqNumCreate } from './SidechainXChainSeqNumCreate';
import { TransactionMapping } from './types';

export const transactionTypes: { [key: string]: TransactionMapping } = {
  OfferCreate,
  SidechainCreate,
  SidechainXChainSeqNumCreate,
};
