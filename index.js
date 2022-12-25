import fetch from 'node-fetch';

const YOUR_API_KEY_HERE = 'e9a659ea-1dfd-48bd-8c31-2c570ddc0f56';

// 1.
// const resp = await fetch(
//   `https://api.tatum.io/v3/ethereum/wallet`,
//   {
//     method: 'GET',
//     headers: {
//       'x-api-key': {YOUR_API_KEY_HERE}
//     }
//   }
// );

// const data = await resp.text();
// console.log(data);

/* ----------------------------------------------------------------------- */

// 2.
//'YOUR_xpub_PARAMETER';
// const xpub = 'xpub6EsUSmvTr36SkgsdczTM3Q4dsVic2U6ciyCQjXEFn7CpMfLx4cbcMttpXNYJXrJoC2gnRK3PNjjgNjnMVhp1Me4w9ZzgvPjtVaM5a21UNuB'; 

// //'YOUR_index_PARAMETER'
// const index = '0'; 

// const resp = await fetch(
//   `https://api.tatum.io/v3/ethereum/address/${xpub}/${index}`,
//   {
//     method: 'GET',
//     headers: {
//       'x-api-key': YOUR_API_KEY_HERE
//     }
//   }
// );

// const data = await resp.text();
// console.log(data);

/* ----------------------------------------------------------------------- */

// 3.
// const resp = await fetch(
//     `https://api.tatum.io/v3/ethereum/wallet/priv`,
//     {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'x-api-key': YOUR_API_KEY_HERE
//       },
//       body: JSON.stringify({
//         index: 0,
//         mnemonic: "poem any charge reject horn clock bone able work matrix helmet manage truth giant shove tongue beef mail decorate thing vehicle change offer rent"
//       })
//     }
//   );
  
//   const data = await resp.json();
//   console.log(data);

/* ----------------------------------------------------------------------- */

// 4. Balance (0.05 SepEth available)

// const address = '0xf79501b2d3b2bb7dcb7b50e8fa4863d6417a43d7';   // YOUR_address_PARAMETER
// const resp = await fetch(
//   `https://api.tatum.io/v3/ethereum/account/balance/${address}`,
//   {
//     method: 'GET',
//     headers: {
//       'x-api-key': YOUR_API_KEY_HERE
//     }
//   }
// );

// const data = await resp.text();
// console.log(data);

/* ----------------------------------------------------------------------- */

// 5. Get transaction details
//YOUR_hash_PARAMETER
// const hash = '0x15a360c2b92bf8fa2cba7329010c3e9b419faed0e987046b04d24e7dcefe5d13';
// const resp = await fetch(
//   `https://api.tatum.io/v3/ethereum/transaction/${hash}`,
//   {
//     method: 'GET',
//     headers: {
//       'x-api-key': YOUR_API_KEY_HERE
//     }
//   }
// );

// const data = await resp.text();
// console.log(data);

/* ----------------------------------------------------------------------- */

//6. Show all transactions associated with an address
// const query = new URLSearchParams({pageSize: '10'}).toString();

// const address = '0xf79501b2d3b2bb7dcb7b50e8fa4863d6417a43d7';       //YOUR_address_PARAMETER
// const resp = await fetch(
//   `https://api.tatum.io/v3/ethereum/account/transaction/${address}?${query}`,
//   {
//     method: 'GET',
//     headers: {
//       'x-api-key': YOUR_API_KEY_HERE
//     }
//   }
// );

// const data = await resp.text();
// console.log(data);

/* ----------------------------------------------------------------------- */

//7.

const resp = await fetch(
  `https://api.tatum.io/v3/ethereum/transaction`,
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': YOUR_API_KEY_HERE
    },
    body: JSON.stringify({
      to: '0xf79501b2d3b2bb7dcb7b50e8fa4863d6417a43d7',     // public address
      currency: 'ETH',
      amount: '100000',
      fromPrivateKey: '0x05e150c73f1920ec14caa1e0b6aa09940899678051a78542840c2668ce5080c2'
    })
  }
);

const data = await resp.json();
console.log(data);
