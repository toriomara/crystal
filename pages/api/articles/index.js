//import {articles} from '../../../data/newsData.js'
import {articles} from '../../../src/data/newsData'

export default function handler(req, res) {
  res.status(200).json(articles)
}

