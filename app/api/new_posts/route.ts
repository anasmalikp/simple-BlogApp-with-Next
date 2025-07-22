import { dbConnect } from '@/lib/mongoos';
import { Task } from '@/models/Task';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    try {
        const data = await req.json();
        await dbConnect();

        const task = await Task.create(data);
        
        return NextResponse.json({ message: 'Post created successfully', data }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: 'Invalid request', error: String(error) }, { status: 400 });
    }
}