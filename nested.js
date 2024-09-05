const varsity = {
    name: 'South East University',
    short: "SEU",
    department:{
        cse: 'Batch 19',
        eee: 'Batch 26'
    }
}
console.log(varsity.department.cse);
delete varsity.department.eee;
console.log(varsity);