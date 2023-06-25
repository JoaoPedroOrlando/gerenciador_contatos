export function idGenerator():string{
    return Math.floor(Math.random() * 16777215).toString(16);
}