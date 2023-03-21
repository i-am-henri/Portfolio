// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  if (req.method == "POST") {
    res.send({state: "Accepted")
  } else if (req.method == "GET") {
    res.send({state: "not Accepted"})
  }
}
