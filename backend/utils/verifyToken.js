import jwt from "jsonwebtoken";

export const authenticate = (req, res, next) => {
  const authToken = req.cookies.accessToken;

  if (!authToken) {
    return res
      .status(401)
      .json({ success: false, message: "No token, Authentication denied" });
  }

  // verifying token
  jwt.verify(authToken, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res
        .status(401)
        .json({ success: false, message: "Token is invalid" });
    }

    req.user = user;
    next();
  });
};

export const verifyUser = (req,res,next)=>{
  authenticate(req,res,next,()=>{
      if(req.user.id === req.params.id || req.user.role === "admin"){
        next();
      }
      else{
       return res.status(401)
        .json({ success: false, message: "you're not authenticated" });
      }
  })
}
export const verifyAdmin = (req,res,next)=>{
  authenticate(req,res,next,()=>{
      if( req.user.role === "admin"){
        next();
      }
      else{
        return res.status(401)
        .json({ success: false, message: "you're not authorize" });
      }
  })
}
