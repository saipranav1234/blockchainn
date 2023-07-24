// Dashboard.js
import styles from '@/styles/dashboard.module.css'
import { useState } from 'react';
import { useRouter } from 'next/router';
import SignNav from '@/signNav';
import { MdSpaceDashboard } from 'react-icons/md'
import { BiSolidWalletAlt } from 'react-icons/bi'
import { BiSolidMessageSquareDetail } from 'react-icons/bi'
import { BiTransfer } from 'react-icons/bi'
import { MdManageAccounts } from 'react-icons/md'
import { BsCurrencyBitcoin } from 'react-icons/bs'
import bitline from '@/img/bitline.png'
import Image from 'next/image';

export default function Dashboard () {
  return (
    <div className={styles.dashboard}>
      <SignNav />
      <div className={styles.dashboardd}>
        <div className={styles.sidebar}>
          <div className={styles.side}>
            <MdSpaceDashboard className={styles.icon} />
            <p className={styles.para}>Dashboard</p>
          </div>
          <div className={styles.side}>
            <BiSolidWalletAlt className={styles.icon} />
            <p className={styles.para}>Wallet</p>
          </div>
          <div className={styles.side}>
            <BiSolidMessageSquareDetail className={styles.icon} />
            <p className={styles.para}>Messages</p>
          </div>
          <div className={styles.side}>
            <BiTransfer className={styles.icon} />
            <p className={styles.para}>Trade</p>
          </div>
          <div className={styles.side}>
            <MdManageAccounts className={styles.icon} />
            <p className={styles.para}>Account setting</p>
          </div>
        </div>
        <div className={styles.rightside}>
          <div className={styles.wallet}>
            <p className={styles.p}>WALLETS</p>
            <div className={styles.boxes}>
              <div className={styles.box}>
                <BsCurrencyBitcoin className={styles.ic} />
                <div className={styles.bigside}>
                  <div className={styles.smallside}>
                    <p className={styles.p}>1.967</p>
                    <p className={styles.pp}>BTC</p>
                  </div>
                  <div className={styles.smallside}>
                    <Image src={bitline} className={styles.p} />
                    <p className={styles.pp}>12.5%</p>
                  </div>
                </div>
              </div>
              <div className={styles.boxx}>
                <BsCurrencyBitcoin className={styles.ic} />
                <div className={styles.bigside}>
                  <div className={styles.smallside}>
                    <p className={styles.p}>1.967</p>
                    <p className={styles.pp}>BTC</p>
                  </div>
                  <div className={styles.smallside}>
                    <Image src={bitline} className={styles.p} />
                    <p className={styles.pp}>12.5%</p>
                  </div>
                </div>
              </div>
              <div className={styles.boxx}>
                <BsCurrencyBitcoin className={styles.ic} />
                <div className={styles.bigside}>
                  <div className={styles.smallside}>
                    <p className={styles.p}>1.967</p>
                    <p className={styles.pp}>BTC</p>
                  </div>
                  <div className={styles.smallside}>
                    <Image src={bitline} className={styles.p} />
                    <p className={styles.pp}>12.5%</p>
                  </div>
                </div>
              </div>
              <div className={styles.boxx}>
                <BsCurrencyBitcoin className={styles.ic} />
                <div className={styles.bigside}>
                  <div className={styles.smallside}>
                    <p className={styles.p}>1.967</p>
                    <p className={styles.pp}>BTC</p>
                  </div>
                  <div className={styles.smallside}>
                    <Image src={bitline} className={styles.p} />
                    <p className={styles.pp}>12.5%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
