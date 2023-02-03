import { expect, test } from 'vitest'

import * as actions from './index'

test('exports actions', () => {
  expect(actions).toMatchInlineSnapshot(`
    {
      "AbiConstructorNotFoundError": [Function],
      "AbiConstructorParamsNotFoundError": [Function],
      "AbiDecodingDataSizeInvalidError": [Function],
      "AbiEncodingArrayLengthMismatchError": [Function],
      "AbiEncodingLengthMismatchError": [Function],
      "AbiErrorInputsNotFoundError": [Function],
      "AbiErrorNotFoundError": [Function],
      "AbiErrorSignatureNotFoundError": [Function],
      "AbiEventNotFoundError": [Function],
      "AbiFunctionNotFoundError": [Function],
      "AbiFunctionOutputsNotFoundError": [Function],
      "AbiFunctionSignatureNotFoundError": [Function],
      "BaseError": [Function],
      "BlockNotFoundError": [Function],
      "DataLengthTooLongError": [Function],
      "DataLengthTooShortError": [Function],
      "FilterTypeNotSupportedError": [Function],
      "HttpRequestError": [Function],
      "InternalRpcError": [Function],
      "InvalidAbiDecodingTypeError": [Function],
      "InvalidAbiEncodingTypeError": [Function],
      "InvalidAddressError": [Function],
      "InvalidArrayError": [Function],
      "InvalidBytesBooleanError": [Function],
      "InvalidDefinitionTypeError": [Function],
      "InvalidGasArgumentsError": [Function],
      "InvalidHexBooleanError": [Function],
      "InvalidHexValueError": [Function],
      "InvalidInputRpcError": [Function],
      "InvalidParamsRpcError": [Function],
      "InvalidRequestRpcError": [Function],
      "JsonRpcVersionUnsupportedError": [Function],
      "LimitExceededRpcError": [Function],
      "MethodNotFoundRpcError": [Function],
      "MethodNotSupportedRpcError": [Function],
      "OffsetOutOfBoundsError": [Function],
      "ParseRpcError": [Function],
      "RequestError": [Function],
      "ResourceNotFoundRpcError": [Function],
      "ResourceUnavailableRpcError": [Function],
      "RpcError": [Function],
      "RpcRequestError": [Function],
      "SizeExceedsPaddingSizeError": [Function],
      "TimeoutError": [Function],
      "TransactionNotFoundError": [Function],
      "TransactionReceiptNotFoundError": [Function],
      "TransactionRejectedRpcError": [Function],
      "UnknownRpcError": [Function],
      "UrlRequiredError": [Function],
      "WaitForTransactionReceiptTimeoutError": [Function],
      "WebSocketRequestError": [Function],
      "addChain": [Function],
      "boolToBytes": [Function],
      "boolToHex": [Function],
      "bytesToBigint": [Function],
      "bytesToBool": [Function],
      "bytesToHex": [Function],
      "bytesToNumber": [Function],
      "bytesToString": [Function],
      "call": [Function],
      "createBlockFilter": [Function],
      "createClient": [Function],
      "createPendingTransactionFilter": [Function],
      "createPublicClient": [Function],
      "createTestClient": [Function],
      "createTransport": [Function],
      "createWalletClient": [Function],
      "custom": [Function],
      "decodeAbi": [Function],
      "decodeBytes": [Function],
      "decodeErrorResult": [Function],
      "decodeFunctionData": [Function],
      "decodeFunctionResult": [Function],
      "decodeHex": [Function],
      "decodeRlp": [Function],
      "deployContract": [Function],
      "dropTransaction": [Function],
      "encodeAbi": [Function],
      "encodeBytes": [Function],
      "encodeDeployData": [Function],
      "encodeErrorResult": [Function],
      "encodeEventTopics": [Function],
      "encodeFunctionData": [Function],
      "encodeFunctionResult": [Function],
      "encodeHex": [Function],
      "encodeRlp": [Function],
      "estimateGas": [Function],
      "etherUnits": {
        "gwei": 9,
        "wei": 18,
      },
      "fallback": [Function],
      "formatBlock": [Function],
      "formatEther": [Function],
      "formatGwei": [Function],
      "formatTransaction": [Function],
      "formatTransactionRequest": [Function],
      "formatUnit": [Function],
      "getAccounts": [Function],
      "getAddress": [Function],
      "getAutomine": [Function],
      "getBalance": [Function],
      "getBlock": [Function],
      "getBlockNumber": [Function],
      "getBlockTransactionCount": [Function],
      "getBytecode": [Function],
      "getChainId": [Function],
      "getContractAddress": [Function],
      "getCreate2Address": [Function],
      "getCreateAddress": [Function],
      "getEventSignature": [Function],
      "getFeeHistory": [Function],
      "getFilterChanges": [Function],
      "getFilterLogs": [Function],
      "getFunctionSignature": [Function],
      "getGasPrice": [Function],
      "getLogs": [Function],
      "getPermissions": [Function],
      "getStorageAt": [Function],
      "getTransaction": [Function],
      "getTransactionConfirmations": [Function],
      "getTransactionCount": [Function],
      "getTransactionReceipt": [Function],
      "getTxpoolContent": [Function],
      "getTxpoolStatus": [Function],
      "gweiUnits": {
        "ether": -9,
        "wei": 9,
      },
      "hexToBigInt": [Function],
      "hexToBool": [Function],
      "hexToBytes": [Function],
      "hexToNumber": [Function],
      "hexToString": [Function],
      "http": [Function],
      "impersonateAccount": [Function],
      "increaseTime": [Function],
      "inspectTxpool": [Function],
      "isAddress": [Function],
      "isAddressEqual": [Function],
      "isBytes": [Function],
      "isHex": [Function],
      "keccak256": [Function],
      "mine": [Function],
      "numberToBytes": [Function],
      "numberToHex": [Function],
      "pad": [Function],
      "padBytes": [Function],
      "padHex": [Function],
      "parseEther": [Function],
      "parseGwei": [Function],
      "parseUnit": [Function],
      "readContract": [Function],
      "removeBlockTimestampInterval": [Function],
      "requestAccounts": [Function],
      "requestPermissions": [Function],
      "reset": [Function],
      "revert": [Function],
      "sendTransaction": [Function],
      "sendUnsignedTransaction": [Function],
      "setAutomine": [Function],
      "setBalance": [Function],
      "setBlockGasLimit": [Function],
      "setBlockTimestampInterval": [Function],
      "setCode": [Function],
      "setCoinbase": [Function],
      "setIntervalMining": [Function],
      "setLoggingEnabled": [Function],
      "setMinGasPrice": [Function],
      "setNextBlockBaseFeePerGas": [Function],
      "setNextBlockTimestamp": [Function],
      "setNonce": [Function],
      "setStorageAt": [Function],
      "signMessage": [Function],
      "simulateContract": [Function],
      "size": [Function],
      "slice": [Function],
      "sliceBytes": [Function],
      "sliceHex": [Function],
      "snapshot": [Function],
      "stopImpersonatingAccount": [Function],
      "stringToBytes": [Function],
      "stringToHex": [Function],
      "switchChain": [Function],
      "transactionType": {
        "0x0": "legacy",
        "0x1": "eip2930",
        "0x2": "eip1559",
      },
      "trim": [Function],
      "uninstallFilter": [Function],
      "waitForTransactionReceipt": [Function],
      "watchAsset": [Function],
      "watchBlockNumber": [Function],
      "watchBlocks": [Function],
      "watchPendingTransactions": [Function],
      "webSocket": [Function],
      "weiUnits": {
        "ether": -18,
        "gwei": -9,
      },
      "writeContract": [Function],
    }
  `)
})
