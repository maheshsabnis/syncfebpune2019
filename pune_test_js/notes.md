# Jasmine Behaviral-Driven-Development

0. dependencies

   1. npm install --save-dev @types/node jasmine @types/jasmine

1. html Reporter --> SpecRunner.html
1. Jasmine Object Model (OM)
   1. describe("",function(){...}) --> Entrypoint to TestCase
   2. it("",function(){.... TEST-CASE Function}) --> The Test Case
      1. Test-Case function
         1. Arrange
            1. Get all dependencies for Test aka Metadata
         2. Act
            1. Perform the Test Execution
         3. Assert
            1. Match the Expectations with Actuals
1. Node.js Setup for Jasmine
   1. https://jasmine.github.io/setup/nodejs.html
   2. npm install -g jasmine
   3. jasmine init
1. Folder Structure Configurations
   1. src or app folder
      1. Source Code
         1. mycode.js
   2. spec folder / test folder
      1. mycode.spec.js (preferred) OR mycodeSpec.js
1. Testing Approaches
   1. If Node.js is used then use require() object to load .js file as "Node Module"
      1. module.exports.<Function-Name> = function(){....}
         1. e.g. module.export.add = function(){....} in mycode.js
      2. In Spec file
         1. var obj = require('mycode.js')
1. Test Case Template
   1. Start the TestCase
      1. describe("Tesr Case desc.",function(){ beforeach(function(){... all...prerequisites common for each test case}); it("actual test case",function(){.... arrange, act, assert}); })
1. Jasmine Assetions or 'the Matchers'
   1. The expect() object
      1. The object that matches the actual result with expected result
         1. toEqual()
            1. value equality
         2. toBe()
            1. deep equality aka identity
         3. Boolean
            1. toBeTruthy
            2. toBeFalsy
         4. containers
            1. toContain()
      2. Front-End Matchares

========================================================================================================================================
Jasmine + Html Reporter

1. SpecRunner.html
   1. Executed using Jasmine-html.js
   2. Load the Source-Code and Spec Test file to test the application

# ========================================================================

Jasmine Phase 2

- Code Coverage Policies
  - Karma Engine
    - karma-Coverage --> load tests (based on Engine) and execute them
      --> Uses reflector to map testcode with actual source code
      and then generate report for map tests with actula source
      code methods
      --> Instambul package for coverage reports
    - karma-jasmine package
      --> links jasmine specs with source code and manage Unit Tests
      --> use jasmine-core package
      --> all jasmine OM aka Matchers
      --> SpecRunner.html inline process
    - karma-<browser>-launcher package
      --> karma-chrome-launcher
- npm install -g karma
- npm install --save-dev karma jasmine-core karma-jasmine karma-coverage
  karma-chrome-launcher istambul
  ==========================
  The "karma init" command to generate karma.config.js

==========================================================================================
Jamsine Tests for Multi-Module Front-End Apps

- jasmine.spyOn() --> method to spy aka mock of external method call. The mock or spy is possible for already available method
  - syntax
    - spyOn(<Object of Method being spied>,"actual method name to be spied")
    - note:
      - Successful test if the method is present else it will throw error and test will be terminated
- jasmine.createSpy() --> method to create spy on the method of calback type e.g. used in ajax calls
- jasme.fakeCall(); method in Jasmine library that is used to make fake calls in case of AJAX (\$,ajax/xmlHttpRequest)
- the expectation for the method been called
  - expect().toHaveBeenCalled();
  - expect().toHaveBeenCalledWith(); --> Spied method with parameters

===========================================================================
Front-End Test

- jasmine and jasmine+jquery packages for UI Behavior testing
- npm install --save-dev jquery jasmine-jquery
- Copy jquery.js and jasmine-jquery.js in "lib" subfolder of Jasmine-Standalone folder
- To load external Html file using "loadFixtrures()" method, the SpecRunner.html must be executed from root of the application
- jasmine-jquery
  - fixture
    - Mechanism to Handle DOM in current context (the process where jasmine test is executing)
      - setFixture(<HTML DOM as string>)
        - Generally used in case when the DOM is generated dynamically
        - aka inline HTML
      - loadFixtures(<HTML External File URL as string>)
        - Internally uses \$.ajax to load html file in current context
  - Access to jQuery
    - Selectors --> $("#"),$("."), \$("<TAG>")
    - Filters --> :
    - Methods --> on/off/click
    - Events
  - jasmine-jquery mappers
    - toHaveText()
    - toHaveValue()
    - toContain()
    - toContainClass()
    - toContainElement()
    - toHaveBeenTrigger()
    - toHaveBeenTriggerOn()
- To write the Front-End Test, load the fixture for every test-case
  - the "beforeEach()" method of Jasmine, that is used to define commons for all tests.
