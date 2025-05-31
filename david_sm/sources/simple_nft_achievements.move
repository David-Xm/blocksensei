module simple_nft_achievements::simple_nft_achievements {
    use std::string;
    use sui::event;
    use sui::url::{Self, Url};

    /// An example NFT that can be minted by anybody
    #[allow(public_struct)]
    public struct SimpleNft has key, store {
        id: UID,
        name: string::String,
        description: string::String,
        url: Url,
    }

    #[allow(public_struct)]
    public struct NFTMinted has copy, drop {
        object_id: ID,
        creator: address,
        name: string::String,
    }

    // ===== Public view functions =====
    /// Get the NFT's `name`
    public fun name(nft: &SimpleNft): &string::String {
        &nft.name
    }

    /// Get the NFT's `description`
    public fun description(nft: &SimpleNft): &string::String {
        &nft.description
    }

    /// Get the NFT's `url`
    public fun url(nft: &SimpleNft): &Url {
        &nft.url
    }

    // ===== Entrypoints =====
    /// Create a new NFT
    public fun mint_to_sender(
        name: vector<u8>,
        description: vector<u8>,
        url: vector<u8>,
        ctx: &mut TxContext,
    ) {
        let sender = tx_context::sender(ctx);
        let nft = SimpleNft {
            id: object::new(ctx),
            name: string::utf8(name),
            description: string::utf8(description),
            url: url::new_unsafe_from_bytes(url),
        };

        event::emit(NFTMinted {
            object_id: object::id(&nft),
            creator: sender,
            name: nft.name,
        });

        transfer::public_transfer(nft, sender);
    }

    /// Transfer `nft` to `recipient`
    public fun transfer(nft: SimpleNft, recipient: address, _: &mut TxContext) {
        transfer::public_transfer(nft, recipient)
    }

    /// Update the `description` of `nft` to `new_description`
    public fun update_description(
        nft: &mut SimpleNft,
        new_description: vector<u8>,
        _: &mut TxContext,
    ) {
        nft.description = string::utf8(new_description)
    }

    /// Permanently delete `nft`
    public fun burn(nft: SimpleNft, _: &mut TxContext) {
        let SimpleNft { id, name: _, description: _, url: _ } = nft;
        object::delete(id)
    }
}

