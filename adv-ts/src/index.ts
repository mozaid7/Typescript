import { z } from "zod";
import express from "express";

const app = express();

interface user {
    id: number,
    name: string,
    age: number,
    email: string,
    password: string
}

// Pick API --> picking specific values from an interface
type UpdateProps = Pick<user, 'name' | 'age' | 'password'>

// Partial API --> converts all the values from an existing interface to optional i.e. name?, age?, email?, etc.
type UpdatePropsOptional = Partial<UpdateProps>

function updateUser(updatedProps: UpdatePropsOptional) {
    // hit the DB to update the user
}

// ReadOnly API --> enforcing that the inner values are also constants use ReadOnly.
type person = {
    readonly name: string,
    readonly age: number;
}
const user: person = {
    name: 'Zaid',
    age: 23
}
// user.age =12; --> throws error bcz age is readonly and can't be changed.

// Record API --> makes the first variable as a key & gives it's type i.e. "Ziddy" is a key with type string. Key:Value Pairs.
type Users = Record<string, {age: number, name: string}>;
const ids: Users = {
    "Zidyy": {age:23, name: "Zaid"},
    "Sammy":{age:32, name: "Sam"},
}

// Map API --> allows us to add values in a more cleaner way and also provides ways to get & delete them.
interface sets {
    age: number,
    name: string,
}
const users = new Map<string, sets>()
users.set("Zidyy", {age:23, name: "Zaid"})
users.set("Sammy", {age:32, name: "Sam"})

const user1 = users.get("Sammy")
users.delete("Sammy")


// Exclude API --> used to exclude values or types from a set of types. Excluding "scroll" from EventType type.
type EventType = 'click' | 'scroll' | 'mousemove';
type ExcludeEvent = Exclude<EventType, 'scroll'>;

const handleEvent = (event: ExcludeEvent) => {
    console.log(`Handling event: ${event}`);
};
handleEvent('click');



// Zod Inference --> allows us to provide or copy the same type to another value like FinalUserSchema inferes/copies/uses the types of userProfileSchma.
const userProfileSchema = z.object({
    name: z.string().min(1),
    email: z.string().email(),
    age: z.number().min(18).optional(),
});

type FinalUserSchema = z.infer<typeof userProfileSchema>;

app.put("/user", (req, res) => {
    const {success} = userProfileSchema.safeParse(req.body);
    const updateBody: FinalUserSchema = req.body;

    if (!success) {
        res.status(411).json({});
        return
    }

    res.json({
        message: "User Updated"
    })
});