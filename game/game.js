let Account=null;let last=true;async function connect(){const status=document.getElementById("status");const provider=new ethers.providers.Web3Provider(window.ethereum,"any");await provider.send("eth_requestAccounts",[]).then(accs=>{if(accs.length>0){Account=accs[0];const contract=new ethers.Contract(address,abi,provider);const contractName=contract.walletOfOwner(Account).then(tokens=>{status.innerHTML="";status.appendChild(document.createElement("br"));const text1=document.createTextNode("Address: "+Account);const text2=document.createTextNode("Holding: "+tokens.length.toString()+" EVs");status.appendChild(text1);status.appendChild(document.createElement("br"));status.appendChild(text2);show(tokens)})}})}function show(tokens){const instructions=document.getElementById("instructions");const content=document.getElementById("content");instructions.style="background:white;color:black;padding:2em;margin:1em 10%;text-align:center;border-radius:.5em;";content.style="background:white;color:black;padding:2em;margin:1em 10%;text-align:center;border-radius:.5em;";let state=Account!=null&&tokens.length>0;if(last==state){return}content.innerHTML="";last=state;if(state){const iframe=document.createElement("iframe");iframe.style="display:inline;max-width:100%;width:1280px;height:720px;";iframe.src="/game/HeartBeats.html";content.appendChild(iframe)}else{const video=document.createElement("video");video.style="display:inline;max-width:100%;";video.controls=true;const source=document.createElement("source");const text=document.createTextNode("Your browser does not support the video tag.");source.src="/game/trailer.mp4";source.type="video/mp4";video.appendChild(source);video.appendChild(text);content.appendChild(video)}}