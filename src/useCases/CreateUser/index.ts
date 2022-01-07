import { MailTrapMailProvider } from "../../providers/implementations/MailTrapMailProvider"
import { PostgresUsersRepository } from "../../repositories/implementations/PostgresUsersRepository"
import { CreateUserController } from "./CreateUserController"
import { CreateUserUseCase } from "./CreateUserUseCase"

const mailTrapMailProvider = new MailTrapMailProvider()
const postgresUsersRepository = new PostgresUsersRepository()

const createUsersUseCase = new CreateUserUseCase(
  postgresUsersRepository,
  mailTrapMailProvider
)

const createUserController = new CreateUserController(createUsersUseCase)

export { createUsersUseCase, createUserController }