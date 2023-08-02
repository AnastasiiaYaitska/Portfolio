import React from "react";
import {
    NextRequest,
    NextResponse
} from "next/server";
import mongoose from "mongoose";
import Message from "../../../models/Message";


export async function POST(req: NextRequest, res: NextResponse) {

    const MONGODB_URL = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGODB_CLUSTER}.ruvxbwk.mongodb.net/`;

    let client;
    try {
        client = await mongoose.connect(MONGODB_URL)
        console.log("DB connected")
    } catch (error) {
        console.log("There was an error connection to the DB", error)
    }
    const data = await req.json()
    const { name, email, message } = data;

    if (!name || !email || !message || !email.includes("@") || message.trim() === "" || name.trim() === "") {
        NextResponse.json({ message: "Invalid input, please fill all the fields" }, { status: 422 });
        return;
    }

    const newData = {
        ...data,
        date: new Date,
    }

    try {
        await Message.create(newData)
        console.log("Message sent")
        return NextResponse.json({ message: "Thank you for your message!" }, { status: 201 })
    } catch (error) {
        console.log("Message could't be sent", error)
        return NextResponse.json({ message: "Error sending the message" }, { status: 500 })

    }
}
