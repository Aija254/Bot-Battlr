import React from "react";
import BotCard from "./BotCard"

function YourBotArmy({myBots, setUserBots}) {
  if(myBots){
    const displayBotCards = myBots.map(bot => {
      return <BotCard key={bot.id} bot={bot} userBots={myBots} setUserBots={setUserBots} />
    })
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {displayBotCards}
          </div>
        </div>
      </div>
    );
  }else{
    return(
      <p>Select bot below to create an army</p>
    )
  }

  
}

export default YourBotArmy;
