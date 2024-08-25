import { Hono } from 'hono'
const app = new Hono()

// app.get('/', (c) => {
//   return c.text('Hello Hono!')
// })

async function authMiddleware(c: any, next: any) {
  // c --> context of this request, request, response
  if (c.req.header("Authorization")) {
    // Do validation
    await next()
  } else {
    return c.text("You dont have access");
  }
}

// fetch requsts
app.post('/', authMiddleware, async(c) => {
  const body = await c.req.json()
  console.log(body);
  console.log(c.req.header("Authorization"));
  console.log(c.req.query("param"));
  
  return c.text('Hello Hono!')
})

export default app
