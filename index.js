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
// YOUR_address_PARAMETER
const address = '0xf79501b2d3b2bb7dcb7b50e8fa4863d6417a43d7';
const resp = await fetch(
  `https://api.tatum.io/v3/ethereum/account/balance/${address}`,
  {
    method: 'GET',
    headers: {
      'x-api-key': YOUR_API_KEY_HERE
    }
  }
);

const data = await resp.text();
console.log(data);
