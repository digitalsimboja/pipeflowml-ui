import type { NextApiRequest, NextApiResponse } from 'next'

const saltRounds = 10;


export default async function signUpHandler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      let formData = req.body;
      delete formData.confirmPassword;
    
      console.log(formData)
      res.status(200).json({ message: "User created succesfully" });
    } catch (error) {
      console.error("Error signing up user:", error);
      res.status(500).json({ error: "Error signing up" });
    }
  } else {
    res.status(405).end();
  }
}