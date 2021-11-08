// Write function to return all the Objects which contain name as "Edwin" 
const employee = [
  { name: "Thomas Edwin", empid: "E111", salary: 10000 },
  { name: "Gregory Mathew", empid: "E555", salary: 12000 },
  { name: "Thomas Edison", empid: "E444", salary: 8000 },
  { name: "GregoryEdwin", empid: "E222", salary: 6000 },
  { name: "Isac Newton", empid: "E666", salary: 20000 },
  { name: "Thomas Gibson", empid: "E333", salary: 4000 },
];

x = (obj) => {
  emp=[]
  obj.forEach((element) => {
    Object.keys(element).forEach((key) => {
      let x = element[key];
      const reg = /Edwin/i;
      const found = reg.test(x);
      if(found){
        emp.push(element)
      }
    });
 });
 return emp;
};
console.log("obj",x(employee));
// write function to return all the employee ids and sum of total salaries.
emp_ids_and_tsal=obj=>{
    empids=[]
    let tsal=0;
    obj.forEach(element=>{
        for(id of Object.keys(element)){
            if(id==="empid"){
                empids.push(element[id])
            }
            else if(id==="salary"){
                tsal=tsal+element[id];
            }
        }
    })
    return [empids,tsal];
}
var params=emp_ids_and_tsal(employee);
console.log("emp_ids",params[0]);
console.log("total_salaries",params[1]);




