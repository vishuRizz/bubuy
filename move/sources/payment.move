module module_addr::payment {
    use aptos_framework::account;
    use aptos_framework::coin::{transfer, balance, mint};
    use aptos_framework::aptos_coin::AptosCoin;
    use aptos_framework::event;
    use aptos_framework::signer;
    use aptos_std::vector;

    /// Event to log payments with lottery contributions
    #[event]
    struct PaymentEvent has store, drop {
        payer: address,             // Address of the payer
        items_cost: u64,            // Cost of the items purchased
        lottery_contribution: u64,  // Amount contributed to the lottery
    }

    /// Handle payment and forward lottery conntribution to prize pool
    public fun handle_payment(account: &signer, items_cost: u64, lottery_contribution: u64) {
        let total_payment = items_cost + lottery_contribution;

        // Deduct the amount from the user's account
        transfer<AptosCoin>(account, signer::address_of(account), total_payment);

        // Forward lottery contribution to the Prize Pool Contract
        let prize_pool_address: address = @module_addr;
        transfer<AptosCoin>(account, prize_pool_address, lottery_contribution);

        // Log the payment event using the new module event system
        let payment_event = PaymentEvent {
            payer: signer::address_of(account),
            items_cost: items_cost,
            lottery_contribution: lottery_contribution,
        };
        event::emit(payment_event);
    }
}