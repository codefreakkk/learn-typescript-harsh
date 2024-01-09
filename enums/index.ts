
enum Roles {
    admin = "admin",
    user = "user"
}

type LoginDetails = {
    name: string;
    role: Roles
}

const user1: LoginDetails = {
    name: "harsh",
    role: Roles.admin
}

const user2: LoginDetails = {
    name: "prachi",
    role: Roles.user
}

console.log(user1.role);
console.log(user2.role);
