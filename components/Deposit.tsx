'use client';

import styles from '@components/Deposit.module.scss';

import * as React from 'react';
import * as Icon from '@components/Icon';

export function Deposit() {
  const [tab, setTab] = React.useState<'deposit' | 'withdraw'>('deposit');
  
  return (
    <div className={styles.root}>
      <div className={styles.tabs}>
        <button className={`${styles.tabButton} ${tab === 'deposit' ? styles.active : ''}`} onClick={() => setTab('deposit')}>
          Deposit
        </button>
        <button className={`${styles.tabButton} ${tab === 'withdraw' ? styles.active : ''}`} onClick={() => setTab('withdraw')}>
          Withdraw
        </button>
      </div>
      <div className={styles.tokenInfosContainer}>
        <div className={styles.tokenContainer}>
          <Icon.USDC fill="var(--color-blue-50)" />
          <div className={styles.tokenInfos}>
            <div className={styles.tokenName}>USDC</div>
            <div className={styles.chainName}>on Base</div>
          </div>
        </div>
        <div className={styles.yieldInfosContainer}>
          <div className={styles.yieldInfos}>
            <span className={styles.yieldInfosLabel}>Supply APY</span>
            <div className={styles.apy}>
              <Icon.Info width="16" height="16" fill="var(--color-gray-40)" />
              <span className={styles.apyValue}>7.8% APY</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.depositAmountContainer}>
          <div className={styles.depositAmountInfos}>
            <span className={styles.depositLabel}>Amount</span>
            <input className={styles.depositAmountInput} type="text" placeholder="0.00" />
            <span className={styles.depositLabel}>Available to Supply: 0 USDC</span>
          </div>
          <button className={styles.maxButton}>MAX</button>
        </div>
        <div className={styles.depositButtonContainer}>
          <button className={`${styles.depositButton} ${styles.disabled}`}>Supply</button>
        </div>
      </div>
    </div>
  );
}
