const jwt = require("jsonwebtoken");

const createJWTService = ({ payload }) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET);
  return token;
};

const isTokenValid = (token) => jwt.verify(token, process.env.JWT_SECRET);

const attachCookiesToResponse = ({ res, user, refreshToken }) => {
  const accessTokenJWT = createJWTService({ payload: { user } });
  const refreshTokenJWT = createJWTService({ payload: { user, refreshToken } });

  // should be in the env file
  const oneDay =
    process.env.SECONDS *
    process.env.MINUTES *
    process.env.HOURS *
    process.env.DAY;
  const longerExp =
    process.env.SECONDS *
    process.env.MINUTES *
    process.env.HOURS *
    process.env.DAY *
    process.env.DAYS;

  res.cookie("accessToken", accessTokenJWT, {
    httpOnly: true,
    signed: true,
    expires: new Date(Date.now() + oneDay),
  });
  res.cookie("refreshToken", refreshTokenJWT, {
    httpOnly: true,
    signed: true,
    expires: new Date(Date.now() + longerExp),
  });
};

module.exports = {
  createJWTService,
  isTokenValid,
  attachCookiesToResponse,
};
