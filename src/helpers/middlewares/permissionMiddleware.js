const checkUserRole = (requiredRoles) => async (req, res, next) => {
  try {
    const userRole = req.userRole;
    console.log(userRole,"userrole")

    if (!requiredRoles.includes(userRole)) {
      res.status(403).json({ error: "Access denied" });
    }

    next(); // User has the required role, proceed to the next middleware/route
  } catch (error) {
    console.error("Error checking user role:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = checkUserRole;
