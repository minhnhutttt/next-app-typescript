"use client";
import FaqItem from "./faqItem";
import { FaqItemPropsType } from "./faqItem";
import useScrollAnimations from "@/hooks/useScrollAnimations";

const faqData: FaqItemPropsType[] = [
  {
    id: "1",
    question: "What is a blockchain wallet?",
    answer: (
      <>
        blockchain wallet is a digital wallet used for managing and storing cryptocurrencies (such as Bitcoin, Ethereum, etc.) and related digital assets. It allows users to securely store, send, and receive cryptocurrencies, and also interact with decentralized applications (dApps). <br />
        The main functions of a blockchain wallet include: <br /><br />
        <ul className="list-decimal pl-6">
          <li>Storing private and public keys: The private key is used to sign transactions and authorize the transfer of funds, while the public key is used to generate the user's wallet address.</li>
          <li>Sending and receiving cryptocurrencies: Users can send and receive digital currencies through wallet addresses.</li>
          <li>Checking balances and transaction history: The wallet can display the user's cryptocurrency balance and all past transactions.</li>
        </ul>
        <br />
        Blockchain wallets can be categorized into different types, such as hardware wallets (cold wallets), software wallets (hot wallets), and web-based wallets, depending on how private keys are stored and the level of security.
      </>
    ),
  },
  {
    id: "2",
    question: "What is the difference between a hardware wallet and a software wallet?",
    answer: (
      <>
        Hardware wallets are wallets that store private keys on a physical device (e.g. USB) and are used to store and transact cryptocurrency.Software wallets are wallets provided in the form of a mobile application, desktop application, or web-based application.
      </>
    ),
  },
  {
    id: "3",
    question: "What is a non-custodial wallet?",
    answer: (
      <>
        non-custodial wallet is a wallet that allows users to have complete control over their own assets in the custody of cryptocurrency. This means that users must own and keep their own private keys. <br />
        The user retains complete control over the wallet's assets because he or she manages the key himself or herself.
      </>
    ),
  },
  {
    id: "4",
    question: "What are public and private keys?",
    answer: (
      <>
        public key is a unique address that serves as an identifier on the blockchain. It is used to identify a particular wallet on the blockchain. <br />
        The private key is the important and confidential information that controls a wallet on the blockchain and is used by the owner to manipulate the funds in that wallet. <br />
        The private key is represented by a long string of randomly generated numbers or characters and is used to identify the owner of a blockchain wallet and to prove ownership of the funds in that wallet.
      </>
    ),
  },
  {
    id: "5",
    question: "What is a recovery phrase?",
    answer: (
      <>
        The Recovery Phrase consists of a series of words (usually 12 or 24 words) generated when the wallet is created. It is used in place of the private key. The Recovery Phrase is used when a user restores a wallet or transfers a wallet to a new device.
      </>
    ),
  },
  {
    id: "6",
    question: "What are network fees?",
    answer: (
      <>
        Usually, a network transaction fee, also known as a network fee, is charged each time you send cryptocurrency from your address to another address. If you trade on an exchange, you will also be charged a fee for each buy or sell transaction. The actual fee you pay depends on the network you use.
      </>
    ),
  },
  {
    id: "7",
    question: "What is a wallet address?",
    answer: (
      <>
        wallet address is an address for storing, sending, and receiving cryptocurrency, usually consisting of a long string of characters represented by a combination of letters and numbers. The wallet address is a unique identifier and is used for transactions and transfers on cryptocurrency networks.
      </>
    ),
  },
  {
    id: "8",
    question: "What is the MERCURY Wallet?",
    answer: (
      <>
        MERCURY VAULT is a mobile wallet that supports DIVER (DIV), DRC-20 tokens, and NFTs (DRC-721, DRC-1155). It can be used for storing, sending, and receiving crypto assets, managing tokens, and more. Additionally, MERCURY VAULT is a decentralized (non-custodial) wallet, allowing users to have full control over their assets.
      </>
    ),
  },
  {
    id: "9",
    question: "Which tokens does MERCURY Wallet support?",
    answer: (
      <>
        MERCURY VAULT supports DIV, DIVER's native token, DRC-20 token, and ETH. It also supports DIVER's NFT token such as DRC-721, DRC-1155 token.
      </>
    ),
  },
  {
    id: "10",
    question: "What types of NFTs are supported?",
    answer: (
      <>
        Supports a range of NFT media types including images, audio files, video files 3D models, and document(pdf).
      </>
    ),
  },
  {
    id: "11",
    question: "Are hardware wallets supported?",
    answer: (
      <>
        Currently not supported.
      </>
    ),
  },
  {
    id: "12",
    question: "What is DIVER's network fees?",
    answer: (
      <>
        There are no network charges for sending and receiving DIVER tokens within the MERCURY Wallet.
      </>
    ),
  },
  {
    id: "13",
    question: "What is slippage?",
    answer: (
      <>
        Slippage is the difference between the expected price of a trade and the price at which the trade is executed. Slippage occurs most often when orders are large or during periods of high volatility.
      </>
    ),
  },
  {
    id: "14",
    question: "I forgot my password. How do I restore my wallet?",
    answer: (
      <>
        You can reset it by re-importing your Recovery Phrase and starting over. Once the Recovery Phrase is successfully imported, your wallet will be restored to its normal state.
      </>
    ),
  },
  {
    id: "15",
    question: "If I lose my MERCURY Wallet, what happens to the crypto assets stored in the wallet?",
    answer: (
      <>
        Crypto assets stored in a lost wallet cannot be accessed without the private key. Therefore, when creating a wallet, it is important to create a backup of your private key and store it in a secure location. If a backup is created, the private key can be restored if the wallet is lost or damaged.
      </>
    ),
  },
  {
    id: "16",
    question: "I sent tokens to the wrong wallet address",
    answer: (
      <>
        Unless you know the owner of the wallet, tokens sent to the wrong wallet address are most likely lost forever. The MERCURY team has no way to access the funds in anyone's wallet and therefore has no way to reverse a transaction. Please be careful and always double check that you are sending the correct token to the correct address.
      </>
    ),
  },
];

export default function FAQ() {
  const ref = useScrollAnimations();
  return (
    <section ref={ref} id="faq" className="px-5 pb-12 pt-14 md:pb-[90px] md:pt-[130px]">
      <div className="mx-auto w-full max-w-[920px]">
        <h4 className="text-center md:text-[64px] text-[32px] font-bold tracking-[0.2em]">FAQ</h4>
        <div className="mx-auto mt-5 w-full space-y-[10px] md:mt-[70px]">
          {faqData.map(({ id, question, answer }) => (
            <FaqItem key={id} id={id} question={question} answer={answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
