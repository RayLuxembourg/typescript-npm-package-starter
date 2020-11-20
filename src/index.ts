export interface Person {
    name: string
    lastName: string
}
export const welcome = ({ lastName, name }: Person) => {
    console.log(`Welcome ${name} ${lastName} to typescript npm package starter`)

}