import db from './solutions';

export const findSolution = (solutionId) => {
  const solution = db.find(sol => {
    if (sol.id === solutionId) {
      return sol
    }
  });

  return solution;
}