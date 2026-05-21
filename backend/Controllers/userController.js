import User from "../models/User.js";

const hanldleUserNotFound = (user, res) => {
  if (!user) {
    res.status(404).json({ message: "User not found" });
    return true;
  }
  return false;
};

// Get user profile
export const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    if (hanldleUserNotFound(user, res)) {
      return;
    }
    res.json({ user });
  } catch (error) {
    console.error("Get profile error:", error);
    res.status(500).json({ message: "Server error while fetching profile" });
  }
};
