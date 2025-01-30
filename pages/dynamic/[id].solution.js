```javascript
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Simulate fetching data, this could be a network call
    const response = await fetch(`https://api.example.com/data/${req.query.id}`);
    if (!response.ok) {
      const errorData = await response.json(); // Attempt to parse error response
      throw new Error(`API Error ${response.status}: ${errorData?.message || response.statusText}`);
    }
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}
```