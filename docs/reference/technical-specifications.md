---
sidebar_position: 3
---

# Technical Specifications

:::info

This page is currently a work in progress, and some information may be incomplete or subject to change. We appreciate your patience and understanding as we continue to develop and refine our documentation.

:::

## Addresses

> Addresses are wallets ([reference](https://lotus.filecoin.io/lotus/manage/manage-fil/#creating-a-wallet))

- Public Key
  - `f1`: secp256k1
  - `f3`: bls12-381
- Random SHA-256 Hash
  - `f2`: actor address

## Actors

- [Verified Registry Actor](https://spec.filecoin.io/#section-glossary.verified-registry-actor): `f06`
- [Multisig Actor](https://spec.filecoin.io/#section-glossary.multisig-actor)
  - Root Key Holder: `f080`
- [Account Actor](https://spec.filecoin.io/#section-glossary.account-actor)
- [Init Actor](https://spec.filecoin.io/#section-glossary.init-actor): `f01`

## Types of information

### Artifacts

- DataCap
- Dataset (Stored data)
- Infringements

### Roles

- Root Key Holder
- Notary
- Client
- Storage Provider
- Community Member

### Processes

#### DataCap-related

- Application
  - Application submission
  - Application review
- Allocation
  - Allocation
  - Allocation batch (LDN-specific)
- Verification (due diligence)
  - Notary pool selection

#### Statuses

#### Community Engagements

#### Other

- Monitoring
- Auditing
- Dispute
- Risk scoring
