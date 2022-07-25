const organizeInstructors = function(instructors) {
    let obj = {};
    for (let i = 0; i < instructors.length; i++){
        obj[`${instructors[i].course}`] = instructors[i].name;
    }
    return obj.write("\n");
  };
  
  console.log(organizeInstructors([
    {name: "Samuel", course: "iOS"},
    {name: "Victoria", course: "Web"},
    {name: "Karim", course: "Web"},
    {name: "Donald", course: "Web"}
  ]));
  console.log(organizeInstructors([
    {name: "Brendan", course: "Blockchain"},
    {name: "David", course: "Web"},
    {name: "Martha", course: "iOS"},
    {name: "Carlos", course: "Web"}
  ]));