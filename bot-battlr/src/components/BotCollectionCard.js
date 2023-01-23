import React from "react";
import BotCollectionCard from './BotCollectionCard'

function BotCollection({bots, userBots, setUserBots}) {
  const displayBotCards = bots.map(bot => {
    return <BotCollectionCard key={bot.id} bot={bot} userBots={userBots} setUserBots={setUserBots} />
  })
  return (
    <div className="ui four column grid">
      <div className="row">
        {displayBotCards}
      </div>
    </div>
  );
}

export default BotCollection;