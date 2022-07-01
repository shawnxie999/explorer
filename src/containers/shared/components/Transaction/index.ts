import { OfferCreateTransaction as OfferCreate } from './OfferCreate';
import { SidechainCreateTransaction as SidechainCreate } from './SidechainCreate';
import { SidechainXChainTransferTransaction as SidechainXChainTransfer } from './SidechainXChainTransfer';
import { TransactionMapping } from './types';

export const transactionTypes: { [key: string]: TransactionMapping } = {
  OfferCreate,
  SidechainCreate,
  SidechainXChainTransfer,
};
