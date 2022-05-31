import { Request, Response, NextFunction } from "express";


export const validateEmail = (email: string) => {
    return email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};


export const validatePhone = (phone: string) => {
    const re = /^[+]/g;
    return re.test(phone);
};


export const vaildRegister = async (req: Request, res: Response, next: NextFunction) => {
    const { name, account, password } = req.body;

    if (!name) {
        return res.status(400).json({ msg: "Please add your name. " });

    } else if (name.length > 20) {
        return res.status(400).json({ msg: "Your name must be less than 20 characters" });

    }

    if (!account) {
        return res.status(400).json({ msg: "Please add your email or phone." });

    } else if (name.length > 20) {
        return res.status(400).json({ msg: "Your name must be less than 20 characters" });

    } else if (!validateEmail(account) && !validatePhone(account)) {
        return res.status(400).json({ msg: "Your email or phone is invalid" });

    }


    if (password.length < 6) {
        return res.status(400).json({ msg: "Password must be at least 6 characters" });

    }
    next();
}