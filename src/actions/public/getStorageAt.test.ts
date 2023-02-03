import { expect, test } from 'vitest'
import {
  initialBlockNumber,
  publicClient,
  wagmiContractConfig,
} from '../../_test'

import { getBytecode } from './getBytecode'
import { getStorageAt } from './getStorageAt'

test('default', async () => {
  expect(
    await getStorageAt(publicClient, {
      address: wagmiContractConfig.address,
      slot: '0x0',
    }),
  ).toBe('0x7761676d6900000000000000000000000000000000000000000000000000000a')
  expect(
    await getStorageAt(publicClient, {
      address: wagmiContractConfig.address,
      slot: '0x1',
    }),
  ).toBe('0x5741474d4900000000000000000000000000000000000000000000000000000a')
})

test('args: blockNumber', async () => {
  expect(
    await getStorageAt(publicClient, {
      address: wagmiContractConfig.address,
      slot: '0x0',
      blockNumber: initialBlockNumber,
    }),
  ).toBe('0x7761676d6900000000000000000000000000000000000000000000000000000a')
})
