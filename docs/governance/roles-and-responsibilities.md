---
sidebar_position: 2
---

# Roles and Responsibilities

:::info

This page is currently a work in progress, and some information may be incomplete or subject to change. We appreciate your patience and understanding as we continue to develop and refine our documentation.

:::

## Clients

- Clients are active participants of the network with DataCap allocation for their use cases.
- Clients can use their DataCap to incentivize miners to provide additional features and levels of services that meet their specific requirements. In doing so, storage related goods and services on Filecoin are made more valuable and competitive over time.
- Clients are vetted by Notaries to ensure the client receives DataCap commensurate with their reputation and needs, and that the Client responsibly allocates that DataCap.
- Obtain verification and DataCap allocation from a Notary.
- Deploy DataCap responsibly in accordance with the Principles.
- Follow operational guidelines, keep record of decision flow, and respond to any requests for audits of their allocation decisions.

Specific details on the suggested framework for responsible DataCap allocation are described in the [notary-governance](https://github.com/filecoin-project/notary-governance) repository. It is expected that clients who intend to receive greater amounts of DataCap may be asked to provide evidence for responsible spending of their previous allocation before receiving more.

## Community governance

The scope of community governance involves shaping the rubrics, rules and processes, rather than specific cases. This includes defining mechanisms that reflect the goals and visions of the Principles; recommending standards and processes for selecting and evaluating Root Key Holders, Notaries, and Filecoin Plus Clients; and dispute resolution framework.

## Notaries

The base responsibilities of the Notaries are as follows:

- Allocate DataCap to clients in order to subsidize reliable and useful storage on the network.
- Verify that clients receive a DataCap commensurate with the level of trust that is warranted based on information provided.
- Ensure that in the allocation of the DataCap no party is given excessive trust in any form that might jeopardize the network.
- Follow operational guidelines, keep record of decision flow, and respond to any requests for audits of their allocation decisions.

Notaries are given autonomy in their decision making process and encouraged to allocate DataCap based on their best judgement. However, Notaries should expect to answer any questions about previous allocation decisions before receiving future DataCap to distribute. Guidelines for reasonable allocation strategies are supplied in the [recommended scoring mechanism for prospective Clients](https://github.com/filecoin-project/notary-governance/blob/main/notaries/templates/client-evaluation.md) and [sample set of questions to ask of Clients](https://github.com/filecoin-project/notary-governance/blob/main/notaries/templates/sample-client-application.md) templates. While not mandatory to use, these documents represent the expected baseline for well-behaved Notaries.

## Root key holders

The role of the Root Key Holder is not to make subjective decisions - rather to act as an executor for decisions made by the community on-chain. The action space and power of Root Key Holders are also limited by design. Any deviation from this mandate will make the offending Root Key Holders immediately subject to removal through a FIP.

Root Key Holders are signers to a Multisig on chain with the power to grant and remove Notaries (and associated DataCap amounts). Root Key Holders are selected based on their reputation and alignment with the long term health of the Filecoin network.

The responsibilities of the Root Key Holder are to:

- Exercise decisions made by the community governance on-chain.
- Take action on finalized decisions in a timely manner.
- Root Key Holders should expect to meet on a regular cadence to process approved actions from the Governance repository.
- It is expected that every action taken by a Root Key Holder should be linked to a governance decision and require collective action by a substantial number of Root Key Holders in order to be processed.
