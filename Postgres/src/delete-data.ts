import { getClient } from "./utils";

// deleting a data from the DB.
async function deleteTodo(todoId: number) {
    const client = await getClient();
    
    const deleteTodoText = 'DELETE FROM todos WHERE id = $1';
    await client.query(deleteTodoText, [todoId]);
    
    console.log(`Todo with ID ${todoId} deleted!`);
}

const todoIdToDelete = 1;
deleteTodo(todoIdToDelete);
