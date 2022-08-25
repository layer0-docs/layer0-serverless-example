import Request from "@layer0/core/router/Request";
import Response from "@layer0/core/router/Response";

/**
 * GET /hello/:name
 * @param req The request
 * @param res The response
 */
export default function hello(req: Request, res: Response) {
  const name = req.params?.name;
  res.setHeader("content-type", "application/json");
  res.body = JSON.stringify({ message: `hello ${name}` });
}
