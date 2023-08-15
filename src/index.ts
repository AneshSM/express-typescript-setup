import express, {
  Express,
  Request,
  Response,
  ErrorRequestHandler,
  NextFunction,
} from 'express';
import dotenv from 'dotenv-safe';
import helmet from 'helmet';
import add from '@src/add/add';
import createHttpError from 'http-errors';

//* Loads all variables defined in the .env to node environment process.env
dotenv.config();

const PORT: number = Number(process.env.PORT) || 3000;
const app: Express = express();

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
  res.send('<h1>Hi Express TypeScript Backend was Successful</h1>');
});

app.use((req: Request, res: Response, next: NextFunction) => {
  next(new createHttpError.NotFound());
});

const errorHandler: ErrorRequestHandler = (
  err,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(err.status || 500).send({
    status: err.status || 500,
    message: err.message,
  });
};

app.use(errorHandler);

console.log(add(1, 4));

app.listen(PORT, () => console.log(`Running on http://localhost:${PORT}`));
