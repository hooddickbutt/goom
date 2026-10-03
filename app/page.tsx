'use client'

import { useMemo, useState } from 'react'
import { ArrowDown, Check, ChevronDown, CircleDollarSign, X } from 'lucide-react'

const tokens = [
  ['USDC', 'USD Coin', 'usdc'], ['USDT', 'Tether', 'usdt'], ['PYUSD', 'PayPal USD', 'pyusd'], ['DAI', 'Dai', 'dai'],
  ['BTC', 'Bitcoin', 'btc'], ['ETH', 'Ethereum', 'eth'], ['SOL', 'Solana', 'sol'], ['BNB', 'BNB', 'bnb'],
  ['XRP', 'XRP', 'xrp'], ['TRX', 'TRON', 'trx'], ['TON', 'Toncoin', 'ton'], ['DOGE', 'Dogecoin', 'doge'],
]

export default function Page() {
  const [amount, setAmount] = useState('1000')
  const numericAmount = Number(amount.replace(/[^0-9.]/g, '')) || 0
  const received = useMemo(() => (numericAmount * 0.9795).toFixed(2), [numericAmount])

  return (
    <main className="revenue-page">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <header className="topbar">
        <a className="brand" href="#home" aria-label="Revenue home">
          <span className="brand-mark"><CircleDollarSign size={23} strokeWidth={1.8} /></span>
          <span>Revenue</span>
        </a>
        <nav className="nav-links" aria-label="Primary navigation">
          <a className="active" href="#home">Home</a>
          <a href="#swap">Swap Now</a>
          <a href="#capital-flow">Capital Flow</a>
          <a href="#analytics">Analytics</a>
          <a href="#docs">Docs</a>
        </nav>
        <button className="x-button" type="button"><span>Continue with</span><X size={17} /></button>
      </header>

      <section id="home" className="hero">
        <div className="hero-copy">
          <h1>Cash out <span className="x-word">X</span> Money<br />to crypto.<br /><span className="muted-heading">No KYC.</span></h1>
          <p>Sign in with X, send dollars to <strong>@RevenuePay</strong> on X Money, and get USDC, USDT, SOL or ETH in your own wallet. Every order is tracked from payment to payout.</p>
          <button className="primary-button" type="button">Continue with <X size={18} /></button>
        </div>
        <div className="hero-art" aria-label="Payment and crypto payout preview">
          <div className="ring" />
          <div className="payment-card"><span>Pay on X Money</span><b><CircleDollarSign size={27} /> $20.00</b><small>to @RevenuePay</small></div>
          <div className="receipt-card">
            <div className="receipt-top"><b>RV-7K2Q9M</b><span>Completed</span></div>
            <div className="progress"><i /><i /><i /></div>
            <div className="receipt-row"><small>You sent</small><b>$20.00 <CircleDollarSign size={19} /></b></div>
            <div className="receipt-row blue"><small>You received</small><b>19.10 USDC <span className="coin-dot">$</span></b></div>
            <div className="receipt-bottom"><span>to 7eCd...CFLtV</span><b>Solana</b></div>
          </div>
          <div className="notification"><span className="check"><Check size={14} /></span><div><b>Coins sent</b><small>tx link on your order</small></div></div>
          <span className="orb orb-a" /><span className="orb orb-b" /><span className="orb orb-c" />
        </div>
      </section>

      <section id="swap" className="swap-section">
        <div className="section-heading"><h2>Swap X Money<br />to crypto.</h2><p>Pick a coin and a network, paste your wallet and pay <strong>@RevenuePay</strong>. Sign in with X to unlock the bridge.</p></div>
        <div className="swap-grid">
          <div className="payout-preview"><div className="preview-title">Payout notifications</div>{['$10,000', '$5,000', '$2,500', '$7,500', '$1,200'].map((value, index) => <p key={value}>Revenue Payments sent you {value} for <b>“S4MPL3”</b> <span>· {index === 0 ? '18s' : `${index * 62 + 2}s`}</span></p>)}</div>
          <div className="swap-card">
            <div className="locked"><span><X size={14} /> Sign in to unlock</span><b>Up to $20,000</b></div>
            <div className="swap-title"><h3>Swap</h3><span>Fee 2.05%</span></div>
            <label>You send <span>Max $20,000</span></label>
            <div className="input-row"><span>$</span><input value={amount} onChange={(event) => setAmount(event.target.value)} inputMode="decimal" aria-label="Amount to send" /><strong>X Money <small>USD</small></strong></div>
            <div className="down-arrow"><ArrowDown size={16} /></div>
            <label>You receive · estimated <span>1 USDC = $1.00</span></label>
            <div className="input-row"><input value={received} readOnly aria-label="Estimated amount received" /><button type="button">USDC <small>Solana</small><ChevronDown size={15} /></button></div>
            <label>Your Solana address</label><input className="wallet-input" placeholder="Paste address" aria-label="Solana address" disabled />
          </div>
        </div>
      </section>

      <section className="token-strip" aria-label="Supported tokens">{tokens.concat(tokens).map(([symbol, name, slug], index) => <div className="token" key={`${symbol}-${index}`}><span className={`token-icon token-${slug}`}><img src={`https://cdn.jsdelivr.net/gh/ErikThiart/cryptocurrency-icons@master/128/${slug}.png`} alt="" /></span><span><b>{symbol}</b><small>{name}</small></span></div>)}</section>
    </main>
  )
}
