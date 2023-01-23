import React, {useState, useEffect} from "react";
import axios from "axios";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollectionCard";

const client = axios.create(
  {
    baseURL: "https://vercel-json-server-black.vercel.app/bots"
  }
)

function BotsPage() {
  const[bots, setBots] = useState([]);

  const[userBots, setUserBots] = useState([]);
  useEffect(
    ()=>{
      client
      .get("/")
      .then((response)=>(setBots(response.data)))
    }, []
  )

  


  return (
    <div>
      <YourBotArmy myBots={userBots} setUserBots={setUserBots} />
      <BotCollection bots={bots} userBots={userBots} setUserBots={setUserBots}/>
    </div>
  )
}

export default BotsPage;