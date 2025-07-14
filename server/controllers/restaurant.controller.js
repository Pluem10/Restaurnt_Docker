import Restaurant from "../models/restaurant.model.js";
const restaurantContrller = {};
restaurantContrller.create = async (req, res) => {
  const { name, type, imageUrl } = req.body;

  // Validate input
  if (!name || !type || !imageUrl) {
    return res
      .status(400)
      .send({ message: "Name, type, or imageUrl cannot be empty!" });
  }

  try {
    // Check if restaurant already exists
    const restaurant = await Restaurant.findOne({ where: { name: name } });

    if (restaurant) {
      return res.status(400).send({ message: "Restaurant already exists!" });
    }

    // Create new restaurant
    const newRestaurant = {
      name,
      type,
      imageUrl,
    };

    const data = await Restaurant.create(newRestaurant);
    res.send(data);
  } catch (error) {
    res.status(500).send({
      message:
        error.message || "Something went wrong while creating the restaurant.",
    });
  }
};

export default restaurantContrller;
