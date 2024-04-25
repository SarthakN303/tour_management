import Tour from "../models/Tour.js";

// Create a new tour
export const createTour = async (req, res) => {
  const newTour = new Tour(req.body);

  try {
    const saveTour = await newTour.save();

    res
      .status(200)
      .json({ success: true, message: "Successfull created", data: saveTour });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Not created please try again" });
  }
};

// Update tour

export const updateTour = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedTour = await Tour.findByIdAndUpdate(
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
        data: updatedTour,
      });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to update" });
  }
};

// Delete Tour
export const deleteTour = async (req, res) => {
  const id = req.params.id;
  try {
    const deletedTour = await Tour.findByIdAndDelete(id);
    res
      .status(200)
      .json({
        success: true,
        message: "Deleted Successfully",
        data: deletedTour,
      });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to Delete" });
  }
};

// getSingleTour
export const getSingleTour = async (req, res) => {
  const id = req.params.id;
  try {
    const getSingleTour = await Tour.findById(id).populate("reviews");
    res.status(200).json({ success: true, data: getSingleTour });
  } catch (error) {
    res.status(404).json({ success: false, message: "Tour not found" });
  }
};

// getAllTour
export const getAllTour = async (req, res) => {
  // For pagination
  const page = parseInt(req.query.page);

  try {
    const getAllTour = await Tour.find({}).populate("reviews")
      .skip(page * 8)
      .limit(8);
    res
      .status(200)
      .json({ success: true, count: getAllTour.length, data: getAllTour });
  } catch (error) {
    res.status(500).json({ success: false, message: "Tour not found" });
  }
};

// Get tour by search
export const getTourBySearch = async (req, res) => {
  //her "i" means case sensitvie
  const city = new RegExp(req.query.city, "i");
  const distance = parseInt(req.query.distance);
  const maxGroupSize = parseInt(req.query.maxGroupSize);

  try {
    // gte means greater than equal
    const tours = await Tour.find({
      city,
      distance: { $gte: distance },
      maxGroupSize: { $gte: maxGroupSize },
    }).populate("reviews");

    res
      .status(200)
      .json({ success: true, count: getAllTour.length, data: tours });
  } catch (error) {
    res.status(500).json({ success: false, message: "Tour not found" });
  }
};


// getFeaturedTour
export const getFeaturedTour = async (req, res) => {


  try {
    const getAllTour = await Tour.find({featured:true}).populate("reviews").limit(8);
    res
      .status(200)
      .json({ success: true,  data: getAllTour });
  } catch (error) {
    res.status(500).json({ success: false, message: "Tour not found" });
  }
};


// Get tour count

export const getTourCount = async(req,res)=>{
    try {
      const tourCount = await Tour.estimatedDocumentCount();

      res.status(200).json({success:true,data:tourCount})
      
    } catch (error) {
      res.status(500).json({success:false,message:"failed to load"})
      
    }
}
