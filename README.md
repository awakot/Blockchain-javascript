# run
```bash
npm i --save
//peer1
npm run dev

//peer2
HTTP_PORT=3002 P2P_PORT=5002 PEERS=ws://localhost:5001 npm run dev
```