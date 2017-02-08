AngularApp.controller("baseController", ["$rootScope", "$scope", "httpService", function($rootScope, $scope, httpService) {

  $scope.form = [];

  $scope.formMethods = {
    addQuestion: function(questionType) {
      var newQuestion = {};
      angular.copy(question.templates.type[questionType], newQuestion);
      newQuestion.orderValue = $scope.form.length + 1;
      $scope.form.push(newQuestion);
    },
    removeQuestion: function(indexOfQuestion) {
      $scope.form.splice(indexOfQuestion, 1);
    },
    addResponse: function(indexOfQuestion, questionType) {
      var newResponse = {};
      angular.copy(question.templates.type[questionType].responseTemplates, newResponse);
      $scope.form[indexOfQuestion].responses.push(newResponse);
    },
    removeResponse: function(indexOfQuestion, indexOfResponse) {
      $scope.form[indexOfQuestion].responses.splice(indexOfResponse, 1);
    },
    seedQuestionWithScaleDefaults: function(indexOfQuestion) {
      console.log("test");
      $scope.form[indexOfQuestion].questionText = "How true is the following statement on a scale from 1 to 5? <INSERT STATEMENT HERE.>";
      $scope.form[indexOfQuestion].responses = [
        {
          responseText: "1",
          responseBoolean: null
        },
        {
          responseText: "2",
          responseBoolean: null
        },
        {
          responseText: "3",
          responseBoolean: null
        },
        {
          responseText: "4",
          responseBoolean: null
        },
        {
          responseText: "5",
          responseBoolean: null
        }
      ];
    },
    publishJSON: function() {
      console.log($scope.form);
    },
    seedJSON: function() {
      $scope.formMethods.addQuestion("multipleChoice");
      $scope.formMethods.addQuestion("openResponse");
      $scope.formMethods.addQuestion("checkboxField");
    }
  };

  var question = {
    templates: {
      type: {
        multipleChoice: {
          type: "multipleChoice",
          orderValue: 0,
          repeater: null,
          questionText: null,
          responseTemplates: {
            responseText: null,
            responseBoolean: null
          },
          responses: [
            {
              responseText: null,
              responseBoolean: null
            }
          ]
        },
        openResponse: {
          type: "openResponse",
          orderValue: 0,
          repeater: null,
          questionText: null,
          answerText: null
        },
        checkboxField: {
          type: "checkboxField",
          orderValue: 0,
          repeater: null,
          questionText: null,
          responseTemplates: {
            responseText: null,
            responseBoolean: null
          },
          responses: [
            {
              responseText: null,
              responseBoolean: null
            }
          ]
        }
      }
    }
  };

  // // This object basically serves as the basic data model.
  // // It is set when the main page AJAX request completes successfully.
  // $scope.model = {};

  // // These strings specify where the API endpoints for this view reside.
  // var apiEndpoint = '/sampleResponse.json';

  // // This is the callback function that executes if the HTTP request for $scope.model returns successfully.
  // var getModelSuccess = function(payload, status) { $scope.model = payload; };
  // // This is the callback function that executes if the HTTP request for $scope.model returns unsuccessfully.
  // var getModelFailure = function(payload, status) {};

  // // Initiate the HTTP request.
  // httpService.getApiEndpoint(apiEndpoint).success(getModelSuccess);

}]);









