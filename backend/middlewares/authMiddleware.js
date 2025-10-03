

// Protect routes with access token
// const auth = (roles = []) => {
//   return (req, res, next) => {
//     // Get token from headers
//     const authHeader = req.headers.authorization;
//     if (!authHeader || !authHeader.startsWith("Bearer ")) {
//       return res.status(401).json({ message: "No token provided" });
//     }

//     const token = authHeader.split(" ")[1];

//     try {
//       const decoded = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
//       req.user = {
//         id: decoded.userId,
//         role: decoded.role,
//       };

//       // If roles array provided, check role
//       if (roles.length && !roles.includes(req.user.role)) {
//         return res.status(403).json({ message: "Forbidden: Access denied" });
//       }

//       next();
//     } catch (err) {
//       return res.status(401).json({ message: "Invalid token" });
//     }
//   };
// };

// const jwt = require("jsonwebtoken");

// const auth = (req, res, next) => {
//      const authHeader = req.cookies.accessToken || req?.headers?.authorization?.split(" ")[1];
        
//   // const authHeader = req.headers.authorization;
//   if (!authHeader || !authHeader.startsWith("Bearer ")) {
//     return res.status(401).json({ message: "No token provided" });
//   }

//   const token = authHeader.split(" ")[1];

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
//     req.user = {
//       id: decoded.userId,
//       role: decoded.role,
//     };
//     next();
//   } catch (err) {
//     return res.status(401).json({ message: "Invalid token" });
//   }
// };

// module.exports = { auth };
const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  try {
    console.log('Cookies:', req.cookies);
    console.log('Headers:', req.headers);

    let token;
    if (req.cookies?.accessToken) {
      token = req.cookies.accessToken;
    } else if (req.headers?.authorization?.startsWith("Bearer ")) {
      token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Authentication token missing"
      });
    }

    try {
      const decode = jwt.verify(token, process.env.JWT_ACCESS_SECRET);

      // Attach both id and role
      req.user = {
        id: decode.id,
        role: decode.role
      };

      console.log('Decoded token:', decode);
      next();
    } catch (jwtError) {
      return res.status(401).json({
        success: false,
        message: "Invalid token",
        error: jwtError.message
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      error: true,
      success: false,
    });
  }
};

module.exports = { auth };
