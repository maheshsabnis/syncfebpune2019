# Unit Testing

1. jasmine --> Object Model
2. jest --> Object Model
3. mocha --> Object Model
4. karma --> An Engine for Executing one/more tests

- Jasmine
- https://jasmine.github.io/setup/nodejs.html
  - Command-Line using CLI
    - Configure Jasmine
      - npm init -y
        - generate package.json with defaults
      - npm install -g jasmine
        - Install Jasmine in global scope
        - This provides "jasmine" CLI to run test
      - Install Jasmine in local scope for API access
        - npm install --save-dev jasmine
      - The Jasmine intellisense
        - npm install --save-dev @types/node
        - npm install --save-dev @types/jasmine
      - The command "jasmine example"
        - Install Jasmine sample Test Cased for reference
  - Project Configuration in General for Raw-JavaScript
    - The 'src' folder (or src/app path)
      - Contains all source code files
    - The 'spec' folder
      - Contains all test-cases (?)
        - File name for test
          - xxxx.spec.js / xxxx.spec.ts
  - The "jasmine examples" command generate standard reference examples for Unit Test
  - The "jasmine init" provide based testing configuration
  - Browser based testing

================================================================================================================================================
Test Cases

- The code based workflow to perform Unit Test for the source code
- 2 Parts
  - Test Case description
    - The "describe()" object
      - An entry point to TestCase
    - Configuration of dependency creation to be injected for each test case
      - the "beforeEach()" object
      - Defining instances of all objects that each test case wants to use
  - Actual Test Case
    - The "it()" object
    - The test-code
      - Arrange
        - arrangement of test specific dependencies
          - e.g. parameters needed to be passed to the method being tested
        - \*\*\* The "expected result"
      - Act
        - acting upon the test
          - e.g. invoking the code/method to be tested from the source code
          - Generate the "actual result"
      - Assert
        - Test-Case result
          - Compare actual with expected
          - The "expect()" object
            - Equal
            - NotEqual
            - True
            - False
            - GreaterThan
            - Lessthan
            - Be
            - Throw
            - ThrowError
            - Contains
            - isTypeof

==================================================================================================================================================
Jamsine

- spyOn()
  - Standard method to define spy on existing method
- createSpy()
  - Custom Spy for the method which is not exist
- toHavBeenVisited() toHavBeenVisitedWith()

Major use of Spy is performing Ajax Calls

- XmlHttpRequest()
- \$.ajax({}).done().error();
- \$.ajax(); -->Promise
  - Promise.then().catch();

Installing jquery

- npm init -y --> to create package.json
- # npm install --save-dev jquery @types/jquery

# ====================================================================================================================================================================================================

View / Html Front-End Testing
Jasmine + jquery

- jasmine-jquery.js
  - npm install --save-dev jasmine-jquery
- Uses test-case and spy feature of Jasmine and DOM features of jQuery
  - jquery
    - selector
      - #, ., tagname
    - events aka triggers
      - .trigger() method for watch event on View
      - e.g
        - \$("#btn").trigger("click");
  - jasmine
    - describe(), it()
    - spyOnEvent() method to spy the event of DOM
    - setFixture() method, loads HTML DOM for unit testing, loads HTML DOM as string
    - loadFixtute(), loads HTML document using \$.ajax() call
      - load path (default path)
        - spec/javascripts/fixture

============================================================================================================================================================
Front-End Testing for an extetrnal .html file with fixture

1. create a 'spec' folder at root of app and create 'fixtures' sub folder in it.
2. Write spec file in the "spec" folder

============================================================================================================================================================
Angular--> Google and React --> Facebook
MEAN and MERN
Write Tests for

1. Front End
   1. Angular --> Test Library Integration for Testing Environment
      1. Component Test
         1. Lifecycyle
            1. Methods
               1. ngOnInit() etc.
         2. Injection
            1. Service Dependency
         3. DataBinding
         4. DOM Management
            1. Executes Events
            2. Dynamic DOM Generation
               1. Event Triggers
      2. Service Test
         1. Heavy-load Logic
            1. Unit Test
         2. Http Calls
            1. Mock the Http Call
   2. React DOM Test --> DOM Testing Libs by Facebook
      1. Component
         1. DOM Rendering
            1. Test for DOM only
         2. Unidirectional DataFlow
         3. Lifecycle
            1. Only for DOM Rendering and State Change
2. Express + Node
   1. Unit Test for Node.js Logic
      1. DAL using Mongoose --> Jasmine + Spy
   2. Express
      1. Test for REST APIs
         1. Mocha + Chai

# ============================================================================

Angular

1. @angular/common/testing
2. @angular/core/testing
3. @angular/forms/testing
4. @angular/platform-browser/testing
5. @angular/platform-browser-dynamic/testing
6. @angular/http/testing
   Testing Object Model
7. TestBed --> Class representing an entry-point to Testing Model
   1. Environment
      1. Module Dependencies
         1. Browser Module for testing
         2. FormsModule for
            1. TwoWay Data-binding
   2. Component Testing
      1. Load Component
      2. Instantiate Component
      3. Load Component Fixture
         1. Dynamic Updates in DOM based on
            1. DataBinding
            2. Events
   3. Service Testing
      1. Load Service
      2. Instantiate Service
      3. Http Mock
         1. External Connection MockBackEnd
8. karma + jasmine integration with angular
   1. zone.js
9. npm install -g karma
   1. npm install --save-dev karma
   2. npm install --save-dev jasmine-core
   3. npm install --save-dev karma-jasmine
   4. npm install --save-dev karma-chrome-launcher
   5. npm install --save-dev karma-jasmine-html-reporter
10. karma init
    1. create karma.config.js
       1. Configuration for
          1. loading and executing test
          2. Loading browser instance
11. Mocha+Chai --> Used for REST API testing using Node+Express
    1. npm install --save-dev @types/node
    2. npm install --save-dev express
    3. The REST API must be running to execute Mocha Test
    4. Mocha is server process for executing Test
       1. npm install -g mocha
       2. npm install --save-dev mocha
    5. Chai is the Test Object Model
       1. npm install --save-dev chai
12. mocha is the command line tool

============================================================================================================================================================
React testing

1. react-unit
2. jest --> Facebook
3. enzyme --> Uses jest internally

npm install --save-dev jest enzyme

describe("",function(){it("",function(){})})

npm install -g create-react-app
create-react-app my-test-app

- create react app of name my-test-app
- npm install --save-dev jest enzyme
- npm install --save-dev enzyme-adapter-react-16
