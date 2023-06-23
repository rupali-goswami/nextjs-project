export default async (req, res) => {
    const {email} = req.body;
    console.log(email);
      return res.status(200).json({ error: "" });
  }