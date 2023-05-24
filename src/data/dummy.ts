type ModalDefinition = {
  topic: string;
  definition: string;
};

export const subTopicInfos: ModalDefinition[] = [
  {
    topic: "Software Application",
    definition: `A software application, commonly known as an "app" is a computer program that is designed to perform specific functions or provide specific services to users. It can be installed and run on various devices, such as computers, smartphones, and tablets, to accomplish tasks like communication, productivity, entertainment, or accessing specific services. Apps can be developed for different operating systems, such as Windows, iOS, or Android.`,
  },
  {
    topic: "Decentralized Network",
    definition: `A decentralized network refers to a distributed system where the control and decision-making authority are spread across multiple nodes or participants, rather than being concentrated in a central authority. These networks operate without a single point of failure and rely on consensus mechanisms to ensure the reliability, security, and integrity of data and transactions. Examples include blockchain networks and peer-to-peer file-sharing systems.`,
  },
  {
    topic: "Blockchain",
    definition: `Blockchain is a decentralized and immutable digital ledger technology that enables the secure and transparent recording of transactions across multiple participants in a network. It consists of a chain of blocks, where each block contains a list of validated transactions. The blocks are linked together using cryptographic techniques, creating a permanent and tamper-resistant record. Blockchain has applications in various fields, including finance, supply chain management, healthcare, and more.`,
  },
  {
    topic: "Peer-to-peer (P2P) Network",
    definition: `A peer-to-peer (P2P) network is a decentralized network architecture where participants, called peers, communicate and interact directly with each other without the need for a central server or authority. In a P2P network, each peer can act as both a client and a server, sharing resources and services with other peers in the network. This allows for the direct exchange of information, files, or resources between peers, enabling collaboration, file sharing, and decentralized communication. Examples of P2P networks include BitTorrent for file sharing and blockchain networks for decentralized transactions and data storage.`,
  },
  {
    topic: "Smart contracts",
    definition: `Smart contracts are self-executing contracts with the terms and conditions directly written into code. They run on a blockchain platform, such as Ethereum, and automatically execute predefined actions when specific conditions are met. Smart contracts eliminate the need for intermediaries and enable trustless, transparent, and tamper-resistant transactions. They can be used for various applications, including financial agreements, supply chain management, voting systems, and more, ensuring efficiency, accuracy, and security in digital transactions and interactions.`,
  },
];
