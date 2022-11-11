// importar a função de comparação de senha
import { compare } from "bcryptjs";
// importar a função sign para criar o token
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { IUsersRepository } from "../../repositories/IUserRepository";

interface IRequest {
    email: string;
    password: string;
}

interface IResponse {
    user: {
        name: string;
        email: string;
    };
    token: string;
}

@injectable()
class AuthenticateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) {}

    async execute({ email, password }: IRequest): Promise<IResponse> {
        // verificar se o usuário existe
        const user = await this.usersRepository.findByEmail(email);

        if (!user) {
            throw new AppError("Email or password is incorrect!!", 401);
        }

        // verificar se a senha está correta
        const passwordMatch = await compare(password, user.password);

        if (!passwordMatch) {
            throw new Error("Email or password is incorrect!!");
        }

        // criar token e abaixo no sign foi criada uma hash MD5, pra isso vc pode consultar no google: generate hash MD5
        const token = sign({}, "484f1c5d540e55294143e3d476346509", {
            subject: user.id,
            expiresIn: "1d",
        });

        const tokenReturn: IResponse = {
            token,
            user: {
                name: user.name,
                email: user.email,
            },
        };
        return tokenReturn;
    }
}

export { AuthenticateUserUseCase };