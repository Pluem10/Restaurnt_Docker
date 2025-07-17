import Restaurant from "../models/restaurant.model.js";
const restaurantContrller = {};
restaurantContrller.create = async (req, res) => {
  const { name, type, imageUrl } = req.body;
  // Validate data
  if (!name || !type || !imageUrl) {
    return res
      .status(400)
      .send({ message: "Name, Type or ImageUrl can not be empty!" });
  }
  try {
    const restaurant = await Restaurant.findOne({ where: { name } });
    if (restaurant) {
      return res.status(400).send({ message: "Restaurant already exists!" });
    }
    const newRestaurant = { name, type, imageUrl };
    const data = await Restaurant.create(newRestaurant);
    res.send(data);
  } catch (error) {
    res.status(500).send({
      message: error.message || "Something error while create the restaurant",
    });
  }
};

// getall restaurants
restaurantContrller.getAll = async (req, res) => {
  await Restaurant.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.status(500).send({
        message:
          error.message || "Something went wrong while retrieving restaurants.",
      });
    });
};
restaurantContrller.getById = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await Restaurant.findByPk(id);
    if (!data) {
      return res.status(404).send({
        message: `Cannot find Restaurant with id=${id}.`,
      });
    }
    res.send(data);
  } catch (error) {
    res.status(500).send({
      message: "Something error while getting restaurnt with id=" + id,
    });
  }
};

restaurantContrller.Update = async (req, res) => {
  const id = req.params.id;
  const { name, type, imageUrl } = req.body;
  if (!name && !type && !imageUrl) {
    return res.status(400).send({
      message: "Name, type, or imageUrl cannot be empty!",
    });
  }
  try {
    const [num] = await Restaurant.update(
      { name, type, imageUrl },
      { where: { id: id } }
    );
    if (num === 1) {
      res.send({ message: "Restaurant was updated successfully." });
    } else {
      res.status(404).send({
        message: `Cannot update Restaurant with id=${id}. Maybe Restaurant was not found or req.body is empty!`,
      });
    }
  } catch (error) {
    res.status(500).send({
      message: error.message || "Error updating Restaurant.",
    });
  }
};

restaurantContrller.deleteById = async (req, res) => {
  const id = req.params.id;
  if (!id) {
    req.status(400).send({
      message: "Id is missing ",
    });
    return;
  }
  await Restaurant.destroy({ where: { id } }).then((num) => {
    if (num === 1) {
      res.send({ message: "Restaurant was deleted successfully!" });
    } else {
      res.status(404).send({
        message: "Cannot delete  restaurant with id " + id + ".",
      });
    }
  });
};
export default restaurantContrller;
