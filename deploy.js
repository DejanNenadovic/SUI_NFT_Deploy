import { MirrorWorld, Sui } from "@mirrorworld/web3.js"

const mirrorworld = new MirrorWorld({
  apiKey: "mw_5Z4yqvQEmVAY9vRMEZ7s5bMmkQIrwqfI0Ik",
  chainConfig: Sui("testnet"),
  auth: {
    secretAccessKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjcwNzA0LCJldGhfYWRkcmVzcyI6IjB4MTVFNzIxQkQ4NTIwODc4YzRBOEVFZjJGN0FkN0U5NTNDYTNBRjFDNyIsInNvbF9hZGRyZXNzIjoiNFkxdlNhb1ZrUDgyM0hrWVlnSldOSkIzYTk2Vk16V0tKZ0syMzh2Nm91WWsiLCJzdWlfYWRkcmVzcyI6IjB4Nzk1ODE5NjU4MzllNTg1YTdhMWU3YzEwM2RlYjk0ZmI0NDdjNjM5MDExMzRiYTkwN2M4ZWE0ZDIzOTIyNDljOSIsImFwdG9zX2FkZHJlc3MiOm51bGwsImVtYWlsIjoibmlnaHRmdXJ5OTg3NjBAZ21haWwuY29tIiwid2FsbGV0Ijp7ImV0aF9hZGRyZXNzIjoiMHgxNUU3MjFCRDg1MjA4NzhjNEE4RUVmMkY3QWQ3RTk1M0NhM0FGMUM3Iiwic29sX2FkZHJlc3MiOiI0WTF2U2FvVmtQODIzSGtZWWdKV05KQjNhOTZWTXpXS0pnSzIzOHY2b3VZayIsInN1aV9hZGRyZXNzIjoiMHg3OTU4MTk2NTgzOWU1ODVhN2ExZTdjMTAzZGViOTRmYjQ0N2M2MzkwMTEzNGJhOTA3YzhlYTRkMjM5MjI0OWM5IiwiYXB0b3NfYWRkcmVzcyI6bnVsbH0sImNsaWVudF9pZCI6Ii1scWlDZ3dOR2dqeVFQbTJkZDE4dGdOSmRWYU9JSzVsZVZUcy43Q1Z6TG5VSC5taXJyb3J3b3JsZC5mdW4iLCJ0eXBlIjoic2VjcmV0X2FjY2Vzc19rZXkiLCJpYXQiOjE3Mjg3NTExMjAsImV4cCI6MTczNjUyNzEyMCwiaXNzIjoiLWxxaUNnd05HZ2p5UVBtMmRkMTh0Z05KZFZhT0lLNWxlVlRzLjdDVnpMblVILm1pcnJvcndvcmxkLmZ1biIsImp0aSI6InNhazoyNzA3MDQ6YXV0aDoxMzc3In0.KC35FshZlWAFz46uGo3lj4S5q4g6Ghi6VmvZxG0MXt8",
  },
})

const payload = {
        name: "MyToken",
        description: "This is a sample NFT",
        image: "https://amaranth-many-armadillo-855.mypinata.cloud/ipfs/QmS9eZM5nXaEyM7uie3az7xvmmmU6BzJ6suYEZPaFB1QWg",
        attributes: [
          { "trait_type": "Background", "value": "Blue" },
          { "trait_type": "Rarity", "value": "Rare" }
        ]
}

const contract = await mirrorworld.SUI.Asset.mintCollection(payload)
console.log("my new contract", contract)
