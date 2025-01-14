const {
  checkMessage,
  checkSelected,
  printValue,
  increment,
} = require("../utils/HandleBarsHelper");

module.exports = {
  registerHelpers: (hbs) => {
    hbs.registerHelper("checkMessage", checkMessage);
    hbs.registerHelper("checkSelected", checkSelected);
    hbs.registerHelper("printValue", printValue);
    hbs.registerHelper("increment", increment);
    // hbs.registerHelper("duration", getDuration);
    // hbs.registerHelper("description", cutText);
    // hbs.registerHelper("isOver", isDescriptionOver);
    // hbs.registerHelper("getIcon", getIcon);
    // hbs.registerHelper("checkTech", checkTech);
    // hbs.registerHelper("formatDate", formatDate);
  },
};
