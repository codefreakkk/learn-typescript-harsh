var Roles;
(function (Roles) {
    Roles["admin"] = "admin";
    Roles["user"] = "user";
})(Roles || (Roles = {}));
var user1 = {
    name: "harsh",
    role: Roles.admin
};
var user2 = {
    name: "prachi",
    role: Roles.user
};
console.log(user1.role);
console.log(user2.role);
