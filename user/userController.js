const { createUserervice,createJWTService,getUserService ,loginUserService,getUserByPhoneService,
  getAllDataUserByPhoneService,createUserJWTService,comparePasswordService} = require("../user/userService");

const { StatusCodes } = require("http-status-codes");
const  bcrypt  = require("bcryptjs");
const {
  attachCookiesToResponse,
  createTokenUser,
  createHash,
} = require("../utils");
const crypto = require("crypto");
const {
  getTokenService,
  createTokenService,
  deleteTokenService,
} = require("../token/tokenService");

const getUserController = async (req, res) => {
  const user = await getUserService();
  res.status(StatusCodes.OK).send({ user: user });
};

const createUserController = async (req, res) => {
  const { phone, name, password } = req.body;
  if (password.length < 8) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .send({ msg: `Password should be at least 8 characters` });
  }
  const salt = bcrypt.genSaltSync(10);
  const passwordHashed = bcrypt.hashSync(password, salt);
  const new_user = await createUserervice(phone, name, passwordHashed);
  res.status(StatusCodes.CREATED).send({ msg: `User created successefully` });
};

const loginUserController = async (req, res) => {
  
  const { phone, password } = req.body;
  if (!phone || !password) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .send({ msg: `Please provide your credentials` });
  }
  const user = await loginUserService(phone);
  if (Object.keys(user).length === 0) {
    return res
      .status(StatusCodes.FORBIDDEN)
      .send({ msg: `Invalid credentials` });
  }
  const password_match = comparePasswordService(password, user[0].password);
  if (!password_match) {
    return res
      .status(StatusCodes.FORBIDDEN)
      .send('your phone and/or password are/is wrong');
  }



  const tokenUser = createTokenUser(
    user[0].id,
    user[0].role,
    user[0].name
  );

  // create refresh token

  let refreshToken = '';

  //check for existing token

  const existingToken = await getTokenService(user[0].id);
  if (Object.keys(existingToken).length !== 0) {
    const isValid = existingToken[0].isValid;
    if (!isValid) {
      return res
        .status(StatusCodes.UNAUTHORIZED)
        .send({ msg: 'Invalid Credentials' });
    }
    refreshToken = existingToken.refreshToken;
    attachCookiesToResponse({ res, user: tokenUser, refreshToken });
    res.status(StatusCodes.OK).send({ user: tokenUser });
    return;
  }
  refreshToken = crypto.randomBytes(40).toString('hex');
  const userAgent = req.headers['user-agent'];
  const ip = req.ip;
  const userToken = {
    refreshToken,
    ip,
    userAgent,
    user: user[0].id,
  };
  await createTokenService(userToken);
  attachCookiesToResponse({ res, user: tokenUser, refreshToken });
  res.status(StatusCodes.OK).send({ user: tokenUser });
  // res.status(StatusCodes.OK).send({token})
};

const logoutUserController = async(req, res) => {
  console.log('userID : ', req.user.id);
  const loggedOutCompany = await deleteTokenService(req.user.id)
  res.cookie('accessToken', 'logout', {
    httpOnly: true,
    expires: new Date(Date.now()),
  });
  res.cookie('refreshToken', 'logout', {
    httpOnly: true,
    expires: new Date(Date.now()),
  });
  res.status(StatusCodes.OK).send({ msg: 'You logged out!' });
}
module.exports = { createUserController, getUserController ,loginUserController ,logoutUserController};
