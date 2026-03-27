window.game = {
  addJuice(amount) {
    juice += amount;
    update();
  },

  setJuice(amount) {
    juice = amount;
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
