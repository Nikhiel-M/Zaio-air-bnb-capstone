const checkHostStatus = async (req, res, next) => {
    try {
        // Assumes req.user is set by authentication middleware
        if (!req.user) {
            return res.status(401).json({ message: "Unauthorized: No user found" });
        }
        // Check if user has 'host' role or isHost property
        // Adjust according to your User model (e.g., req.user.role === 'host' or req.user.isHost === true)
        if (req.user.role === 'host' || req.user.isHost === true) {
            return next();
        } else {
            return res.status(403).json({ message: "Forbidden: Only hosts can access this route" });
        }
    } catch (error) {
        console.error("Host status check error:", error);
        res.status(500).json({ message: "Server error while checking host status" });
    }
};

export default checkHostStatus ;
