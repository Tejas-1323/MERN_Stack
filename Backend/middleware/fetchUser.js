import jwt from 'jsonwebtoken';

const fetchUser = async (req, res, next) => {
  //get the user ffrom the jwt token and add id to req object
  try {
    const token = req.header('auth-token');
    if (!token) {
      res
        .status(401)
        .send({ error: 'Please authenticate using a valid token' });
    }

    const database = jwt.verify(token, process.env.S_KEY);

    req.user = database.user;

    next();
  } catch (error) {
    res
      .status(401)
      .send({ error: '>>>>>>> Please authenticate using a valid token' });
  }
};

export default fetchUser;
