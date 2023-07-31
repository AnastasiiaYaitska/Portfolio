import {
    NextRequest,
    NextResponse
} from "next/server";

const fs = require("fs");
const path = require("path")

export async function POST(request: NextRequest) {
    const data = await request.json()
    const filePath = path.resolve(process.cwd(), "app/data/submissions.json");
    // path.resolve() it creates an absolute path based on the provided arguments.
    // process.cwd() function returns the current working directory of the Node.js process.The current workin.
    let submissions: any = []
    try {
        const data = fs.readFileSync(filePath, "utf8")
        submissions = JSON.parse(data)
    } catch (error) {
        console.log("Error reading this file", error)

    }
    submissions.push(data)

    try {
        const newData = JSON.stringify(submissions, null, 2);       //write in JSON file again
        fs.writeFileSync(filePath, newData, "utf8")
    } catch (error) {
        console.log("Error reading this file" + error)
    }

    return NextResponse.json({
        data,
        message: "This message was successfully sent"
    })
}

// Read DB - JSON File
// Parse the JSON + add the new data + write in JSON file again

// export async function GET() {
//     return NextResponse.json({
//         message: "Hi, I am here"
//     })

// }