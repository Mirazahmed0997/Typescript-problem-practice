{
    // task 1
    const taskMessage: string="Hello , I've completed this module";
    console.log(taskMessage)

    // task 2 function

    type User={name:string ; age?:number; role:"admin" | "user" | "guest"}

    const CreatUser=<User>(user:User)=>
    {
        return {...user}
    }

    const user1 = CreatUser({name:"Miraz",age:28,role:"admin"})
    const user2 = CreatUser({name:"Ahmed",role:"user"})

    console.log(user1, user2);

    // task 3 type allias

    type UserType={
        name: string;
        address: string;
        HairColor:string;
        eyeColor:string;
        hobbies:string;
        familyMembers:number;
        job:string;
        skills:string;
        metarial:string;
        friends:string;
    }

    const user101: UserType = {
        name: "Miraz",
        address: "123 Main St",
        HairColor: "Black",
        eyeColor: "Brown",
        hobbies: "Reading, Traveling",
        familyMembers: 4,
        job: "Software Engineer",
        skills: "JavaScript, TypeScript",
        metarial: "Bachelor's Degree",
        friends: "Ahmed, Sarah"
    }

    console.log(user101);


    // task 4 union and intersection

    type firstName= {
        first: string;
    }

    type lastName = {
        last: string;
    }
    type fullName = firstName | lastName;

    const person: fullName = {
        first: "Miraz"
    }

    console.log(person);

    type personDetails = {
        name: string;
        skills: string[];
        position1: string;
    }

    type personDetails2 = {
        name: string;
        skills: string[];
        position2: string;
    }

    type personDetails3 = personDetails & personDetails2;
    const personInfo: personDetails3 = {
        name: "Miraz",
        skills: ["JavaScript", "TypeScript"],
        position1: "Software Engineer",
        position2: "Team Co- Lead"
    }

    console.log(personInfo);



    // task 5

    const ReverseString=<T>(param:T) :[T]=> 
    {
        const reversed= param.toString().split('').reverse().join('');
        return reversed ;
    }

    const reversedString = ReverseString<string>("Hello Miraz");
    console.log(reversedString);
}
