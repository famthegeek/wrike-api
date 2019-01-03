var Encoder = function(params){
  var encode = ["metadata",
  "profile",
  "fields",
  "members",
  "addMembers",
  "removeMembers",
  "customStatus",
  "customStatuses",
  "shareds",
  "addShareds",
  "removeShareds",
  "updatedDate",
  "customField",
  "customFields",
  "customColumns",
  "project",
  "responsibles",
  "addResponsibles",
  "removeResponsibles",
  "parents",
  "addParents",
  "removeParents",
  "status",
  "startDate",
  "dueDate",
  "scheduledDate",
  "createdDate",
  "updatedDate",
  "trackedDate",
  "completedDate",
  "authors",
  "dates",
  "followers",
  "addFollowers",
  "removeFollowers",
  "superTasks",
  "addSuperTasks",
  "removeSuperTasks",
  "ids"];
  Object.keys(params).forEach(function(key,index) {
    // key: the name of the object key
    // index: the ordinal position of the key within the object
    if(encode.indexOf(key) > -1){
      params[key] = JSON.stringify(params[key]);
    }
  });

  return params
}

module.exports = Encoder;
