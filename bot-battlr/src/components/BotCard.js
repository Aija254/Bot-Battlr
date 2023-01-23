import React from "react";
import axios from "axios";

const botTypeClasses = {
  Assault: "icon military",
  Defender: "icon shield",
  Support: "icon plus circle",
  Medic: "icon ambulance",
  Witch: "icon magic",
  Captain: "icon star",
};

function BotCard({ bot, userBots, setUserBots }) {
  function removeUserBot(arrayOfUserBots){
    let id = bot.id
    const newBotArmy = userBots.filter((bot) => bot.id !== id);
    setUserBots(newBotArmy);
  }
  function dischargeBot(id=`${bot.id}`){
    axios.delete(`https://vercel-json-server-black.vercel.app/bots/${id}`).then(alert("Permanently Discharged!"))
  }
  return (
    <div className="ui column">
      <div
        className="ui card"
        key={bot.id}
        onClick={() => {removeUserBot(`${userBots}`)}}
      >
        <div className="image">
          <img alt="oh no!" src={bot.avatar_url} />
        </div>
        <div className="content">
          <div className="header">
            {bot.name}
            <i className={botTypeClasses[bot.bot_class]} />
          </div>
          <div className="meta text-wrap">
            <small>{bot.catchphrase}</small>
          </div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat" />
            {bot.health}
          </span>

          <span>
            <i className="icon lightning" />
            {bot.damage}
          </span>
          <span>
            <i className="icon shield" />
            {bot.armor}
          </span>
          <span>
            <div className="ui center aligned segment basic">
              <button
                className="ui mini red button"
                onClick={() => {dischargeBot()}
                }
              >
                x
              </button>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}

export default BotCard;