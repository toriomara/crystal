import {articles} from '../../../data/newsData'

export default function handler(req, res) {
  res.status(200).json(articles)
}