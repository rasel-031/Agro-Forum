const resolve = { message: "User registered successfull.", success: true };
const reject = { message: "User registered failed.", success: false };

export const userSignUp = (req, res) => {
  try {
    console.log(req.body);
    res.send(JSON.stringify(resolve));
  } catch (error) {
    console.log(error);

    res.send(JSON.stringify(reject));
  }
};
