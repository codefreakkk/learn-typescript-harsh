interface Post {
    postId: number;
    postName: string;
    userName?: string;
}

const post1: Post = {
    postId: 1,
    postName: "harsh",
}

console.log(post1);

// extending interfaces
interface Stud {
    studName: string;
    studAge: number;
}

interface StudAddress {
    studCity: string;
    studState: string;
}

interface Data extends Stud, StudAddress {};

const data: Data = {
    studName: "harsh", 
    studAge: 21,
    studCity: "Pune",
    studState: "MH"
};

console.log(`Name of student : ${data.studName}`);
