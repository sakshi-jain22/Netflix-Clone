import express from 'express';

import {
  searchPerson,
  searchMovie,
  searchTv,
} from '../controllers/search.controller.js';
import {
  getSearchHistory,
  removeItemFromSearchHistory,
} from '../controllers/searchHistory.controller.js';

const router = express.Router();

router.get('/person/:query', searchPerson);
router.get('/movie/:query', searchMovie);
router.get('/tv/:query', searchTv);

// For search history
router.get('/history', getSearchHistory);
router.delete('/history/:id', removeItemFromSearchHistory);

export default router;
