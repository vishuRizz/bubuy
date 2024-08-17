script {
    use aptos_framework::aptos_coin::AptosCoin;
    use aptos_framework::coin;

    fun register(account: &signer) {
        coin::register<AptosCoin>(account);
    }
}