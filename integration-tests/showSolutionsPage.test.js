import nock from 'nock';
import { Selector } from 'testcafe';
import allSolutionFixture from './fixtures/allSolutions.json';
import allCapabilitiesFixture from './fixtures/allCapabilities.json';
import aSolutionFixture from './fixtures/aSolution.json';
import filteredSolutionsFixture from './fixtures/filteredSolutions.json';

const mocks = () => {
  nock('http://localhost:8080')
    .get('/api/v1/Solutions')
    .reply(200, allSolutionFixture);

  nock('http://localhost:8080')
    .get('/api/v1/Capabilities')
    .reply(200, allCapabilitiesFixture);

  nock('http://localhost:8080')
    .get('/api/v1/Solution/00001')
    .reply(200, aSolutionFixture);

  nock('http://localhost:8080')
    .post('/api/v1/Solutions')
    .reply(200, filteredSolutionsFixture);

  nock('http://localhost:8080')
    .get('/api/v1/Capabilities')
    .reply(200, allCapabilitiesFixture);
};

const pageSetup = async (t) => {
  mocks();
  await t.navigateTo('http://localhost:1234/');
};

fixture('Show Solutions Page');

test('should render the title', async (t) => {
  pageSetup(t);

  const title = Selector('h1');

  await t
    .expect(title.innerText).eql('View all solutions');
});

test('should render page description', async (t) => {
  pageSetup(t);

  const pageDescription = Selector('.nhsuk-body-l');

  await t
    .expect(pageDescription.innerText).eql('All the solutions. Check them out.');
});

test('should render the solutions cards', async (t) => {
  pageSetup(t);

  const solutionsCards = Selector('[data-test-id="solution-card"]');

  await t
    .expect(solutionsCards.count).eql(3);
});

test('should render the capabilites filter', async (t) => {
  pageSetup(t);

  const capabilityFilter = Selector('.nhsuk-grid-column-one-third');

  await t
    .expect(capabilityFilter.count).eql(1);
});

test('should navigate to the solution details page when clicking on the title of the solution', async (t) => {
  pageSetup(t);

  const firstSolutionsCard = Selector('[data-test-id="solution-card"] h3').nth(0);

  await t
    .click(firstSolutionsCard)
    .navigateTo('./00001');
});

test('should filter the solutions based upon the capabilities selected', async (t) => {
  pageSetup(t);

  const solutionsCards = Selector('[data-test-id="solution-card"]');

  await t
    .expect(solutionsCards.count).eql(3)
    .expect(Selector('#capabilities-1:checked').exists).notOk()
    .click(Selector('#capabilities-1'))
    .expect(Selector('#capabilities-1:checked').exists).ok()
    .click(Selector('[data-test-id="capability-filter"] button'))
    .expect(solutionsCards.count).eql(2)
    .expect(Selector('#capabilities-1:checked').exists).ok();
});

test('should navigate to the foundation solutions view when foundation capability selection is clicked', async (t) => {
  pageSetup(t);

  const solutionsCards = Selector('[data-test-id="solution-card"]');

  await t
    .expect(solutionsCards.count).eql(3)
    .expect(Selector('#capabilities-1:checked').exists).notOk()
    .expect(Selector('#capabilities-2:checked').exists).notOk()
    .click(Selector('[data-test-id="foundation-filter"] button'))
    .navigateTo('./foundation');
});
