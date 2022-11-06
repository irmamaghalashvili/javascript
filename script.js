// davaleba N1
let user = {
    firstname: "giorgi",
    lastname: "smith",
    age: 25,
    studentstatus: "active"
  };
  
console.log(user.studentstatus);


// davaleba N2
let UserNames = ['irma', 'nino', 'sofo', 'qeti', 'maia'];

//   for (let i = 0; i < UserNames.length; i++){
//     console.log(UserNames[i]);
//   }

for (let item of UserNames) {
    console.log(item);
}

  //while
  let x = 0;
  while (x < UserNames.length) {
    console.log(UserNames[x]);
    x++;
  }

  //davaleba N3
let numbers = [5, 6, 10, 25, 3, 7, 4, 100, 28, 36, 89];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 5) {
        console.log(numbers[i]);
    }
  }

  //davaleba N4
  let user = {
    name: 'giorgi',
    age:  20,
    studentstatus: 'active'
}
    if (user.age < 18 && user.studentstatus == 'active'){
        console.log('hello');
    } else if (user.name == 'levan') {
        console.log('hello levani');
    } else if (user.studentstatus == 'active' || user.age < 25){
        console.log('hello world');
    }else {
        console.log('error');
    }

// davaleba N5 
let array = [ [2, -3, 5, 10], [25, -24, -11, 100] , [-6, -7, 10] ]
    for (let i = 0; i < array.length; i++) {
        for (let y = 0; y < array[i].length; y++) {
           if (array[i][y] > 0) {
            console.log(array[i][y]);
            } 
        }
        
    }

// davaleba N6
let array = [ 2, 3, 5, 10,25,24,11, 100 , 6,7, 10 ]

//even
    for (let i of array) {
        if (i % 2 == 0) {
             console.log(i);
        }
    }
//odd
for (let i of array) {
    if (i % 2 != 0) {
        console.log(i);
    }
}

//davaleba N7
function davaleba7(...numb) {
    let sum = 0;
    for (let item of numb) {
        if (item > 0) {
           sum += item; 
        }
        
    }
    console.log(sum);
}

davaleba7(2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8);

//davaleba N8
let user = {
    firstname: 'giorgi',
    lastname: 'saakadze',
    age: 32,
    isloggedin: true
}

  function davaleba8(user) {
    if (user.isloggedin == true) {
        console.log(user.firstname + ' ' + user.lastname);
    }else if (user.isloggedin == false) {
        console.log(false);
    }
  }
  davaleba8(user);
  

  //davaleba N9
  function numbers(...numb) {
        console.log(Math.max(...numb));
  }
  numbers(10, 2, 7, 15, -30, 700);


  //davaleba N10 
  let array = [1,2,4,10,34,5,7,87];

 
    for (let item of array){
        if (item > 0 && item < 10) {
            console.log(item);
        }
    }


// davaleba N11
let numbers =[1,2,3,4,5,6,7,8,9,10]

    for (let item of numbers) {
        if (item == 5) {
            break;
        }
        console.log(item);
    };