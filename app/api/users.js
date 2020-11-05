import client from "./client";

const register = (user_details) => client.post("/users/register", {user_details});

	

export default { register };
