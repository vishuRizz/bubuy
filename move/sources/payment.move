module module_addr::payment {
    use aptos_framework::account;
    use aptos_framework::coin::{transfer, balance, mint};
    use aptos_framework::aptos_coin::AptosCoin;
    use aptos_framework::event;
    use aptos_framework::signer;
    use aptos_std::vector;
    use module_addr::prize_pool;

    /// Event to log payments with lottery contributions
    #[event]
    struct PaymentEvent has store, drop {
        payer: address,             // Address of the payer
        items_cost: u64,            // Cost of the items purchased
        lottery_contribution: u64,  // Amount contributed to the lottery (1% of the items cost)
        vendor_address: address,    // Address of the vendor who receives the payment
    }

    /// Handle payment and forward lottery conntribution to prize pool
    public entry fun handle_payment(account: &signer, items_cost: u64, vendor_address: address) {
        let lottery_contribution = items_cost / 100;
        let payment_to_vendor = items_cost - lottery_contribution;

        // Check if the payer has enough balance
        let payer_address = signer::address_of(account);
        let payer_balance = balance<AptosCoin>(payer_address);
        assert!(payer_balance >= items_cost, 1);

        // Deduct the amount from the user's account
        transfer<AptosCoin>(account, vendor_address, payment_to_vendor);

        // Forward lottery contribution to the Prize Pool Contract via add_contribution
        // prize_pool::add_contribution(account, signer::address_of(account), lottery_contribution);

        // Log the payment event using the new module event system
        let payment_event = PaymentEvent {
            payer: signer::address_of(account),
            items_cost: items_cost,
            lottery_contribution: lottery_contribution,
            vendor_address: vendor_address,
        };
        event::emit(payment_event);
    }
}