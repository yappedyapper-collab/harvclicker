// Cheats / debug commands
window.game = {
  addJuice(amount) {
    juice += amount;
    update();
    console.log("Added juice:", amount);
  },

  setJuice(amount) {
    juice = amount;
    update();
  },

  addRebirths(amount) {
    rebirths += amount;
    update();
  },

  maxAll() {
    juice = 999999;
    clickPower = 100;
    perSecond = 100;
    rebirths = 10;
    update();
  }
};
