import axios from 'axios';
import { createSolutionPageContext } from './contextCreator/createSolutionPageContext';
import { createShowCardsPageContext } from './contextCreator/createShowCardsPageContext';
import { convertCapabilitiesToArrayIfRequired, determineFoundationCapabilities } from './helpers';

const config = {
  'summary-section': {
    showTitle: false,
  },
  features: {
    showTitle: true,
  },
  'capability-section': {
    showTitle: true,
    displayType: 'columns',
  },
};

export const getShowCardsPageContext = async () => {
  const solutionData = await axios.get('https://public-browse.herokuapp.com/api/v1/solutions');

  const capabilitiesData = await axios.get('https://public-browse.herokuapp.com/api/v1/capabilities');

  const context = createShowCardsPageContext(
    solutionData.data.solutions, capabilitiesData.data.capabilities, {}, config,
  );

  return context;
};

export const getSolutionPageContext = async (solutionId) => {
  const solutionData = await axios.get(`https://public-browse.herokuapp.com/api/v1/solution/${solutionId}`);

  const context = createSolutionPageContext(solutionData.data.solution);

  return context;
};

export const postCapabilityFilters = async (selectedCapabilities) => {
  const selectedCapabilitiesToArray = convertCapabilitiesToArrayIfRequired(selectedCapabilities);

  const solutionData = await axios.post('https://public-browse.herokuapp.com/api/v1/solutions', selectedCapabilitiesToArray);

  const capabilitiesData = await axios.get('https://public-browse.herokuapp.com/api/v1/capabilities');

  const context = createShowCardsPageContext(
    solutionData.data.solutions, capabilitiesData.data.capabilities, selectedCapabilities, config,
  );

  return context;
};

export const getFoundationCapabilitySolutions = async () => {
  const capabilitiesData = await axios.get('https://public-browse.herokuapp.com/api/v1/capabilities');

  const selectedCapabilities = determineFoundationCapabilities(capabilitiesData.data.capabilities);

  const solutionData = await axios.post('https://public-browse.herokuapp.com/api/v1/solutions', selectedCapabilities);

  const context = createShowCardsPageContext(
    solutionData.data.solutions, capabilitiesData.data.capabilities, selectedCapabilities, config,
  );

  return context;
};
