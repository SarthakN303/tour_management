import User from "../models/User.js";

// Create a new User
export const createUser = async (req, res) => {
  const newUser = new User(req.body);

  try {
    const saveUser = await newUser.save();

    res
      .status(200)
      .json({ success: true, message: "Successfull created", data: saveUser });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Not created please try again" });
  }
};

// Update User

export const updateUser = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res
      .status(200)
      .json({
        success: true,
        message: "Updated Successfully",
        data: updatedUser,
      });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to update" });
  }
};

// Delete User
export const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    const deletedUser = await User.findByIdAndDelete(id);
    res
      .status(200)
      .json({
        success: true,
        message: "Deleted Successfully",
        data: deletedUser,
      });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to Delete" });
  }
};

// getSingleUser
export const getSingleUser = async (req, res) => {
  const userId = req.params.userId
  try {
    const getSingleUser = await User.findById(userId).populate("reviews");
    res.status(200).json({ success: true, data: getSingleUser });
  } catch (error) {
    res.status(404).json({ success: false, message: "User not found" });
  }
};

// getAllUser
export const getAllUser = async (req, res) => {
  

  try {
    const getAllUser = await User.find({})
    res
      .status(200)
      .json({ success: true, message:"Successful", data: getAllUser });
  } catch (error) {
    res.status(500).json({ success: false, message: "User not found" });
  }
};

// Get User by search
export const getUserBySearch = async (req, res) => {
  //here "i" means case sensitvie
  const city = new RegExp(req.query.city, "i");
  const distance = parseInt(req.query.distance);
  const maxGroupSize = parseInt(req.query.maxGroupSize);

  try {
    // gte means greater than equal
    const Users = await User.find({
      city,
      distance: { $gte: distance },
      maxGroupSize: { $gte: maxGroupSize },
    }).populate("reviews");

    res
      .status(200)
      .json({ success: true, count: getAllUser.length, data: Users });
  } catch (error) {
    res.status(500).json({ success: false, message: "User not found" });
  }
};


// getFeaturedUser
export const getFeaturedUser = async (req, res) => {


  try {
    const getAllUser = await User.find({featured:true}).populate("reviews").limit(8);
    res
      .status(200)
      .json({ success: true,  data: getAllUser });
  } catch (error) {
    res.status(500).json({ success: false, message: "User not found" });
  }
};


// Get User count

export const getUserCount = async(req,res)=>{
    try {
      const UserCount = await User.estimatedDocumentCount();

      res.status(200).json({success:true,data:UserCount})
      
    } catch (error) {
      res.status(500).json({success:false,message:"failed to load"})
      
    }
}

