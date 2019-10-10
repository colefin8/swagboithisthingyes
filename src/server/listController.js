const list = ["Insult Tavas", "Fight Derek", "Go on a date with Rylie"];

module.exports = {
  fullList(req, res) {
    res.status(200).send(list);
  },

  addItem(req, res) {
    const { addOn } = req.body;
    list.push(addOn);
    res.status(200).send(list);
  },

  editItem(req, res) {
    const { index, newItem } = req.body;
    list[index] = newItem;
    res.status(200).send(list);
  },

  deleteItem(req, res) {
    const { index } = req.params;
    list.splice(index, 1);
    res.status(200).send(list);
  }
};
