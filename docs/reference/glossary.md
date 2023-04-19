---
sidebar_position: 1
---

# Glossary

Standardized list of terms for the Filecoin Plus program.

## DataCap

DataCap is a token that [verified clients](glossary.md#verified-client) can use to make [verified deals](glossary.md#verified-deal).

## DataCap Allocation

DataCap Allocation is the process by which DataCap gets added to an address as an allowance.

## Deal

A deal in the Filecoin network is any deal between network participants in exchange for services. The two most common types of deals are [storage deals](glossary.md#storage-deal) and [retrieval deals](glossary.md#retrieval-deal).

## Deal Quality Multiplier

This factor is assigned to different deal types ([committed capacity](https://spec.filecoin.io/#section-glossary.capacity-commitment), [regular deals](glossary.md#regular-deal), and verified deals) to reward different content.

## Deal Weight

This weight converts spacetime occupied by deals into consensus power. Deal weight of verified client deals in a sector is called Verified Deal Weight and will be greater than the regular deal weight.

<!-- ## Due Diligence (DD) -->

<!-- ## E-Fil+ -->

## FIL

FIL is the name of the Filecoin unit of currency; it is alternatively denoted by the Unicode symbol for an integral with a double stroke (⨎).

## Filecoin

Filecoin is an open-source cloud storage marketplace, protocol, and incentive layer. The term Filecoin is used generically to refer to the Filecoin project, protocol, and network.

## Filecoin Address

A Filecoin address is an identifier that refers to an actor in the Filecoin state.

In the Filecoin network, an address is a unique cryptographic value that serves to publicly identify a user. This value, which is a public key, is paired with a corresponding private key. The mathematical relationship between the two keys is such that access to the private key allows the creation of a signature that can be verified with the public key. Filecoin employs the Boneh–Lynn–Shacham (BLS) signature scheme for this purpose.

<!-- ## Filecoin Improvement Proposal (FIP) -->

## Filecoin Plus

Filecoin Plus (Fil+) is social layer mechanism that incentivizes all participants to make Filecoin more useful. Fil+ is a community governed program, where community members can make decisions to help increase the usefulness of the Filecoin Network and help onboard useful data.

<!-- ## ID Address -->

## KYC

Acronym for _Know Your Customer_ or _Know Your Client_. KYC is a procedure used to confirm identities and prevent fraudulent activity.

## Large Dataset Notary (LDN)

Large Dataset Notary (LDN) is a [notary](glossary.md#notary) that participates in a multisig wallet focused on [DataCap](glossary.md#datacap) allocations for large datasets.

## Ledger Wallet

Ledger wallets are hardware devices made by the company [Ledger](https://www.ledger.com/) to securely manage and store crypto assets. [Learn more on how to use Filecoin with your Ledger device.](https://support.ledger.com/hc/en-us/articles/4402721277329-Filecoin-FIL-?support=true)

<!-- ## Multisig -->

<!-- ## Multisig Notary Address -->

## Multisig Actor

The Multisig Actor (or Multi-Signature Wallet Actor) is responsible for dealing with operations involving the Filecoin wallet.

## Notary

A Notary (also known as Verifier) is an entity (person or organization) that applied and got elected to join Filecoin Plus governance and act as fiduciary for the Filecoin network. [Learn more on FIP 0003.](https://github.com/filecoin-project/FIPs/blob/d7f6f49be8a9dfae369df7520527f6d0cdd89b33/FIPS/fip-0003.md#notaries)

<!-- ## Off-chain -->

<!-- ## On-chain -->

## Quality-Adjusted Power (QAP)

Quality-adjusted power (QAP) is a parameter that measures the consensus power of stored data on the network, and is equal to [Raw Byte Power](glossary.md#raw-byte-power) multiplied by [Sector Quality Multiplier](glossary.md#sector-quality-multiplier).

## Regular Deal

A regular or standard deal is a deal that has no DataCap attached to it.

## Retrieval Deal

A retrieval deal is a deal in which one party agrees to transmit specified data to the other.

## Root Key Holder (RKH)

Root key holders (RKH) are signers to a [Multisig](glossary.md#multisig) on-chain with the power to grant and remove [Notaries](glossary.md#notary). Any action on the Multisig must have the signature of the majority of selected Root Key Holders to execute.

<!-- ## Robust Address -->

## Sector Quality Multiplier

Sector quality is assigned on Activation (the epoch when the miner starts proving theyʼre storing the file). The sector quality multiplier is computed as an average of deal quality multipliers (committed capacity, regular deals, and verified client deals), weighted by the amount of spacetime each type of deal occupies in the sector.

<!-- ## Storage Provider (SP) -->

## Storage Deal

An storage deal is a deal in which one party agrees to store data for the other for a specified length of time.

## Time to DataCap (TTD)

Time to DataCap (TTD) measures the time it takes for a DataCap allocation request to complete its lifecycle from request to actual on-chain allocation.

## Verified Client

A verified client is certified with respect to their intent to offer deals involving the storage of meaningful data.

<!-- ## Verified Deal -->

<!-- ## Verified Registry Actor -->

<!-- ## Verifier Address -->

<!-- ## Wallet -->

## Working Group

A working group is a group of people working together to achieve specified goals. The groups are domain-specific and focus on discussion or activity around a specific subject area.

## On-chain

On-chain actions are those that change the state of the tree and the blockchain and interact with the Filecoin VM.

## Off-chain

Off-chain actions are those that do not interact with the Filecoin VM.

## Raw Byte Power

Raw byte power is the measurement of a sector size in bytes.

## See also

- [Filecoin Spec Glossary](https://spec.filecoin.io/#section-glossary)
- [Filecoin Docs Glossary](https://docs.filecoin.io/reference/general/glossary/)
