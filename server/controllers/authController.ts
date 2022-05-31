import { Response, Request } from "express";
import bcrypt from 'bcrypt';
import { Jwt } from "jsonwebtoken";
import userModel from "../models/userModel";

const authControllers = {
    register: async (req: Request, res: Response) => {
        try {
            const { name, account, password } = req.body;

            const user = await userModel.findOne({ account });

            //  if (!user) res.status(400).json({ msg: "Email or phone number already exists." }); //CLIENT ERROR REPONSES -  malformed request syntax, invalid request message framing, or deceptive request routing

            const passwordHashed = await bcrypt.hash(password, 12);

            const newUser = new userModel({
                name, account, password: passwordHashed
            })

            res.json({
                status: "OK",
                msg: "Regiser successfully!",
                data: newUser
            });


        } catch (error: any) {
            return res.status(500).json({ msg: error.message });// SERVER ERROR RESPONSES - the sever has encounterted a situation it doesn't know to handle
        }
    }
}

export default authControllers;