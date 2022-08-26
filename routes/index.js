import express from 'express';
import needle from 'needle';
import apicache from 'apicache';

const router = express.Router();

// ENV vars
const API_BASE_URL = process.env.API_BASE_URL;
const API_KEY_NAME = process.env.API_KEY_NAME;
const API_KEY_VALUE = process.env.API_KEY_VALUE;

// Initialize the cache
let cache = apicache.middleware;

router.get('/', cache('2 minutes'), async (req, res) => {
  try {
    const params = new URLSearchParams({
      [API_KEY_NAME]: API_KEY_VALUE,
      ...req.query
    });

    const apiRes = await needle('get', `${API_BASE_URL}?${params}`);
    const data = apiRes.body;

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({error});
  }
})

export default router;
