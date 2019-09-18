import solutions from './solutions';

export const filterSolutionsByCapabilities = (selectedCapabilities) => {
  if (selectedCapabilities) {
    const selectedCapabilitiesToArray = Array.isArray(selectedCapabilities) ? selectedCapabilities : [selectedCapabilities]

    const filteredSolutions = [];

    solutions.map(solution => {
      const listOfCapabilityIds = solution.capabilities.map(capability => capability.id);

      const hasAllSelectedCapabilities = selectedCapabilitiesToArray.every(selectedCapability => listOfCapabilityIds.indexOf(selectedCapability) > -1)

      if (hasAllSelectedCapabilities) {
        filteredSolutions.push(solution)
      }
    });

    return filteredSolutions;
  }

  return solutions;
}