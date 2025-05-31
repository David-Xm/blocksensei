/// Create a simple Token.
module simple_token::simple_token {
    use sui::coin::{Self, TreasuryCap};
    use sui::tx_context::{sender};  // Add this line
    
    #[allow(public_struct)]
    public struct SIMPLE_TOKEN has drop {}

    /// Most of the magic happens in the initializer for the demonstration
    /// purposes; however half of what's happening here could be implemented as
    /// a single / set of PTBs.
    fun init(witness: SIMPLE_TOKEN, ctx: &mut TxContext) {
        let treasury_cap = create_currency<SIMPLE_TOKEN>(witness, ctx);
        transfer::public_transfer(treasury_cap, sender(ctx));
    }

    /// Internal: not necessary, but moving this call to a separate function for
    /// better visibility of the Closed Loop setup in `init`.
    fun create_currency<T: drop>(
        otw: T,
        ctx: &mut TxContext
    ): TreasuryCap<T> {
        let (treasury_cap, metadata) = coin::create_currency(
            otw, 9,
            b"SMPL",
            b"Simple Token",
            b"Simple Token showcases",
            option::none(),
            ctx
        );

        transfer::public_freeze_object(metadata);
        treasury_cap
    }

    public entry fun mint(
        treasury_cap: &mut TreasuryCap<SIMPLE_TOKEN>, 
        amount: u64, 
        recipient: address, 
        ctx: &mut TxContext
    ) {
        coin::mint_and_transfer(treasury_cap, amount, recipient, ctx);
    }
}



