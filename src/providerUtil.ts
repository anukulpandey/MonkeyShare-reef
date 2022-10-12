import {Provider} from "@reef-defi/evm-provider";
import {WsProvider} from "@polkadot/rpc-provider";

export async function initProvider() {
    const URL = 'wss://rpc-testnet.reefscan.com/ws';
    const evmProvider = new Provider({
        provider: new WsProvider(URL)
    });
    await evmProvider.api.isReadyOrError;
    return evmProvider;
}
