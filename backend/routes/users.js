const express = require("express");
const User = require("../models/User");
const auth = require("../middleware/auth");
const router = express.Router();

const hanldleUserNotFound = (user, res) => {
  if (!user) {
    res.status(404).json({ message: "User not found" });
    return true;
  }
  return false;
};

// Get user profile
router.get("/profile", auth, async (req, res) => {
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
});

// Update user profile
router.put("/profile", auth, async (req, res) => {
  try {
    const allowedFields = [
      "firstName",
      "lastName",
      "phoneNumber",
      "dateOfBirth",
      "profilePicture",
    ];

    const updates = {};
    allowedFields.forEach((field) => {
      if (req.body[field] !== undefined) {
        updates[field] = req.body[field];
      }
    });

    const user = await User.findByIdAndUpdate(req.userId, updates, {
      new: true,
      runValidators: true,
    });

    if (!user) {
      if (hanldleUserNotFound(user, res)) {
        return;
      }
    }

    res.json({
      message: "Profile updated successfully",
      user,
    });
  } catch (error) {
    console.error("Update profile error:", error);
    res.status(500).json({ message: "Server error while updating profile" });
  }
});

// Change password
router.put("/change-password", auth, async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;

    const user = await User.findById(req.userId);
    if (!user) {
      if (hanldleUserNotFound(user, res)) {
        return;
      }
    }

    // Verify current password
    const isMatch = await user.comparePassword(currentPassword);
    if (!isMatch) {
      return res.status(400).json({ message: "Current password is incorrect" });
    }

    // Update password
    user.password = newPassword;
    await user.save();

    res.json({ message: "Password changed successfully" });
  } catch (error) {
    console.error("Change password error:", error);
    res.status(500).json({ message: "Server error while changing password" });
  }
});

// Become a host
router.patch("/become-host", auth, async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.userId,
      { isHost: true, role: "host" },
      { new: true }
    );

    if (!user) {
      if (hanldleUserNotFound(user, res)) {
        return;
      }
    }

    res.json({
      message: "You are now a host!",
      user,
    });
  } catch (error) {
    console.error("Become host error:", error);
    res
      .status(500)
      .json({ message: "Server error while updating host status" });
  }
});

module.exports = router;
// // Get public user profile (for hosts)
// router.get('/:id/public', async (req, res) => {
//   try {
//     const user = await User.findById(req.params.id)
//       .select('firstName lastName profilePicture isHost createdAt');

//     if (!user) {
//         if (hanldleUserNotFound(user, res)) {
//      return;
//  }
//     }

//     res.json({ user });
//   } catch (error) {
//     console.error('Get public profile error:', error);
//     res.status(500).json({ message: 'Server error while fetching public profile' });
//   }
// });
