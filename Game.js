const GameState = Object.freeze({
  WELCOMING: Symbol("welcoming"),
  CHALLANGE: Symbol("challange"),
  CEMETERY: Symbol("cemetery"),
  TASK: Symbol("task"),
});

module.exports = class Game {
  constructor() {
    this.stateCur = GameState.WELCOMING;
  }

  makeAMove(sInput) {
    let sReply = "";
    switch (this.stateCur) {
      case GameState.WELCOMING:
        sReply =
          "You are challenged by your friends to visit the town cemetery on Halloween night and place flowers on each of the gravestones there. Will you GO there or say NO to them?";
        this.stateCur = GameState.CHALLANGE;
        break;
      case GameState.CHALLANGE:
        if (sInput.toLowerCase().match("no")) {
          sReply =
            "Your friends will make fun of you for rest of your life. Do you Still want to say NO or GO to the cemetery?";
        } else {
          sReply =
            "You walked into the graveyard at the stroke of midnight and there is complete darkness. You hear some sounds and footsteps from behind. Do you still want to DO the task or RUN to your home?";
          this.stateCur = GameState.CEMETERY;
        }
        break;
      case GameState.CEMETERY:
        if (sInput.toLowerCase().match("do")) {
          sReply =
            "Now, you are standing near the graves and suddenly realize that you forgot to bring flowers. Do you want to RETURN to home to get flowers or you can GET flowers from a nearby tree?";
          this.stateCur = GameState.TASK;
        } else {
          sReply =
            "Your friends will make fun of you for rest of your life. Do you still want to RUN to your home or show some more courage and DO the task?";
          this.stateCur = GameState.CEMETERY;
        }
        break;
      case GameState.TASK:
        if (sInput.toLowerCase().match("get")) {
          sReply =
            "You have collected flowers from a nearby tree and start placing them on graves. You have finished and say to yourself,” There, I’m done.” Suddenly a cold, bony hand tapped you and said, ”How about one for me?” ... Game Over";
          this.stateCur = GameState.WELCOMING;
        } else {
          sReply =
            "It will take too much time to get flowers from home. Do you want to GET flowers from a nearby tree?";
        }
    }
    return [sReply];
  }
};
