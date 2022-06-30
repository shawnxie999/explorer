import React from 'react';
import { useTranslation } from 'react-i18next';
import Account from '../../Account';
import { TransactionSimpleComponent, TransactionSimpleProps } from '../types';
import SimpleRow from '../SimpleRow';

const SidechainCreateSimple: TransactionSimpleComponent = (props: TransactionSimpleProps) => {
  const { t } = useTranslation();
  const { data } = props;
  const { account, sourceDoor, sourceIssue, destinationDoor, destinationIssue } = data.instructions;

  return (
    <>
      <SimpleRow label={t('from account')}>
        <Account account={account} />
      </SimpleRow>
      <SimpleRow label={t('source chain door')}>
        <Account account={sourceDoor} />
      </SimpleRow>
      <SimpleRow label={t('source chain issue')}>{sourceIssue}</SimpleRow>
      <SimpleRow label={t('destination chain door')}>
        <Account account={destinationDoor} />
      </SimpleRow>
      <SimpleRow label={t('destination chain issue')}>{destinationIssue}</SimpleRow>
    </>
  );
};
export default SidechainCreateSimple;
