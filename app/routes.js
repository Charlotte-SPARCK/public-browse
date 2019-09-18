import express from 'express';
import {
  getShowCardsPageContext,
  getSolutionPageContext,
  postCapabilityFilters,
  getFoundationCapabilitySolutions,
} from './controller';

import solutions from './db/solutions';
import capabilities from './db/capabilities';
import { findSolution } from './db/findSolution';
import { filterSolutionsByCapabilities } from './db/filterSolutionsByCapabilities';

const router = express.Router();

router.get('/', async (req, res) => {
  const context = await getShowCardsPageContext();

  res.render('index', context);
});

router.get('/test', async (req, res) => {
  res.send('Hello');
});

router.get('/foundation', async (req, res) => {
  const context = await getFoundationCapabilitySolutions();

  res.render('index', context);
});

router.get('/view/:solutionId', async (req, res) => {
  const { solutionId } = req.params;

  const context = await getSolutionPageContext(solutionId);

  res.render('solution-page', context);
});

router.post('/', async (req, res) => {
  const selectedCapabilities = req.body;

  const context = await postCapabilityFilters(selectedCapabilities);

  res.render('index', context);
});


router.get('/api/v1/solutions', (req, res) => {
  res.status(200).send({
    success: true,
    message: 'solutions retrieved succesfully',
    solutions,
  });
});

router.post('/api/v1/solutions', (req, res) => {
  const selectedCapabilites = req.body;

  const filteredSolutions = filterSolutionsByCapabilities(selectedCapabilites.capabilities);

  res.status(200).send({
    success: true,
    message: 'solutions retrieved succesfully',
    solutions: filteredSolutions,
  });
});

router.get('/api/v1/solution/:solutionId', (req, res) => {
  const solutionId = req.params.solutionId;
  res.status(200).send({
    success: true,
    message: 'solution retrieved succesfully',
    solution: findSolution(solutionId),
  });
});

router.get('/api/v1/capabilities', (req, res) => {
  res.status(200).send({
    success: true,
    message: 'capabilities retrieved succesfully',
    capabilities,
  });
});


module.exports = router;
