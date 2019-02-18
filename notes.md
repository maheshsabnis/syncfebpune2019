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
