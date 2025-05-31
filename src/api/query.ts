const publisher = '0xPackagePublisherObject';
const tx = new Transaction();
 
const tpTx = new TransferPolicyTransaction({ kioskClient, transaction: tx });
 
// This is an async call, as the SDK protects from accidentally creating
// a second transfer policy.
// You can skip this check by passing skipCheck: true.
await tpTx.create({
	type: ${heroPackageId}::hero::Hero,
	publisher,
});
 
tpTx
	.addLockRule()
	.addFloorPriceRule(100n)
	.addRoyaltyRule(percentageToBasisPoints(10), 100)
	.addPersonalKioskRule()
	// Transfers the TransferPolicyCap to the user and shares the transfer policy.
	.shareAndTransferCap('address_to_transfer_cap_to');
 
// Sign and execute transaction.
await signAndExecuteTransaction({ tx: tx });

// ... tp transaction is initialized and policy is set.
// Withdraw 10 SUI from the policy. Leave last parameter empty to withdraw all profits.
tpTx.withdraw('address_to_transfer_coin', 10_000_000);