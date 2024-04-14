# Melio Playwright Assignment

## Instructions

### Setup

- Run `npm install` to download all the project dependencies.
- Run `npx playwright install` to install Playwright browsers.

### Running Tests

- Run `npm run test:headed` to execute all the tests (total 2 scenarios).

## Limitations, Issues, and Open Topics:

- The project structure and some of the implementations do not necessarily represent a designated approach for Melio, but they aim to demonstrate the general direction such a project might take and look like at a larger scale.
- API calls should be implemented in a real project to perform operations like setting up data prerequisites and creating state. An example would be Vendor creation, which serves as both a state for a test and a functional flow.

- Parallel execution is turned off due to observed performance issues with the alpha application. For this assignment, I did not delve deeply into this, but in real projects, they should be designed for and capable of parallel execution. The two implemented scenarios here are theoretically safe to run in parallel unless there are constraints related to company user authentication behavior (e.g., "the login").

- The execution currently supports only headed browser mode, as the authentication phase appears to check for this in Melio, possibly to prevent web scraping or scripting in general. This behavior could potentially be modified, but for the scope of the assignment, it was left to work with headed mode only.
